declare global {
    interface Window {
      Tawk_API?: {
        maximize: () => void;
      };
    }
  }
  
  const Expert = () => {
    const openChat = () => {
      if (window.Tawk_API && window.Tawk_API.maximize) {
        window.Tawk_API.maximize(); // Open the Tawk.to chat widget
      } else {
        // alert("Please wait...");
      }
    };
  
    return (
      <div className="bg-black min-h-screen flex flex-col justify-center items-center p-4 sm:p-6">
        <div className="flex justify-center py-4">
            <img alt="Navigation" className="w-32" src="/home.webp" />
          </div>
        <div className="w-full max-w-lg sm:max-w-xl bg-[#3b3a3a] rounded-lg shadow-md ">
          {/* Header Image */}
          
  
          {/* Alert Message */}
          <div className="text-center px-4 sm:px-8 py-6">
            <h1 className="text-[#e0621a] text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Important Message
            </h1>
            <p className="text-[white] text-sm sm:text-base md:text-lg leading-relaxed mb-6">
              Due to unauthorized activity and identification failure on your
              Account, access has been suspended. Please get in touch with our
              Support Staff immediately.
            </p>
            {/* <p className="font-bold text-gray-800 text-sm sm:text-base md:text-lg">
              Error CODE: EBRX16X76D
            </p> */}
            {/* <p className="font-bold text-[#ca6411] text-sm sm:text-base md:text-lg">
              Contact for help: +1 845 574 9565
            </p> */}
          </div>
  
          {/* Action Button */}
          <div className="flex justify-center pb-6">
            <button
              className="px-6 py-3 bg-[#b35407] text-white text-xl sm:text-base rounded-lg font-medium hover:text-[black] hover:bg-[#a97d63] transition"
              onClick={openChat}
            >
              Chat With Expert
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Expert;
  