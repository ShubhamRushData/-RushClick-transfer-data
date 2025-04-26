// import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between">
      {/* Left Logo Section */}
      <div className="bg-[#44a639] flex items-center px-6 w-full md:w-2/3">
        <img
          src="/logo.png"
          alt="UK Pest Logo"
          className="w-28 object-contain mr-2"
        />
        <div
          style={{ fontFamily: '"Poetsen One", cursive' }}
          className="text-white text-3xl lg:pl-20 hidden md:block font-bold leading-tight"
        >
          Pest Control
        </div>
      </div>

      {/* Right Menu Section */}
      <div className="bg-white flex-1 flex justify-end items-center gap-6 px-4 py-6 border-4 border-t-[green] md:w-2/3">
        <ul className="hidden md:flex gap-6 font-semibold text-black md:text-base">
          <li className="relative group cursor-pointer">
           <a href="#home">
             <span className="group-hover:text-[green] transition-colors duration-300 md:text-xl text-lg">
              Home
            </span>
            </a>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </li>

          {/* Services with Dropdown */}
          <li className="relative group cursor-pointer">
           <a href="#service">
             <span className="group-hover:text-[green] md:text-xl text-lg transition-colors duration-300">
              Services
            </span>
            </a>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>

            <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <li>
                <a href="#bedbug" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                Termite Control
                </a>
              </li>
              <li>
                <a href="#termite" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                  Rats & Rodent 
                </a>
              </li>
              <li>
                <a href="#mice" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                  Mosquitoes & file 
                </a>
              </li>
            </ul>
          </li>

          <li className="relative group cursor-pointer">
            <a href="#contact">
                <span className="group-hover:text-[green] transition-colors duration-300 md:text-xl text-lg">
              Contact
            </span>
                </a>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        <div className="text-[#379f2d] font-bold text-lg md:text-xl">
          09193258577
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
