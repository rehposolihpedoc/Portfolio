import { useState } from 'react'
import Home from './components/Pages/home'
import Nav from './components/NavTabs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Home />
 
  </>
  );
}

export default App;
