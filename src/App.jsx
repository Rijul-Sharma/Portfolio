import { useEffect, useState } from 'react'
import './App.css'
import Welcome from './components/welcome'
import PF from './components/PF'
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';
import { FloatingDock } from './components/FloatingDock'
import home from './assets/dockIcons/home.svg'
import about from './assets/dockIcons/about.svg'
import projects from './assets/dockIcons/projects.svg'
import experience from './assets/dockIcons/experience.svg'
import skills from './assets/dockIcons/skills.svg'
import contact from './assets/dockIcons/contact.svg'
import linkedin from './assets/dockIcons/linkedin.svg'
import github from './assets/dockIcons/github.svg'
import resume from './assets/dockIcons/resume.svg'

function App() {
  const [showHome, setShowHome] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // const items = [
  //   { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
  //   { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
  //   { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
  //   { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  // ];

  const dockItems = [
    {
      title: "Home",
      icon: <img src={home} alt="" className='invert'/>,
      onClick: () => {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "About Me",
      icon: <img src={about} alt="" className='invert'/>,
      onClick: () => {
        document.getElementById("aboutme")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      title: "Projects",
      icon: <img src={projects} alt="" className='invert'/>,
      onClick: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      title: "Experience",
      icon: <img src={experience} alt="" className='invert'/>,
      onClick: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      title: "Skills",
      icon: <img src={skills} alt="" className='invert'/>,
      onClick: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      title: "Contact Me",
      icon: <img src={contact} alt="" className='invert'/>,
      onClick: () => {
        document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      title: "LinkedIn",
      icon: <img src={linkedin} alt="" className='invert'/>,
      href: "https://www.linkedin.com/in/rijulsharma117",
    },
    {
      title: "Github",
      icon: <img src={github} alt="" className='invert'/>,
      href: "https://github.com/Rijul-Sharma",
    },
    {
      title: "Resume",
      icon: <img src={resume} alt="" className='invert'/>,
      href: "https://drive.google.com/file/d/1mw6eJLL81wGvaebDi938Tvio42hogpbI/view?usp=sharing",
    },
  ]
  
  useEffect(()=>{
    setTimeout(() => {
      setShowHome(true);
      setTimeout(() => {
        setShowWelcome(false);
      }, 1000);
      // setShowWelcome(false);
    }, 4000);
  }, [])

  return (
    <>
      {showWelcome && (
        <div className="fixed inset-0">
          <Welcome />
        </div>
      )}
      
      <div 
        className={`transition-transform duration-1000 ease-out ${
          showHome ? 'translate-y-0' : 'translate-y-[100vh]'
        }`}
      >
        <PF />
      </div>

      {!showWelcome && (
        <FloatingDock
          items={dockItems}
          desktopClassName="fixed bottom-8 left-1/2 -translate-x-1/2"
          mobileClassName="fixed bottom-6 right-6"
          desktopIconClassName="text-neutral-100 bg-neutral-800 hover:bg-neutral-600"
          desktopLabelClassName="text-xs text-white"
          mobileIconClassName="text-neutral-100 bg-neutral-800 hover:bg-neutral-600 min-w-10"
          mobileLabelClassName="text-sm font-medium text-neutral-200 text-center"
          mobileToggleButtonClassName="bg-neutral-800 text-white hover:bg-neutral-700 rounded-full p-2 shadow-md"
        />
      )}
    </>
  )
}

export default App
