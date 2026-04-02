import React from 'react'
import Pro from '../assets/profile.jpg'
import Social from './Social'

const Sidebar = () => {
  return (
     <div className='sidebar  h-[90vh] bg-[#2a2a2a] border border-[#3a3a3a] rounded-2xl p-10 sticky top-10 '>

            {/* Profile */}
            <div className='profile items-center flex  flex-col' >
                <img
                    src={Pro}
                    className=' h-30 w-30 rounded-full border border-[ #3a3a3a] '
                />
                <h2 className=' text-2xl font-bold mt-5 text-white'>Rabbi Hasan Bishal</h2>
                <p className=' bg-[#1e1e1e] py-1 px-4 text-[#FFBF00] border text-[0.8rem] rounded-lg inline-block mt-2.5 ' >Web Developer</p>

            </div>

            {/* Contact */}
            <div className='main-content  mt-7 border-t-2 border-[#3a3a3a] pt-5  '>

                <div className='email mb-4 ' >
                    <h3 className='label font-bold text-[0.8rem] text-[#a0a0a0] ' >Email</h3>
                    <a href='bishalbiswas2027@gmail.com' className=' text-[#e0e0e0]  no-underline  ' >bishalbiswas2027@gmail.com</a>
                </div>

                <div className='phone mb-4'>
                    <h3 className='label font-bold text-[0.8rem] text-[#a0a0a0]'>Phone</h3>
                    <a href='01815391792' className=' text-[#e0e0e0] no-underline '>+880 1815391792</a>
                </div>

                {/* Location */}
                <div className='location'>
                    <h3 className='label font-bold text-[0.8rem] text-[#a0a0a0] '>Location</h3>
                    <p className=' text-[#e0e0e0] no-underline '>Dhaka,Bangladesh</p>
                </div>

            </div>

            {/* social */}
           <Social/>

        </div>
  )
}

export default Sidebar