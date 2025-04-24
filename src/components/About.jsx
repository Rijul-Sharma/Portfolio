import React from 'react'
import { useState, useEffect } from 'react'
import AnimatedContent from './AnimatedContent'
import HTMLFlipBook from 'react-pageflip';
import photo from '../assets/IMG-20221209-WA0062(1).jpg'

const useWindowSize = () => {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })

    useEffect(() => {
        const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight })
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return size
}

const About = () => {

    const { width } = useWindowSize()

    // Flipbook size based on screen width
    const getFlipBookSize = () => {
        const totalBookWidth = Math.min(width * 0.95, 900) // cap max size
        const perPageWidth = totalBookWidth / 2
        const pageHeight = perPageWidth * 1.45 // keep a bookish ratio
      
        return {
          w: Math.floor(perPageWidth),
          h: Math.floor(pageHeight),
        }
      }
    
    const { w, h } = getFlipBookSize()


    const pageStyles = 'bg-[#e0d5c1] text-[#5a3e2b] p-2 xs500:p-4 sm:p-5 md:p-6 rounded-lg border border-[#d3b8ae]'
    const headingStyles = 'text-lg xs430:text-xl xs500:text-2xl lg:text-5xl sm:text-3xl md:text-4xl font-bold text-center w-full mx-auto mb-2 xs500:mb-4 sm:mb-6 md:mb-10'
    const contentStyles = 'text-[9px] xs430:text-xs xs500:text-sm sm:text-base md:text-xl lg:text-2xl text-center'

    return (
        <div className=' text-white flex items-center mb-20 sm:mb-28 md:mb-32 lg:mb-40 flex-col' id='aboutme'>
            <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={true}
                config={{ tension: 45, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1}
                threshold={0.2}
            >
                {/* <div className='text-[clamp(2rem,5.5vw,4.5rem)] lg:text-7xl leading-tight font-bold mb-12'>About Me</div> */}
                <div className='text-[clamp(3rem,9vw,4.5rem)] lg:text-7xl leading-tight font-bold mb-12'>About Me</div>
            </AnimatedContent>


            <HTMLFlipBook
                // ref={bookRef}
                width={w}
                height={h}
                // onFlip={onFlip}
                startPage={0}
                maxShadowOpacity={0.5}
                showCover={true} // Enables single-side effect for first & last page
                className="shadow-2xl rounded-lg"
            >
                {/* Cover Page */}
                <div className='bg-[#e0d5c1] text-[#5a3e2b] p-6 rounded-lg flex flex-col justify-center items-center h-full border border-[#d3b8ae]'>
                    <div className='text-center text-[clamp(1.5rem,4vw,3.5rem)] lg:text-7xl font-semibold space-y-10 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        Here’s Who <br /> I Am...
                    </div>
                    <div className='absolute right-2 bottom-2 sm:right-5 sm:bottom-5 lg:right-10 lg:bottom-10 text-[clamp(1rem,3.5vw,1.25rem)] lg:text-xl'>Flip Me -&gt;</div>
                </div>

                <div className='bg-[#e0d5c1] text-[#5a3e2b] p-6 rounded-lg border border-[#d3b8ae]'>
                    <div className='flex justify-center items-center h-full'>
                        {/* <div className='bg-red-500 h-[50vh] w-[20vw]'></div> */}
                        <img src={photo} alt="" className='w-[75%] h-auto max-h-full object-contain rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl'/>
                    </div>
                </div>

                <div className={pageStyles}>
                    <div className={headingStyles}>
                        A little intro..
                    </div>
                    <div className={contentStyles}>
                        Hey, I’m Rijul Sharma, a third-year college student who loves building sleek web experiences, solving complex problems, and making technology work smarter. <br /> <br /><br />Whether it’s crafting scalable applications, or optimizing algorithms, I thrive on turning ideas into reality with clean, efficient code.
                    </div>
                </div>

                <div className={pageStyles}>
                    <div className={headingStyles}>
                        Where it all began
                    </div>
                    <div className={contentStyles}>
                        My first real intro to tech and computers came from my brother. I remember we'd spend hours playing games on it, day after day. <br /><br />
                        At some point, the games became less interesting than the machine itself. <br />
                        And so, i've always had a thing for tech. It just took a while for me to realize it could be more than just something fun.
                    </div>
                </div>

                <div className={pageStyles}>
                    <div className={headingStyles}>
                    </div>
                    <div className={contentStyles}>
                        Around the age of 16, I wrote my first few lines of code and yeah, they barely worked. <br /><br />
                        Eventually, I got into DSA through LeetCode and at the same time, started taking web development seriously. I guess that's when things shifted, from just exploring to actually building stuff.
                    </div>
                </div>

                <div className={pageStyles}>
                    <div className={headingStyles}>
                        Leveling up
                    </div>
                    <div className={contentStyles}>
                        Once I had the basics down, I dove into building. Small projects, hackathons, whatever I could get my hands on. <br /><br />
                        Internships gave me a real taste of the dev world. They taught me things I didn't learn from watching YouTube tutorials. <br />
                        I’ve just been building, learning as I go, and figuring things out. It’s all part of the process, and I’m still fully in.
                    </div>
                </div>

                <div className={pageStyles}>
                    <div className={headingStyles}>
                        Beyond coding
                    </div>
                    <div className={contentStyles}>
                        When I'm not at my desk, you’ll probably find me at the gym (nothing crazy, just staying active.) <br /><br />
                        Chess is another thing I'm into. It's about strategy and focus, and it keeps me sharp. <br /><br />
                        Also, music is a big part of my day. From rock to lo-fi to hip-hop, I've got a bit of everything on repeat. <br />
                        And hey, if you're ever looking for new playlists, hit me up. I've got some solid ones ;)
                    </div>
                </div>

                <div className={pageStyles}>
                    <div className={headingStyles}>
                        What's next?
                    </div>
                    <div className={contentStyles}>
                        Right now, I'm focusing on continuing to keep my DSA skills sharp, and building more impactful projects. <br /><br />
                        I'm actively looking for collaboration opportunities and internships where I can contribute and learn. <br /><br />
                        If you're working on something cool or have an opportunity in mind, don't hesitate to reach out. <br /> Let's make things happen!
                    </div>
                </div>

                <div className={pageStyles}>
                    <div className={headingStyles}>
                        Pretty much it..
                    </div>
                    <div className={`${contentStyles} flex justify-center items-center h-[70%]`}>
                        Still learning. Still building. Still figuring it out, one step at a time. <br /><br />
                        Thanks for flipping through, really means a lot :) <br /><br />
                    </div>
                </div>

                <div className='bg-[#e0d5c1] text-[#5a3e2b] p-6 rounded-lg border border-[#d3b8ae]'>
                    <div className='text-5xl font-bold text-center w-full mx-auto mb-10'>
                    </div>
                    <div className='text-2xl text-center'>
                    </div>
                </div>
            </HTMLFlipBook>

        </div>
    )
}

export default About