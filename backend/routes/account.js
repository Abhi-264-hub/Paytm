
const express = require('express');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');
const  { authMiddleware } = require("../middleware");

const router = express.Router();
router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
});
router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    const { amount, to } = req.body;

    if (amount <= 0) {
        return res.status(400).json({ message: "Invalid transfer amount" });
    }

    try {
        await session.startTransaction();

        const account = await Account.findOne({ userId: req.userId }).session(session);
        if (!account || account.balance < amount) {
            throw new Error("Insufficient balance");
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);
        if (!toAccount) {
            throw new Error("Invalid account");
        }

        // Atomic update for sender's balance
        const updateSender = await Account.updateOne(
            { userId: req.userId, balance: { $gte: amount } },
            { $inc: { balance: -amount } }
        ).session(session);
        if (!updateSender.modifiedCount) {
            throw new Error("Failed to update sender's balance");
        }

        // Update recipient's balance
        await Account.updateOne(
            { userId: to },
            { $inc: { balance: amount } }
        ).session(session);

        await session.commitTransaction();
        res.json({ message: "Transfer successful" });
    } catch (error) {
        await session.abortTransaction();
        res.status(400).json({ message: error.message });
    } finally {
        session.endSession();
    }
});
module.exports = router;