import { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa6";
import { PiKeyBold } from "react-icons/pi"; // For passkey icon
import { MdAccountBalanceWallet } from "react-icons/md"; // For wallet icon
import { useUser } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUserData } = useUser();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password,setPassword]= useState("");
  const [showErrors, setShowErrors] = useState(false);

  const navigate = useNavigate();

  const validateEmail = () => {
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmailError("");

    if (!email || !emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    return valid;
  };

  const handleContinue = () => {
    setShowErrors(true);
    if (validateEmail()) {
      setUserData({email,password});
      console.log("Continuing with", { email });
      navigate("/verify");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="bg-zinc-900 text-white p-6 rounded-xl w-full max-w-md shadow-lg">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6">Sign in to Coinbase</h2>

        {/* Email Field */}
        <form onSubmit={(e)=>{
          e.preventDefault();
           handleContinue();
        }} className="mb-4">
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-2 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none border border-zinc-700"
          />
          {showErrors && emailError && (
            <span className="text-red-500 text-sm">{emailError}</span>
          )}
           <label className="block text-sm mb-2">Password</label>
          <input
            type="password"
            placeholder="Your email address"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-black text-white placeholder-gray-400 mb-4 focus:outline-none border border-zinc-700"
          />

        {/* Continue Button */}
        <button
        type="submit"
        // onClick={handleContinue}
        className="w-full bg-blue-700 hover:bg-blue-800 transition-colors text-white font-semibold py-3 rounded-2xl mb-6"
        >
          Continue
        </button>

          </form>
        {/* OR Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-1 h-px bg-zinc-700"></div>
          <span className="px-4 text-sm text-zinc-500">OR</span>
          <div className="flex-1 h-px bg-zinc-700"></div>
        </div>

        {/* Other Sign-in Options */}
        <div className="space-y-4">
          <button className="flex items-center w-full bg-zinc-800 p-3 rounded-2xl hover:bg-zinc-700 transition-colors">
            <PiKeyBold className="text-2xl mr-3" />
            Sign in with Passkey
          </button>
          <button className="flex items-center w-full bg-zinc-800 p-3 rounded-2xl hover:bg-zinc-700 transition-colors">
            <FaGoogle className="text-2xl mr-3" />
            Sign in with Google
          </button>
          <button className="flex items-center w-full bg-zinc-800 p-3 rounded-2xl hover:bg-zinc-700 transition-colors">
            <FaApple className="text-2xl mr-3" />
            Sign in with Apple
          </button>
          <button className="flex items-center w-full bg-zinc-800 p-3 rounded-2xl hover:bg-zinc-700 transition-colors">
            <MdAccountBalanceWallet className="text-2xl mr-3" />
            Sign in with Wallet
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-zinc-600 text-center mt-6">
          Not your device? Use a private window. <br />
          See our <span className="underline cursor-pointer">Privacy Policy</span> for more info.
        </p>
      </div>
    </div>
  );
};

export default Login;
