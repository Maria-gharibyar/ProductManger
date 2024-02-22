import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './compontes/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Product Mangements</h1>
      <Products></Products>
    </>
  )
}

export default App
