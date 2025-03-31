import React from "react";
import AboutImage from "../assets/me.jpg";
function About() {
  return (
    <div className="bg-black text-white py-5">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row item-center   md:space-x-12">
          <img
            src={AboutImage}
            alt="img"
            className="w-72 h-80  mx-auto  px-4 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <div>
              <p className="text-lg mb-8 px-1">
                I am a passionate frontend developer with a focus on building
                modern and responsive web applications. With a strong foundation
                in frontend technologies , I strive to create seamless and
                efficient user experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    HTML & CSS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5 mx-5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    Java Script
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5 mx-5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-2/12"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    Bootstrap
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5 mx-5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    React Js
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5 mx-5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-4/12"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    Tailwind
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5 mx-5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-2/12"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  1+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  5+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
