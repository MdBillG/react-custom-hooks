import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './useToggle/toggle'
import Fetch from './3-useFetch/Fetch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toggle />
      <Fetch />
    </>
  )
}

export default App
