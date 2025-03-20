import { useEffect, useState } from 'react'
import './App.css'
import Welcome from './components/welcome'
import PF from './components/PF'

function App() {
  const [showHome, setShowHome] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

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
        <div className="">
          <Welcome />
        </div>
      )}
      
      <div 
        className={`fixed inset-x-0 bottom-0 transition-transform duration-1000 ease-out ${
          showHome ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <PF />
      </div>
    </>
  )
}

export default App
