import React, { useEffect } from 'react'
import { Timeline, TimelineItem } from './Timeline'
import ScrollText from './ScrollText'
import AnimatedContent from './AnimatedContent'
import AutoScrollingList from './List'

const Experience = () => {
  // Force a scroll event when the component mounts
  useEffect(() => {
    // Dispatch scroll event after a small delay to ensure everything is rendered
    setTimeout(() => {
      window.dispatchEvent(new Event('scroll'));
    }, 300);
  }, []);

  return (
    <div className="min-h-screen text-white p-4 flex flex-col items-center">
          <div className="h-64"></div> {/* Spacer to demonstrate scroll effect */}
          
          <div>
            {/* <ScrollText className="text-7xl font-bold mb-20 text-[#8B5CF6]">
                Experience
            </ScrollText> */}
            <AnimatedContent
                distance={200}
                direction="horizontal"
                reverse={false}
                config={{ tension: 45, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1}
                threshold={0.2}
            >
                <div className='text-7xl font-bold mb-20 text-[#8B5CF6]'>Experience</div>
            </AnimatedContent>
          </div>
          
          <Timeline 
            primaryColor="#8B5CF6"
            secondaryColor="#1F2937"
            lineColor="#4B5563"
            checkpointSize={24}
            lineWidth={4}
            spacing={150}
            containerClassName="max-w-4xl mx-auto"
            containerStyle={{ background: 'transparent' }}
          >
            {/* <TimelineItem
              leftContent={
                <div>
                  <h3 className="text-xl font-bold text-white">Senior Developer</h3>
                  <p className="text-sm text-gray-400">2021 - Present</p>
                </div>
              }
              rightContent={
                <div className="text-gray-300">
                  <p>Led development of cloud-based solutions for enterprise clients, managing a team of 5 developers.</p>
                  <div className="mt-2 flex space-x-2">
                    <span className="px-2 py-1 bg-purple-900 rounded-md text-xs">React</span>
                    <span className="px-2 py-1 bg-purple-900 rounded-md text-xs">AWS</span>
                  </div>
                </div>
              }
            />
            
            <TimelineItem
              leftContent={
                <div className="text-gray-300">
                  <p>Built and maintained multiple web applications. Improved site performance by 40% through code optimizations.</p>
                  <div className="mt-2 flex space-x-2">
                    <span className="px-2 py-1 bg-purple-900 rounded-md text-xs">Node.js</span>
                    <span className="px-2 py-1 bg-purple-900 rounded-md text-xs">GraphQL</span>
                  </div>
                </div>
              }
              rightContent={
                <div>
                  <h3 className="text-xl font-bold text-white">Full Stack Developer</h3>
                  <p className="text-sm text-gray-400">2018 - 2021</p>
                </div>
              }
            />
            
            <TimelineItem
              leftContent={
                <div>
                  <h3 className="text-xl font-bold text-white">Junior Developer</h3>
                  <p className="text-sm text-gray-400">2016 - 2018</p>
                </div>
              }
              rightContent={
                <div className="text-gray-300">
                  <p>Developed responsive user interfaces and implemented RESTful APIs for startup clients.</p>
                  <div className="mt-2 flex space-x-2">
                    <span className="px-2 py-1 bg-purple-900 rounded-md text-xs">JavaScript</span>
                    <span className="px-2 py-1 bg-purple-900 rounded-md text-xs">CSS</span>
                  </div>
                </div>
              }
            />
            
            <TimelineItem
              leftContent={
                <div className="text-gray-300">
                  <p>Assisted in front-end development tasks and learned modern web development practices.</p>
                  <div className="mt-2">
                    <img src="/api/placeholder/100/100" alt="Company logo" className="rounded-md" />
                  </div>
                </div>
              }
              rightContent={
                <div>
                  <h3 className="text-xl font-bold text-white">Intern</h3>
                  <p className="text-sm text-gray-400">2015 - 2016</p>
                </div>
              }
            /> */}

          <TimelineItem
              leftContent={
                <div>
                  <h3 className="text-xl font-bold text-white">Cybersecurity Intern</h3>
                  <p className="text-sm text-gray-400">RAH InfoTech</p>
                  <p className="text-sm text-gray-400">Sept 2024 – Nov 2024</p>
                </div>
              }
              rightContent={
                <div className="text-gray-300">
                  <p>Conducted security testing using SAST & DAST tools to identify vulnerabilities and improve application security.</p>
                  <div className="mt-2 flex space-x-2">
                    <span className="px-2 py-1 bg-purple-900 rounded-md text-xs">React</span>
                    <span className="px-2 py-1 bg-purple-900 rounded-md text-xs">AWS</span>
                  </div>
                </div>
              }
            />

            <TimelineItem
              leftContent={
                <div className="text-gray-300">
                  <p>Developed scalable web applications and optimized backend systems to enhance performance and user experience.</p>
                  <div className="mt-2">
                    {/* <img src="/api/placeholder/100/100" alt="Company logo" className="rounded-md" /> */}
                  </div>
                </div>
              }
              rightContent={
                <div>
                  <h3 className="text-xl font-bold text-white">Sofware Developer Intern</h3>
                  <p className="text-sm text-gray-400">HyperCode</p>
                  <p className="text-sm text-gray-400">Nov 2024 – Jan 2025</p>
                </div>
              }
            />

          </Timeline>
          
          <div className="h-[1000px]"></div> {/* Spacer to demonstrate scroll effect */}
            
          <section>
            <h2>Frontend Skills</h2>
            <AutoScrollingList 
              speed={1} 
              backgroundColor="#000000"
              borderRadius="8px"
            >
              <div className="skill-box">
                <i className="icon-react"></i>
                {/* <span>React</span> */}
                <div className='h-10 w-10 flex justify-center items-center p-7 border-red-500 border-2 rounded-md'>
                    <div className='bg-slate-700'>React</div>
                </div>
              </div>
              <div className="skill-box">
                <i className="icon-js"></i>
                <span>JavaScript</span>
              </div>
              <div className="skill-box">
                <i className="icon-ts"></i>
                <span>TypeScript</span>
              </div>
              {/* Add more skills */}
            </AutoScrollingList>
            
            <h2>Backend Skills</h2>
            <AutoScrollingList 
              speed={0.8} 
              reverse={true}
              backgroundColor="#000000"
            >
              <div className="skill-box">
                <i className="icon-react"></i>
                <span>React</span>
              </div>
              <div className="skill-box">
                <i className="icon-js"></i>
                <span>JavaScript</span>
              </div>
              <div className="skill-box">
                <i className="icon-ts"></i>
                <span>TypeScript</span>
              </div>
              {/* Backend skills */}
            </AutoScrollingList>
          </section>

          <div className="h-[1000px]"></div> {/* Spacer to demonstrate scroll effect */}


        </div>
  )
}

export default Experience