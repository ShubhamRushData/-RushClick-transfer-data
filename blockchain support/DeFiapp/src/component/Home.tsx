import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
// import { Button } from "@/components/ui/Button";
// import { Input } from "@/components/ui/Input";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSignIn = () => {
    if (email.trim() !== "" && password.trim() !== "") {
      navigate("/tostep");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-semibold text-center">Sign in to Blockchain</h2>
        <p className="text-center text-blue-500 cursor-pointer mt-1">Switch to agent sign-in</p>

        <div className="mt-6">
          <button className="flex items-center justify-center w-full py-2 border rounded-lg shadow-sm bg-white text-gray-700 mb-2">
            <FaFacebook className="mr-2 text-blue-600" /> Sign in with Facebook
          </button>
          <button className="flex items-center justify-center w-full py-2 border rounded-lg shadow-sm bg-white text-gray-700">
            <FcGoogle className="mr-2" /> Sign in with Google
          </button>
        </div>

        <div className="mt-6 border-t pt-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="mt-1 outline-none py-2 w-full"
          />

          <label className="block text-sm font-medium mt-4">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 outline-none  py-2 w-full"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
        </div>

        <button className="w-full mt-6 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleSignIn}>
          Sign in
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          New to Blockchain? <span className="text-blue-500 cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;