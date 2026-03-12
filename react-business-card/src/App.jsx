import { useState } from 'react'
import './App.css'
import ProfilePic from './components/ProfilePic'
import About from './components/About'

function App() {
  return (
    <>
      <div className="app">
        <ProfilePic />
        <About />
      </div>
    </>
  )
}

export default App
