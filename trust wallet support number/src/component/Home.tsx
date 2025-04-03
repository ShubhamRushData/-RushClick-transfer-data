import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailPlaceholder] = useState("Enter email, mobile, or username");
  const navigate = useNavigate();

  const handleLogin = () => {
    let isValid = true;

    // Email, mobile, or username validation
    if (!email) {
      setEmailError("Please enter email, mobile, or username");
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobileRegex = /^[0-9]{10}$/;
      const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;

      if (
        !emailRegex.test(email) && // Not a valid email
        !mobileRegex.test(email) && // Not a valid 10-digit mobile number
        !usernameRegex.test(email) // Not a valid username
      ) {
        setEmailError("Please enter a valid email, mobile, or username");
        isValid = false;
      } else {
        setEmailError("");
      }
    }

    // Navigate only if valid
    if (isValid) {
      navigate("/tostep");
    }
  };

  return (
    <div className="flex flex-col p-6 sm:p-12">
      <header className="flex justify-center mb-8"></header>
      <div className="flex justify-center">
        <div className="w-full max-w-md bg-white px-10 rounded-lg shadow-lg pt-10">
          <div className="flex items-center justify-center pb-10">
            <img
              alt="Navigation"
              className="w-32"
              src="/Trust-Wallet.png"
            />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="mb-4">
              <label htmlFor="email" className="block text-bold text-2xl pb-7">
                Sign In
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={emailPlaceholder}
                className={`w-full p-3 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {emailError && <p className="text-xs text-red-500">{emailError}</p>}
            </div>

            <div className="flex justify-center mb-6 items-center flex-col">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 mb-6 font-bold rounded-full hover:bg-blue-700"
              >
                Next
              </button>
              <button
                type="submit"
                onClick={() => navigate("/tostep")}
                className="w-full text-blue-600 font-bold border-2 border-blue-600 py-3 rounded-full hover:bg-blue-700 hover:text-white"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
