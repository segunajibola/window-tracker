import React from 'react'
import WindowTracker from './WindowTracker'


const Home = () => {
  return (
    <div>
        <h1 className='text-2xl text-center'>Window Tracker</h1>
        <p className='text-xl text-center'>Check width of any device</p>

        <button className='rounded-lg p-2.5 flex justify-center bg-gray-500 text-white'>Check width of this device</button>

        <WindowTracker />
    </div>
  )
}

export default Home