import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-green-900 flex justify-self-center justify-center w-100 border-2 border-green-400 rounded-md my-4 p-2">
    <h1 className='text-center text-white font-mono font-extrabold'>Hello World</h1>
    </div>

    <div className="flex justify-center space-x-5 mx-5">
      <div className="h-16 w-16 rounded-full bg-amber-400"></div>
      <div className="h-16 w-16 rounded-full bg-amber-600"></div>
      <div className="h-16 w-16 rounded-full bg-amber-800"></div>
    </div>
    </>
  )
}

export default App
