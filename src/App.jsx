import React from 'react'
import Header from './components/Header'
import Terminal from './components/Terminal'

export default function App() {
  return (
    <div className='w-full h-screen bg-ubuntuWallpaper flex flex-col justify-center items-center'>
      <Header/>
      <Terminal/>
    </div>
  )
}
