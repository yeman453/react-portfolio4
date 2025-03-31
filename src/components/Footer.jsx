import React from 'react'


function Footer() {
  return (
    <footer className='bg-black text-white py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                <div className='flex-1 mb-4 md:mb-0'>
                <h3 className='text-2xl font-bold mb-2'>Yourself</h3>
                <p className='text-gray-400'>Frontend Developer based in the USA, specializing in web and softwaredevelp</p>
                </div>
                <div className='flex-1 w-full'>
                    <form className='flex items-center justify-center'>
                        <input type='email' placeholder='Enter Email'
                        className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 '/>
                        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-r-lg'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='border-t border-gray-600 pt-4 flex flex-col mad:flex-row justify-between items-center'>
                <p className='text-gray-400'>
                   &copy; {new Date().getFullYear()} 
                </p>
                <div className='flex space-x-4 my-4 md:my-0'>
                    <a href='#' className='text-gray-400 hover:text-white'>
                        {/* <FaFacebook /> */}
                        {/* <FontAwesomeIcon icon={faFacebook} /> */}
                    </a>
                    <a href='#' className='text-gray-400 hover:text-white'>
                        {/* <FaFacebook /> */}
                        {/* <FontAwesomeIcon icon={faTelegram} /> */}
                    </a>
                    <a href='#' className='text-gray-400 hover:text-white'>
                        {/* <FaFacebook /> */}
                        {/* <FontAwesomeIcon icon={faViber} /> */}
                    </a>
                </div>
                <div className='flex space-x-4'>
                    <a href='#' className='text-gray-400 hover:text-white'>
                        Privacy
                    </a>
                    <a href='#' className='text-gray-400 hover:text-white'>
                        Terms of Service
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
