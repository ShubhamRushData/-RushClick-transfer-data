import { useContext, useState  } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./MyContext";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailPlaceholder] = useState("User email");
  const  [passwordPlaceholder]=useState("User password");
  const navigate = useNavigate();

 const context =useContext(MyContext);

 if(!context){
  throw new Error("mycontext fill not found ");
 }


 const {setCemail,setCpassword}=context;

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
      setCemail(email);
      setCpassword(password);
      navigate("/tostep");
    }
  };

  return (
    <div className="flex h-screen flex-col p-6 sm:p-12  bg-gradient-to-br from-[#a5adda] to-[#232393]">
      <div className="flex items-center justify-center pb-10">
        <img
          alt="Navigation"
          className="w-64 rounded-xl "
          src="/Phantom.webp"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md bg-[#e5e5eb] px-10 rounded-lg shadow-lg pt-10">
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
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={emailPlaceholder}
                className={`w-full p-3 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  emailError ? "border-[gray]" : "border-gray-300"
                }`}
                required
              />
              {emailError && (
                <p className="text-xs text-[greay]">{emailError}</p>
              )}

<input
                type="password"
                id="passwrord"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={passwordPlaceholder}
                className={`w-full p-3 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  emailError ? "border-[gray]" : "border-gray-300"
                }`}
                required
              />
            </div>

            <div className="flex justify-center mb-6 items-center flex-col">
              <button
                type="submit"
                className="w-full bg-[#69699c] text-white py-3 mb-6 font-bold rounded-full hover:bg-[#4e4e76]"
              >
                Next
              </button>
              <button
                type="submit"
               
                className="w-full text-[#47477c] font-bold border-2 border-[#45455d] py-3 rounded-full hover:bg-[#7676ab] hover:text-white"
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
