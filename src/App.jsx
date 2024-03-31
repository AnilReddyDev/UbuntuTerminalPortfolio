import React, { useState } from 'react'
import Header from './components/Header'
import Terminal from './components/Terminal'
import './index.css'
export default function App() {
  const [showTerminal, setShowTerminal] = useState(true);
  return (
    <div className='w-full h-screen bg-ubuntuWallpaper flex flex-col justify-center items-center'>
      <Header showTerminal={showTerminal} setShowTerminal={setShowTerminal}/>
      <Terminal showTerminal={showTerminal} setShowTerminal={setShowTerminal}/>
    </div>
  )
}
