import { Component } from "react";
// import styled from 'styled-components';
import Services from "./HomeSection/Services";
import ShowWithImag from "./HomeSection/ShowWithImag";
import vid from "../assets/vdo-HP_Hero-2024-x2-v1-6.webm";
import { motion } from "framer-motion";
import OnlineMarketing from "./HomeSection/Online-M";
import WhyChooseUs from "./HomeSection/WhyChooseUs";

const Counter = ({ from, to }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        initial={{ innerText: from }}
        animate={{ innerText: to }}
        transition={{
          duration: 2,
          ease: "easeOut",
          onUpdate: (latest) => {
            document.getElementById(`counter-${to}`).innerText = Math.floor(
              latest
            );
          },
        }}
      >
        <span id={`counter-${to}`}>{from}</span>
      </motion.span>
      K+
    </motion.span>
  );
};



export default class Home extends Component {




  
  render() {
    
    
    return (
      <>
        {/* Hero Section */}
        <section className="pt-20 bg-gray-100 min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20">
          {/* Left Content */}
          <div className=" lg:max-w-3/6 max-w-6/6 lg:text-left mb-10 lg:mb-0">
            <h1 className="text-3xl  sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              The Power of Digital Marketing
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Digital marketing has revolutionized the way businesses connect
              with their audiences.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>

          {/* Video Section */}
          <div className="flex justify-center">
            <video
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-lg"
              autoPlay
              loop
              muted
            >
              <source src={vid} type="video/mp4" />
            </video>
          </div>
        </section>



      
        <div className="flex justify-center items-center text-white bg-[#3636e2] py-2 px-4">
      <div className="flex flex-col md:flex-row md:gap-20 gap-y-10 justify-between items-center w-full max-w-5xl">
        {/* Counter 1 */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">
            <Counter from={0} to={10} />
          </h2>
          <p className="text-white text-center">Successful Project</p>
        </div>

        {/* Divider */}
        <div className="hidden md:flex items-center">
          <div className="h-16 w-[2px] bg-gray-500 relative">
            <motion.div
              className="absolute left-1/2 top-0 w-2 h-2 bg-[#3ccfd1] rounded-full"
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Counter 2 */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">
            <Counter from={0} to={20} />
          </h2>
          <p className="text-white text-center">Experienced Team</p>
        </div>

        {/* Divider */}
        <div className="hidden md:flex items-center">
          <div className="h-16 w-[2px] bg-gray-500 relative">
            <motion.div
              className="absolute left-1/2 top-0 w-2 h-2 bg-[#3cd1cf] rounded-full"
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Counter 3 */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">
            <Counter from={0} to={43} />
          </h2>
          <p className="text-white text-center">Happy Customers</p>
        </div>

        {/* Divider */}
        <div className="hidden md:flex items-center">
          <div className="h-16 w-[2px] bg-gray-500 relative">
            <motion.div
              className="absolute left-1/2 top-0 w-2 h-2 bg-[#3cd1d1] rounded-full"
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Counter 4 */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">
            <Counter from={0} to={36} />
          </h2>
          <p className="text-white text-center">Client 5 Star Review</p>
        </div>
      </div>
    </div>
      {/* Services Section */}
      <Services/>
        <ShowWithImag/>
        <OnlineMarketing/>
        <WhyChooseUs/>

        
      </>
    );
  }
}
