import React, { useState } from 'react';
import './custom.css';
import myphoto from '../../assets/Yemi Ayeni Image.jpeg'


export default function About() {
return (
    <div className="about-me-container" style={{ minHeight: '100vh' }}>
    <h1 className="about-heading">About Me</h1>

    <div className="about-my-photo">
      <img src={myphoto} alt="my-photo" className="about-my-photo-img" />
    </div>
    <div className="about-me-par">
      <p>
        Full Stack Web Developer with a keen eye for design, simplicity and functionality. 
      </p>
      <p>
        <q>
          <em>
            <strong>
              If anyone thinks he knows something, he does not yet know it as
              he should know it.
            </strong>
          </em>
        </q>
      </p>
      <p> 
      </p>
      <p>   
      </p>
    </div>
  </div>

);

}