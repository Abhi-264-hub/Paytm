import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Signup} from './pages/Signup.jsx'
import { Signin } from './pages/Signin.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { SendMoney } from './pages/SendMoney.jsx';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
