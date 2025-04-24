import React, { useEffect } from 'react'
import { Timeline, TimelineItem } from './Timeline'
import AnimatedContent from './AnimatedContent'

const Experience = () => {
  // Force a scroll event when the component mounts
  useEffect(() => {
    // Dispatch scroll event after a small delay to ensure everything is rendered
    setTimeout(() => {
      window.dispatchEvent(new Event('scroll'));
    }, 300);
  }, []);

  return (
    <div className="text-white p-4 flex flex-col items-center mb-20 sm:mb-28 md:mb-32 lg:mb-40" id='experience'>
          
          <div>
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
                <div className='text-center text-[clamp(3rem,9vw,4.5rem)] lg:text-7xl leading-tight font-bold mb-12'>Education and Experience</div>
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
                  <h3 className="text-lg md:text-xl font-bold text-white">Senior Secondary Education</h3>
                  {/* <p className="text-sm text-gray-400">Ryan International School</p> */}
                  <p className="text-sm md:text-base text-gray-400">2020-2022</p>
              </div>
            }
            rightContent={
              <div className="text-gray-300">
                <div className="text-lg md:text-xl text-gray-400">Ryan International School</div>
                <div className='text-sm md:text-base'>Percentage : 94%</div>
              </div>
            }
          />

          <TimelineItem
            leftContent={
              <div className="text-gray-300">
                <div className="text-lg md:text-xl text-gray-400">Maharaja Agrasen Institute of Technology</div>
                <div className='text-sm md:text-base'>CGPA : 8.6</div>
              </div>
            }
            rightContent={
              <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">B.Tech (CSE)</h3>
                  {/* <p className="text-sm text-gray-400">Ryan International School</p> */}
                  <p className="text-sm md:text-base text-gray-400">2022-2026</p>
              </div>
            }
          />

          <TimelineItem
              leftContent={
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Cybersecurity Intern</h3>
                  <p className="text-sm md:text-base text-gray-400">RAH InfoTech</p>
                  <p className="text-sm md:text-base text-gray-400">Sept 2024 – Nov 2024</p>
                </div>
              }
              rightContent={
                <div className="text-gray-300">
                  <p className='text-sm md:text-base'>Conducted security testing using SAST & DAST tools to identify vulnerabilities and improve application security.</p>
                  <div className="mt-2 flex space-x-2">
                    {/* <span className="px-2 py-1 bg-purple-900 rounded-md text-xs">React</span>
                    <span className="px-2 py-1 bg-purple-900 rounded-md text-xs">AWS</span> */}
                  </div>
                </div>
              }
            />

            <TimelineItem
              leftContent={
                <div className="text-gray-300">
                  <p className='text-sm md:text-base'>Developed scalable web applications and optimized backend systems to enhance performance and user experience.</p>
                  <div className="mt-2">
                    {/* <img src="/api/placeholder/100/100" alt="Company logo" className="rounded-md" /> */}
                  </div>
                </div>
              }
              rightContent={
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Sofware Developer Intern</h3>
                  <p className="text-sm md:text-base text-gray-400">HyperCode</p>
                  <p className="text-sm md:text-base text-gray-400">Nov 2024 – Jan 2025</p>
                </div>
              }
            />

          </Timeline>

        </div>
  )
}

export default Experience