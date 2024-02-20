
import React, { useState } from 'react';
import './custom.css';
import myphoto from '../../assets/Yemi Ayeni Image.jpeg';
import Error from './Error'
import Contact from './Contact';
import About from './about';
import Resume from './Resume';

function Home() {
    return (
      <div className="hero">
        {useState}
        <div className="logo-box">
          <img src={myphoto} alt="my-photo" className="logo" />
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            Hello, this is
            <span className="heading-primary-main"> Yemi Ayeni </span>
            <a
              className="heading-primary-sub"
            
            >     Web Developer 
            </a>
           
          </h1>
        </div>
      </div>
    );
  }
  
  export default Home;