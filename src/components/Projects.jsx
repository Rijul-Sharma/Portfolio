import React from 'react'
import ScrollText from './ScrollText'
import SpotlightCard from './SpotlightCard'
import AnimatedContent from './AnimatedContent'

const Projects = () => {
  return (
    <div className='min-h-screen text-white flex flex-col items-center'>
        <div>
            {/* <ScrollText className='text-7xl font-bold mb-20'>
                Projects
            </ScrollText> */}
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
                <div className='text-7xl font-bold mb-20'>🚀 Projects 🚀</div>
            </AnimatedContent>
            
        </div>
        <div className='flex flex-wrap gap-10 justify-center'>
            <SpotlightCard spotlightColor="rgba(0,255,0,0.25)" className='p-0'>
                <div className='w-[30vw] flex flex-col items-center justify-center gap-8'>
                    <div className='h-80 w-full bg-gray-300'>

                    </div>
                    <div className='text-2xl'>Lorem, ipsum.</div>
                    <div className='max-w-2xl text-xl px-8'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit recusandae repudiandae magni, voluptas tempore molestias voluptates soluta laudantium harum? Praesentium quasi assumenda expedita odio inventore aut non quidem doloribus.
                        
                    </div>
                </div>
            </SpotlightCard>

            <SpotlightCard>
                <div className='p-2 w-[30vw] flex flex-col items-center justify-center gap-10'>
                    <div className='h-80 w-80 bg-red-300'>

                    </div>
                    <div className='max-w-2xl text-xl'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit recusandae repudiandae magni, voluptas tempore molestias voluptates soluta laudantium harum? Praesentium quasi assumenda expedita odio inventore aut non quidem doloribus.
                        
                    </div>
                </div>
            </SpotlightCard>
            <SpotlightCard>
                <div className='p-2 w-[30vw] flex flex-col items-center justify-center gap-10'>
                    <div className='h-80 w-80 bg-red-300'>

                    </div>
                    <div className='max-w-2xl text-xl'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit recusandae repudiandae magni, voluptas tempore molestias voluptates soluta laudantium harum? Praesentium quasi assumenda expedita odio inventore aut non quidem doloribus.
                        
                    </div>
                </div>
            </SpotlightCard>
            
        </div>
    </div>
  )
}

export default Projects
