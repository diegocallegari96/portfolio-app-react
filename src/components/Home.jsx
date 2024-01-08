import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#9049e4]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Diego Callegari</h1>
            <h2 className='text-4xl sm:text-7xl  font-bold text-[#8892b0]'>I'm a Front End Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Welcome to my digital space! As a fresh and enthusiastic front-end developer, I am on a thrilling journey of continuous learning and improvement. With a keen eye for design and a steadfast commitment to crafting seamless user experiences, my focus lies in developing responsive and dynamic web applications that not only look good but also perform excellently across all devices. 
            <br/><br/>Embarking on this tech adventure, I've embraced the challenges and joys of bringing creative ideas to life through code. Every project is a new opportunity to innovate, solve problems, and expand my skills, especially in the realms of HTML, CSS, JavaScript, and modern frameworks like React.
            <br/><br/>So, take a look around, explore my projects, and let's connect to create something amazing together!

</p>
            <div>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#9049e4] hover:border-[#9049e4]'>View Work <HiArrowNarrowRight className='ml-3'/></button>
            </div>

        </div>
    </div>
  )
}

export default Home