import React from 'react'
import SpotlightCard from './SpotlightCard'
import AnimatedContent from './AnimatedContent'
import Carousel from './Carousel'
import toxyLogo from '../assets/projectImages/Toxy/ToxyLogo.png'
import lyrica1 from '../assets/projectImages/Lyrica/Lyrica1.png'
import lyrica2 from '../assets/projectImages/Lyrica/Lyrica2.png'
import lyrica3 from '../assets/projectImages/Lyrica/Lyrica3.png'
import lyrica4 from '../assets/projectImages/Lyrica/Lyrica4.png'
import arrow from '../assets/arrow.svg'


const Projects = () => {
  return (
    <div className='text-white flex flex-col items-center mb-20 sm:mb-28 md:mb-32 lg:mb-40' id='projects'>
        <div>
            <AnimatedContent
                distance={200}
                direction="vertical"
                reverse={true}
                config={{ tension: 45, friction: 40 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1}
                threshold={0.2}
            >
                <div className='text-[clamp(3rem,9vw,4.5rem)] lg:text-7xl leading-tight font-bold mb-12'>Projects</div>
            </AnimatedContent>
            
        </div>
        <div className='flex flex-wrap flex-col lg:flex-row gap-10 justify-center p-4'>
            <SpotlightCard className='cursor-pointer w-[75vw] sm:w-[55vw] lg:w-[530px]'>
                <div 
                    className='flex flex-col items-center justify-between h-full gap-4 sm:gap-6 md:gap-8' 
                    onClick={() => {
                        window.open('https://toxy-indol.vercel.app', '_blank');
                    }}>
                    <div onClick={(e) => e.stopPropagation()} className='cursor-default'>
                        <Carousel height='' autoPlay={true} infinite={true} arrowBgColor='gray' className={"mx-auto"}>
                            <img src={toxyLogo} alt="Slide 1" className='w-full invert'/>
                            <img src={toxyLogo} alt="Slide 2" className='w-full'/>
                            {/* <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" /> */}
                        </Carousel> 
                    </div>
                    <div className='text-[clamp(1.5rem,4.5vw,2.25rem)] lg:text-4xl font-bold'>Toxy</div>
                    <div className='max-w-2xl text-[clamp(0.95rem,2.5vw,1.125rem)] lg:text-lg text-center'>
                        A real-time chat application utilizing WebSockets for room-based messaging. Designed with an emphasis on efficient message handling, responsive user experience, and a scalable architecture capable of supporting high user concurrency.
                    </div>
                    <div className='text-blue-500'>
                        <div className='flex'>
                            <div className='hover:text-blue-700' onClick={(e) => {
                                e.stopPropagation();
                                window.open('https://github.com/Rijul-Sharma/Chat-app', '_blank');
                            }}>View Repository</div>
                            {/* <div>&nbsp;&nbsp;&nbsp;</div> */}
                            <div className='w-[1px] bg-blue-500 mx-3'></div>
                            {/* <div>&nbsp;&nbsp;&nbsp;</div> */}
                            <div className='flex gap-2'>
                                <div className='hover:text-blue-700'>Visit Project</div>
                                <img className='invert' src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </SpotlightCard>

            <SpotlightCard className='cursor-pointer w-[75vw] sm:w-[55vw] lg:w-[530px]' spotlightColor="rgba(0,255,0,0.25)">
                <div 
                    className='flex flex-col items-center justify-between h-full gap-4 sm:gap-6 md:gap-8' 
                    onClick={() => {
                        window.open('https://rijul-sharma.github.io/Spotify-Clone', '_blank');
                    }}>
                    {/* <div className='h-80 w-80 bg-red-300'></div> */}
                    <div onClick={(e) => e.stopPropagation()} className='cursor-default'>
                        <Carousel height='' width='90%' autoPlay={true} infinite={true} arrowBgColor='gray' className={"mx-auto"}>
                            <img src={lyrica1} alt="Slide 1" className='w-full h-full'/>
                            <img src={lyrica4} alt="Slide 2" className='w-full h-full'/>
                            <img src={lyrica2} alt="Slide 3" className='w-full h-full'/>
                            <img src={lyrica3} alt="Slide 4" className='w-full h-full'/>
                        </Carousel>
                    </div>
                    <div className='text-[clamp(1.5rem,4.5vw,2.25rem)] lg:text-4xl font-bold text-center'>Lyrica (Spotify Clone)</div>
                    <div className='max-w-2xl text-[clamp(0.95rem,2.5vw,1.125rem)] lg:text-lg text-center'>
                        A web-based music player inspired by Spotify, featuring a curated collection of albums and tracks served via GitHub API. Offers album-based browsing, smooth playback and a lightweight architecture with no backend dependencies.
                        
                    </div>
                    <div 
                        className='text-blue-500'
                        >
                        <div className='flex'>
                            <div className='hover:text-blue-700' onClick={(e) => {
                                e.stopPropagation();
                                window.open('https://github.com/Rijul-Sharma/Spotify-Clone', '_blank');
                            }}>View Repository</div>
                            {/* <div>&nbsp;&nbsp;&nbsp;</div> */}
                            <div className='w-[1px] bg-blue-500 mx-3'></div>
                            {/* <div>&nbsp;&nbsp;&nbsp;</div> */}
                            <div className='flex gap-2'>
                                <div className='hover:text-blue-700'>Visit Project</div>
                                <img className='invert' src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </SpotlightCard>
            
        </div>
    </div>
  )
}

export default Projects
