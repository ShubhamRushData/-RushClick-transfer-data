import React, { useState, useEffect } from "react";
// import { FaAngleRight, FaBars } from 'react-icons/fa';
import FaqAccordion from "./FaqAccordion";
// import CorporatePestControl from "./CorporatePestControl";
import StatsHighlights from "./StatsHighlight";
import AutoScrollingServices from "./AutoScrollingServices";
import Navbar from "../component/Nav";
import PestControlCards from "./PestControl";
import Contact from "./Contact";

const bgImages = [
  "/cat-2.jpg",
  "/Cockroach.jpg",
  "/dog-2.jpg",
  "/Foxes.jpg",
  "/ants.webp",
  "/Bee-Services.jpg",
  "/Fleas.jpg",
  "/Gopher-Mole.jpg",
  "/Rats.webp",
  "/Squirrels.jpg",
];

const Home: React.FC = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 4000); // change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="font-sans text-gray-800">
      {/* Hero Section */}
      <header
        className="bg-cover bg-center h-screen text-white relative transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${bgImages[currentBg]})`,
        }}
      >
        {/* <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between">
          <div className="bg-[#44a639] flex items-center px-6  w-full md:w-2/3">
            <img
              src="/logo.png"
              alt="UK Pest Logo"
              className="  w-28 object-contain mr-2"
            />
            <div
              style={{ fontFamily: '"Poetsen One", cursive' }}
              className="text-white  text-3xl pl-20 font-bold leading-tight"
            >
              Pest Control
            </div>
          </div>

          <div className="bg-white flex-1 flex justify-end items-center gap-6 px-4 py-6 border-4 border-t-[green] md:w-2/3">
            <ul className="hidden md:flex gap-6 font-semibold text-black  md:text-base">
              <li className="relative group cursor-pointer">
                <span className="group-hover:text-[green] transition-colors duration-300 md:text-xl text-lg">
                  Home
                </span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li className="relative group cursor-pointer">
                <span className="group-hover:text-[green]  md:text-xl text-lg transition-colors duration-300">
                  Services
                </span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group cursor-pointer">
                <span className="group-hover:text-[green] transition-colors duration-300  md:text-xl text-lg">
                  Contact
                </span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
            <div className="text-[#379f2d] font-bold text-lg md:text-xl">
              09193258577
            </div>
          </div>
        </nav> */}
        <Navbar/>

        <div className="h-full flex flex-col justify-center items-start px-10 bg-opacity-40 pt-32 md:pl-32">
          <h1 className="text-3xl text-[#f4fef4] md:text-4xl md:w-4/6 font-bold">
            Bugged Out Control – Say Goodbye to Creepy Crawlers for Good
            <p className="text-lg text-[#f0e5e5] md:text-xl mt-2">
              Casualty Pest Control offers fast, safe, and effective pest
              removal services to keep your home and business pest-free. Trust
              us to handle bugs, rodents, and more—so you can live comfortably
              and worry-free.
            </p>
            <p className="text-lg">Pest Control Services</p>
          <a href="#contact">
              <button className="mt-4 bg-[green] text-white px-10 py-3 rounded-lg text-xl font-medium">
              Schedule
            </button>
            </a>
          </h1>
        </div>
      </header>

      {/* <section className="bg-white py-8 px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "Ants", img: "/ants.webp" },
            { name: "Bed Bugs", img: "Bed-Bug.jpg" },
            { name: "Cockroach", img: "Cockroach.jpg" },
            { name: "Fleas", img: "Fleas.jpg" },
            { name: "Flies", img: "Flies.jpg" },
            { name: "Foxes", img: "Foxes.jpg" },
            { name: "Mice", img: "mou-3.jpg" },
            { name: "Moths", img: "Moths.jpg" },
            { name: "Pigeons", img: "Pigeons.jpg" },
            { name: "Rats", img: "Rats.webp" },
            { name: "Squirrels", img: "Squirrels.jpg" },
            { name: "Wasps", img: "Wasps.jpg" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center w-20 ">
              <div key={idx} className=" h-15">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-full object-contain rounded-lg hover:scale-130 transition-transform duration-600 "
                />
              </div>
              <p className="text-sm font-semibold mt-1 text-gray-700">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section> */}

        <AutoScrollingServices/>
      {/* <Pest Controlls/> */}
      <PestControlCards/>

      {/* Our Story Section */}
      <section className="bg-gray-100 py-12 px-4 flex flex-col md:flex-row items-center">
        <img
          src="/our-story.png"
          alt="Our Story"
          className="w-full md:w-1/2 rounded-md"
        />
        <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg lg:w-4/6 text-gray-600 mb-4">
            At Capital Pest Control (India), we began with a simple goal: to
            provide reliable, safe, and effective pest control solutions to
            protect homes, businesses, and environments across India. Founded by
            a team of experts with years of experience in pest management, we’ve
            grown into one of the most trusted names in the industry. Our
            journey began with a commitment to delivering high-quality,
            eco-friendly pest control services tailored to each customer’s
            unique needs. Over the years, we have expanded our services,
            constantly innovating and improving to stay ahead of emerging pest
            challenges. Today, we pride ourselves on our reputation for
            professionalism, trust, and reliability in every service we provide.
          </p>
          <button className="bg-[green] text-white px-6 py-2 rounded">
            Learn More
          </button>
        </div>
      </section>

      <StatsHighlights />
      <FaqAccordion />

      {/* Contact Section */}
      {/* <section
        className="bg-cover bg-center py-12 px-4 text-white"
        style={{ backgroundImage: "url(/contact-bg.jpg)" }}
      >
        <div className="bg-[#8dd18d] bg-opacity-60 p-8 rounded-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 ">Contact Us</h2>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded text-black outline-none border-2 
            border-[gray]"
            />
            <input
              type="text"
              placeholder="Phone"
              className="p-2 rounded text-black  outline-none border-2 
            border-[gray]"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded text-black  outline-none border-2 
            border-[gray]"
            />
            <input
              type="text"
              placeholder="Address"
              className="p-2 rounded text-black  outline-none border-2 
            border-[gray]"
            />
            <textarea
              placeholder="Message"
              className="p-2  outline-none border-2 
            border-[gray] rounded text-black"
              rows={4}
            ></textarea>
            <div className="flex items-center gap-2 ">
              <input type="checkbox" className="w-10" /> I'm not a robot
            </div>
            <button
              type="submit"
              className="bg-[#458430] text-white px-4 py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </section> */}
      <Contact />

      {/* Footer */}
      <footer className="bg-[#1f1d23] text-white py-10 text-center px-4">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            24/7 Emergency Services
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-orange-500">
            Tel: 0739 8057 383
          </p>

          <div className="flex justify-center items-center flex-col space-y-2">
            {/* Google Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-[40px] font-bold text-[#4285F4]">G</span>
              <span className="text-[40px] font-bold text-[#EA4335]">o</span>
              <span className="text-[40px] font-bold text-[#FBBC05]">o</span>
              <span className="text-[40px] font-bold text-[#4285F4]">g</span>
              <span className="text-[40px] font-bold text-[#34A853]">l</span>
              <span className="text-[40px] font-bold text-[#EA4335]">e</span>
            </div>

            {/* Reviews */}
            <div className="text-lg flex items-center justify-center gap-1 text-white font-medium">
              Reviews
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="ml-1">5</span>
            </div>
          </div>

          <p className="text-sm text-gray-400 pt-6">
            © 2025 PEST KILLERS UK. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
