import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Sidebar from './Sidebar'
import Timeline from './Timeline'
import Features from './Features'
function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  return (
    <main className=' min-h-screen grid  grid-cols-[100px_1fr] lg:grid-cols-[100px_1fr_350px] xl:mx-[10%]'>
      <Sidebar toggleDark={darkMode}/>
     <Timeline toggleDark={darkMode}/>
     <Features toggleDark={darkMode}/>
    </main>
  )
}

export default App
