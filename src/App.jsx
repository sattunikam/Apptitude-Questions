import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Footer from './Components/Footer'
import { useRef } from "react";

function App() {
const lastcall = useRef(0)
const delay = 2000

  const googleMap = ()=>{
    const current = Date.now()
    const diff = current-lastcall.current
    if(diff >= delay){
        lastcall.current = current
        console.log('Load Google Map')
    }

  }
  
  return (
    <>
      <section id="center">
       <h1>Throttle</h1>
       <button onClick={googleMap}>Track Google Map</button>
      </section>
    </>
  )
}

export default App
