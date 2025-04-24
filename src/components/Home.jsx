import React from 'react'
import TextGenerateEffect from './textGenerateEffect'
import RotatingText from './rotatingText'
import bg from '../assets/bg_1.png'

const Home = () => {
  return (
    <div className='flex gap-20 items-center h-screen relative overflow-y-hidden' id='home'>
        <img src={bg} alt="" className='absolute w-full h-full object-cover bottom-10'/>
        <div class="absolute left-0 w-full h-36 bg-gradient-to-b from-transparent to-[#121212] z-20 bottom-10"></div>
        <div className='ml-10'>
            <div>
                <TextGenerateEffect 
                    words="Hey there!" 
                    startDelay={5000}
                    duration={0.5}
                    className="text-[clamp(2rem,5.5vw,4.5rem)] lg:text-7xl leading-tight text-white"
                />
            </div>
            <div>
                <TextGenerateEffect 
                    words="This is Rijul Sharma," 
                    startDelay={6000}
                    duration={0.5}
                    className="text-[clamp(3rem,7vw,8rem)] lg:text-9xl leading-tight text-white"
                />
            </div>
            <div className='text-white flex flex-col sm:flex-row items-start sm:items-center text-[clamp(1.75rem,5vw,3rem)] lg:text-5xl gap-2 mt-4'>
                <span className='mr-5 z-10'>who's a</span> 
                <RotatingText
                    texts={['Web Developer', 'Software Engineer', 'Programming Enthusiast']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg font-bold mr-6"
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

    </div>
  )
}

export default Home