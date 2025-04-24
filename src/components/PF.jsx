import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Skills from './skills'
import Contact from './Contact'

const PF = () => {
  return (
    <div className='bg-[#121212] relative'>
      <Home/>
      <About/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default PF