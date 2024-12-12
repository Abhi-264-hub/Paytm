
import './App.css'
import './index.css';
import {Signup} from './pages/Signup.jsx'
import { Signin } from './pages/Signin.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { SendMoney } from './pages/SendMoney.jsx';
import {LandingPage} from  './pages/LandingPage.jsx';
import { BrowserRouter ,Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage />} />
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
