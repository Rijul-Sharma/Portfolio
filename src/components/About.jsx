import React from 'react'
import ScrollText from './ScrollText'
import AnimatedContent from './AnimatedContent'

const About = () => {
    return (
        <div className='h-screen text-white flex justify-evenly items-center mb-20'>
            {/* <div className='flex justify-evenly items-center'> */}
                <div className='max-w-3xl'>
                    {/* <ScrollText className="text-7xl font-bold mb-10">
                        About Me
                    </ScrollText> */}
                    
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
                        <div className='text-7xl font-bold mb-10'>About Me</div>
                    </AnimatedContent>
                    
                    <div className='text-xl'>
                    Hey, I’m Rijul Sharma, a developer who loves building sleek web experiences, solving complex problems, and making technology work smarter. Whether it’s crafting scalable applications, or optimizing algorithms, I thrive on turning ideas into reality with clean, efficient code.
                    <br />
                    <br />

                    When I’m not deep in a project, you’ll probably find me tackling LeetCode challenges, experimenting with new tech stacks, or refining my latest creation. Always learning, always building.

                    <br />
                    <br />
                    Let’s create something awesome together! 🚀
                        
                    </div>
                </div>
                
                <div className='bg-red-500 h-[50vh] w-[20vw]'>

                </div>
            {/* </div> */}

        </div>
    )
}

export default About
