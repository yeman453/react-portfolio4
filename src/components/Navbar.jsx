import React, { useContext, useEffect, useState } from 'react'
// import { ThemeContext } from '../context/ThemeContext'
// import ToggleButton from './ToggleButton';

function Navbar() {
  // const themeValue= useContext(ThemeContext);
  // console.log("themeValue",themeValue);
  // cosnt [isLightTheme,light,dark]= themeValue;
  // const theme =isLightTheme ? light : dark ;
  // console.log(theme)

  const [darkMode,setDarkMode]= useState(false);
   const toggleDarkMode = ()=> setDarkMode(!darkMode)


   useEffect(()=>{
    if (darkMode){
      document.body.classList.add('dark');
    }else {
      document.body.classList.remove('dark')
    }
   },[darkMode])
  return (
    <nav className={`bg-${darkMode ? 'gray-800' : 'black'} text-${darkMode ? 'white' : 'white'} px-8 md:px-8 lg:px-24`}>
      <div className='container py-2 flex justify-center md:justify-between items-center lg:flex-row md:flex-row sm:flex-col'>
        <div className='text-2xl font-bold hidden md:inline '>Ye Marn</div>
        <div className='space-x-2'>
            <a href='#hero' className='hover:text-blue-400'>Home</a>
            <a href='#about' className='hover:text-blue-400'>About Me</a>
            <a href='#services' className='hover:text-blue-400'>Services</a>
            <a href='#projects' className='hover:text-blue-400'>Projects</a>
            <a href='#contact' className='hover:text-blue-400'>Contact</a>
        </div>
        {/* <ToggleButton /> */}
        <div  >
        {/* <button className='mx-2 ' onClick={toggleDarkMode}>
{
  darkMode ? "Light Mode" : "Dark Mode"
}
        </button> */}
        <button 
            className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-600 text-white' : 'bg-gradient-to-r from-green-400 to-blue-500 text-black'} `}
            onClick={toggleDarkMode}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded'>Connect Me</button>
        </div>
       

      </div>
    </nav>
  )
}

export default Navbar
