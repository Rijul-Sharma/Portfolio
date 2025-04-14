import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Skills from './skills'
import Contact from './Contact'
import Dock from './Dock'
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';


const items = [
  { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
  { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
  { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
  { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
];

const PF = () => {
  return (
    <div className='bg-[#121212]'>
      <Home/>
      <About/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Contact/>
      <div className='fixed bottom-2'>
        <Dock 
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
    </div>
  );
}

export default PF