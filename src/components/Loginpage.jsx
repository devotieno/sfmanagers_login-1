import { useState } from 'react';
import { FiLock, FiUnlock, FiEye, FiEyeOff } from 'react-icons/fi';
import Chipimg from '../assets/images/chipimg2.jpg'
import Footer from './shared/footer';

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLocked, setIsLocked] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setIsLocked(!isLocked);
  };

  return (
    <div className="w-full max-w-2xl">
      {/* Horizontal ATM Card */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl shadow-2xl p-6 border-2 border-blue-400 border-opacity-30">
        <div className="flex justify-around h-64">
          {/*Section 1 - Chip & Branding */}
          <div className="w-1/4 flex flex-col justify-between pr-4 border-r border-blue-500 border-opacity-30">
            <div className="flex flex-col items-start">
              <div className='w-1/3'>
                <img src={Chipimg} alt="Chipimg" />
              </div>
              <div className="text-white font-bold text-xl rotate-90 origin-left whitespace-nowrap mt-2">
                SF MANAGERS
              </div>
            </div>
            <div className="text-blue-200 text-s">LOGIN CARD</div>
          </div>

          {/*Section 2 - Login Form */}
          <div className="w-2/3 px-6 flex flex-col justify-center">
            <div className="space-y-4">
              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-blue-400 py-2 text-white placeholder-blue-300 focus:outline-none"
                  placeholder="ENTER EMAIL"
                />
                <div className="absolute right-0 top-2 text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>

              {/* Password Field with Toggle */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-blue-400 py-2 text-white placeholder-blue-300 focus:outline-none pr-8"
                  placeholder="ENTER PIN"
                />
                <div className="absolute right-0 top-2 flex space-x-1">
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility}
                    className="text-blue-300 hover:text-white transition-colors"
                  >
                    {isLocked ? (
                      <FiLock className="h-5 w-5" />
                    ) : (
                      <FiUnlock className="h-5 w-5" />
                    )}
                  </button>                  
                </div>
              </div>
              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg transition">
                AUTHENTICATE
              </button>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <Footer/>
      </div>
    </div>
  );
};

export default LoginCard;