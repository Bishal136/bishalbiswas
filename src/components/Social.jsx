import React from 'react'
import fb from '../assets/facebook-brands-solid-full.svg'
import yt from '../assets/youtube-brands-solid-full.svg'

const Social = () => {
    return (
        <div className='social mt-7 border-t-2 border-[#3a3a3a] pt-5 items-center flex'>
            <a href='https://www.facebook.com/bishalbiswas136'>
                <img
                    src={fb}
                    className=' h-10 w-10 ml-1 [filter:grayscale(1)_invert(0.7)] transition-[filter] duration-300 ease-in-out'
                />
            </a>
            <a href='https://www.youtube.com/channel/UCjGOJAKmF3-rOziBd6tSztA'>
                <img src={yt}
                    className=' h-10 w-10 ml-1 [filter:grayscale(1)_invert(0.7)] transition-[filter] duration-300 ease-in-out'

                />
            </a>
        </div>
    )
}

export default Social