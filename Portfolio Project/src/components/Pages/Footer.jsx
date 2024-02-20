import React from 'react';
import './custom.css';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
                <a href="https://github.com/rehposolihpedoc" target="_blank"><img src="https://icons8.com/icon/LoL4bFzqmAa0/github" alt="Github" className="icon"/></a>
                <a href="https://www.linkedin.com/in/yemi-ayeni-23423314/" target="_blank"><img src="https://icons8.com/icon/447/linkedin" alt="LinkedIn" className="icon"/></a>
            </div>
            <p className='footer-info'>
                &copy; Yemi Ayeni |  <a href="https://docs.google.com/document/d/1q2nNH87KJ6BFqU4RRFOL_3fyWZzMWIkzAkaH66BaEaQ/edit?usp=sharing" className="link">Download Resume</a>  |  Made With <img id="react-icon" src="https://icons8.com/icon/wPohyHO_qO1a/react" alt="React"/>
            </p>

        </div>
    )
}

export default Footer;