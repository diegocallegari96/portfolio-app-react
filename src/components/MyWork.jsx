import React from 'react'

const MyWork = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#9049e4]'>Work</p>
                <p className='py-4'>Check out some of my recent work</p>
            </div>

            <div>
                <div>
                    <div>
                        <span>

                        </span>
                        <div>
                            <a href="/">
                                <button>Demo</button>
                            </a>
                            <a href="/">
                                <button>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyWork