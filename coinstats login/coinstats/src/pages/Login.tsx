import { useState } from "react";

import {
  FaFacebookF,
  FaApple,
  FaGoogle,
  FaXTwitter,
} from "react-icons/fa6";
import { useUser } from "./AuthContext";

import { useNavigate } from "react-router-dom";



const LoginModal = () => {
  const {setUserData} =useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  
  const navigation = useNavigate();
   // After successful login
   

  const validateForm = () => {
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset all errors
    setEmailError("");
    setPasswordError("");

    if (!email || !emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      valid = false;
    }

    return valid;
  };

  const handleLogin = () => {
    setShowErrors(true);
    if (validateForm()) {
      setUserData({
        email: email,
        password: password
      });
      console.log("Logging in with", { email, password });
      // Proceed to API call or further login logic
      navigation("/verify");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <img src="/home.webp" className="w-40 pb-4" alt="Logo" />
      <div className="bg-zinc-900 text-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-6 text-xl font-semibold">
            <span className="text-orange-400 border-b-2 border-orange-400 pb-1 cursor-pointer">Log In</span>
            <span className="text-zinc-500 cursor-pointer">Sign Up</span>
          </div>
          <button className="text-2xl">&times;</button>
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            placeholder="user@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none"
          />
          {showErrors && emailError && <span className="text-red-500 text-sm">{emailError}</span>}
        </div>

        {/* Password Field */}
        <div className="mb-2">
          <div className="flex justify-between text-sm mb-2">
            <label>Password</label>
            <span className="text-orange-400 cursor-pointer">Forgot Password?</span>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-white"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {showErrors && passwordError && <span className="text-red-500 text-sm">{passwordError}</span>}
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-orange-400 text-black font-bold py-3 rounded-lg mt-4 mb-6"
        >
          Log In
        </button>

        {/* OR Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-1 h-px bg-zinc-700"></div>
          <span className="px-4 text-sm text-zinc-500">OR</span>
          <div className="flex-1 h-px bg-zinc-700"></div>
        </div>

        {/* Social Login */}
        <div className="flex justify-between">
          <FaXTwitter className="text-4xl bg-zinc-800 p-2 rounded-full" />
          <FaFacebookF className="text-4xl bg-zinc-800 p-2 rounded-full" />
          <FaApple className="text-4xl bg-zinc-800 p-2 rounded-full" />
          <FaGoogle className="text-4xl bg-zinc-800 p-2 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
