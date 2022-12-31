import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='p-10'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
