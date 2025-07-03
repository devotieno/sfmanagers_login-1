import { useState } from 'react';
import LoginCard from "./components/Loginpage";
import SignupCard from "./components/SignupCard";

function App() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchToSignup = () => {
    setIsLoginMode(false);
  };

  const switchToLogin = () => {
    setIsLoginMode(true);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${
      isLoginMode 
        ? 'bg-gradient-to-br from-gray-900 to-blue-900' 
        : 'bg-gradient-to-br from-gray-900 to-green-900'
    }`}>
      {isLoginMode ? (
        <LoginCard onSwitchToSignup={switchToSignup} />
      ) : (
        <SignupCard onSwitchToLogin={switchToLogin} />
      )}
    </div>
  );
}

export default App;