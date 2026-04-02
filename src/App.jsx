import React from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'


const App = () => {
  return (
    <div className=' bg-[#1e1e1e] font-sans text-[#a0a0a0] leading-relaxed h-full w-full p-10 '>

      <div className='main-container   grid grid-cols-[350px_1fr] max-w-300 gap-12 m-auto' >


        {/* {/* slid bar */}
        <Sidebar />

        {/* <!-- main-content --> */}
        <MainContent />

      </div>
    </div>
  )
}

export default App