import React from 'react'

const Navigation = () => {
    return (
        <div id='navigation' className=' border-b-2 border-[#3a3a3a] pb-5 '>
            <nav className=' flex justify-end gap-5 '>
                <a href="#about" class="active hover:text-[#FFBF00]">About</a>
                <a href="#skills" className='hover:text-[#FFBF00]' >Skills</a>
                <a href="#education" className='hover:text-[#FFBF00]'>Education</a>
                <a href="#portfolio" className='hover:text-[#FFBF00]'>Portfolio</a>
            </nav>
        </div>
    )
}

export default Navigation