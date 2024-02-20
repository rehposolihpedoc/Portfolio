import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './App.css'
import Header from './components/Pages/Header';
import Footer from './components/Pages/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
  </>
  );
}

export default App;
