import React from "react";
import HeroImage from "../assets/student.jpg";
function Hero() {
  return (
    <div  className="bg-black text-white  text-center py-16">
      <img src={HeroImage} alt="img" className="mx-auto mb-8 w-48 h-48 rounded-full hover:scale-102"/>
      <h1 className="text-4xl font-bold">
        I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">YE MARN AUNG</span>
        ,Frontend Developer
      </h1>
      <p className="mt-4 text-lg text-gray-200 mx-2 ">I specialize in building modern and responsive web application.</p>
      <div className="mt-10  space-x-4" >
      
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded">Contact With Me</button>
        <button className="bg-gradient-to-r from-pink-400 to-red-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded">Resume</button>
      </div>
    </div>
  );
}

export default Hero;
