const express = require("express");
const cors = require('cors')
const dotenv=require('dotenv')
dotenv.config()
const app = express();
app.use(express.json());
app.use(cors())
const rootRouter = require("./routes/index");
app.use("/api/v1", rootRouter);
app.listen(3000);