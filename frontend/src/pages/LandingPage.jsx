import {useNavigate} from 'react-router-dom';
export const LandingPage = () => {
    const navigate = useNavigate();
  
    const handleContinue = () => {
      navigate('/signup');
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Paytm</h1>
        <p className="text-lg mb-8">Your digital payment experience begins here</p>
        <button
          onClick={handleContinue}
          className="px-6 py-3 bg-yellow-500 text-gray-800 font-semibold rounded-lg hover:bg-yellow-400 transition duration-300 ease-in-out"
        >
          Continue to Sign Up
        </button>
      </div>
    );
  };