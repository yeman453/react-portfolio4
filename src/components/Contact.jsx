import React from 'react'

function Contact() {
  return (
    <div>
    <div className="bg-black text-white py-5">
          <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
            <div className="flex flex-col md:flex-row item-center   md:space-x-12">
              
              <div className="flex-1">
                <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Let's Talk</h3>
                <p>I'm open to discussing web development prjectgs or partnership opportunities.</p>
                <div className='mb-4 mt-8'>
                    {/* <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope> */}
                    <a href='yma@gmail.com' className='hover:underline'>yemarnaung423441@gmail.com</a>
                </div>
                <div className='mb-4 mt-8'>
                    {/* <Faphone className="inline-block text-green-400 mr-2"></Faphone> */}
                <span>+091-768-8596</span>
                </div>
                <div className='mb-4 mt-8'>
                    {/* <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt> */}
                <span>Bangkok,Thailand</span>
                </div>
              </div>
              <div className='flex-1 w-full'>
                    <div>
                        <label htmlFor='name' className='block mb-2' >Your Name</label>
                        <input type='text' className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter You Name'/>
                    </div>
                    <div>
                        <label htmlFor='email' className='block mb-2'>Email</label>
                        <input type='text' className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter You Email'/>
                    </div>
                    <div>
                        <label htmlFor='message' className='block mb-2'>Message</label>
                        <textarea type='text' className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400' rows='5' placeholder='Enter You Email'/>
                    </div>
                    <button className='bg-gradient-to-r from-green-400 to-blue-500 text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded'>Send</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact
