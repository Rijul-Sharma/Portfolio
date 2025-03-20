import React from 'react'
import TextGenerateEffect from './textGenerateEffect'
import RotatingText from './rotatingText'

const Home = () => {
  return (
    <div className='flex gap-20 items-center h-screen pl-10'>
        <div>
            <div>
                <TextGenerateEffect 
                    words="Hey There!" 
                    startDelay={5000} // Adjust this delay as needed (in milliseconds)
                    duration={0.5}
                    className="text-7xl"
                />
            </div>
            <div>
                <TextGenerateEffect 
                    words="This is Rijul Sharma," 
                    startDelay={6000} // Starts after the first effect completes
                    duration={0.5}
                    className="text-9xl"
                />
            </div>
            <div className='text-white flex items-center text-5xl mt-4'>
                <span className='mr-5'>who's a</span> 
                <RotatingText
                    texts={['Web Developer', 'Software Engineer', 'Programming Enthusiast']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg font-bold"
                    staggerFrom={"first"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                />
            </div>
        </div>
        
        {/* <div className='h-[30vh] w-[30vh] bg-red-500'></div> */}
    </div>
  )
}

export default Home