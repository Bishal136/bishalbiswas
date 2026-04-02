import React from 'react'
import html from '../assets/html5.svg'
import css from '../assets/css.svg'
import javaScript from '../assets/javascript.svg'
import react from '../assets/react.svg'
import typeScript from '../assets/typescript.svg'
import node from '../assets/nodedotjs.svg'
import express from '../assets/express.svg'
import mongo from '../assets/mongodb.svg'
import git from '../assets/git.svg'

export const Skills = () => {
    return (
        <div id='skills' className=''>

            <h2 className='heading text-[#e0e0e0] text-[2rem] mb-4'>Skills</h2>
            <div className='line w-15 h-1 bg-[#FFBF00]'></div>

            <div className='grid-container grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-7'>
                <div className=" place-items-center p-5 rounded-lg border-2 border-[#3a3a3a] bg-[#1e1e1e] text-center mt-5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)]">
                    <img
                        className=' h-12 w-12 mb-4 invert-75 sepia-50 saturate-1000 hue-rotate-350 brightness-110 contrast-101'
                        src={html} />
                    <h3 className='text-[1rem] font-medium'>HTML5</h3>
                </div>
                <div className=" place-items-center p-5 rounded-lg border-2 border-[#3a3a3a] bg-[#1e1e1e] text-center mt-5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)]">
                    <img
                        className=' h-12 w-12 mb-4 invert-75 sepia-50 saturate-1000 hue-rotate-350 brightness-110 contrast-101'
                        src={css} />
                    <h3 className='text-[1rem] font-medium'>CSS3</h3>
                </div>
                <div className=" place-items-center p-5 rounded-lg border-2 border-[#3a3a3a] bg-[#1e1e1e] text-center mt-5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)]">
                    <img
                        className=' h-12 w-12 mb-4 invert-75 sepia-50 saturate-1000 hue-rotate-350 brightness-110 contrast-101'
                        src={javaScript} />
                    <h3 className='text-[1rem] font-medium'>Javascript</h3>
                </div>
                <div className=" place-items-center p-5 rounded-lg border-2 border-[#3a3a3a] bg-[#1e1e1e] text-center mt-5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)]">
                    <img
                        className=' h-12 w-12 mb-4 invert-75 sepia-50 saturate-1000 hue-rotate-350 brightness-110 contrast-101'
                        src={react} />
                    <h3 className='text-[1rem] font-medium'>React</h3>
                </div>

                <div className=" place-items-center p-5 rounded-lg border-2 border-[#3a3a3a] bg-[#1e1e1e] text-center mt-5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)]">
                    <img
                        className=' h-12 w-12 mb-4 invert-75 sepia-50 saturate-1000 hue-rotate-350 brightness-110 contrast-101'
                        src={typeScript} />
                    <h3 className='text-[1rem] font-medium'>Typescript</h3>
                </div>

                <div className=" place-items-center p-5 rounded-lg border-2 border-[#3a3a3a] bg-[#1e1e1e] text-center mt-5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)]">
                    <img
                        className=' h-12 w-12 mb-4 invert-75 sepia-50 saturate-1000 hue-rotate-350 brightness-110 contrast-101'
                        src={node} alt="" />
                    <h3 className='text-[1rem] font-medium'>Node Js</h3>
                </div>

                <div className=" place-items-center p-5 rounded-lg border-2 border-[#3a3a3a] bg-[#1e1e1e] text-center mt-5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)]">
                    <img
                        className=' h-12 w-12 mb-4 invert-75 sepia-50 saturate-1000 hue-rotate-350 brightness-110 contrast-101'
                        src={express} alt="" />
                    <h3 className='text-[1rem] font-medium'>Express</h3>
                </div>
                <div className=" place-items-center p-5 rounded-lg border-2 border-[#3a3a3a] bg-[#1e1e1e] text-center mt-5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)]">
                    <img
                        className=' h-12 w-12 mb-4 invert-75 sepia-50 saturate-1000 hue-rotate-350 brightness-110 contrast-101'
                        src={mongo} alt="" />
                    <h3 className='text-[1rem] font-medium'>Mongodb</h3>
                </div>

                <div className=" place-items-center p-5 rounded-lg border-2 border-[#3a3a3a] bg-[#1e1e1e] text-center mt-5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)]">
                    <img
                        className=' h-12 w-12 mb-4 invert-75 sepia-50 saturate-1000 hue-rotate-350 brightness-110 contrast-101'
                        src={git} alt="" />
                    <h3 className='text-[1rem] font-medium'>Git & Github</h3>
                </div>
            </div>

        </div>
    )
}
