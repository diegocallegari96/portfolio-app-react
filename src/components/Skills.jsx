import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactIMG from '../assets/react.png'
import Node from '../assets/node.png'
import GitHub from '../assets/github.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#9049e4] text-gray-300 py-4'>Experience</p>
                <p>These are the technologies i worked with</p>
            </div>

            <div>
                <div>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p>HTML</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills