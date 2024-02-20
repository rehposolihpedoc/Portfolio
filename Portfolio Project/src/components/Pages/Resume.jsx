import React from 'react';
import YemisResume from '../../assets/DocResume';
import Home from './home';


function Resume() {
    return (
        <div>
            <h1>Yemi's Resume</h1>
            <p>Below is my resume with my past employment experience.  Please take a look and if you have any questions feel free to reach out on the Contacts tab.</p>
            <a href={YemisResume} Download='Yemi Ayeni PM Resume .docx'>Download Yemi's Resume</a>
            <br></br>
            <h2>Yemi's Proficiencies</h2>
            <ul>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>REACT</li>
                <li>REST APIs</li>
                <li>HTML</li>
    
            </ul>
        </div>
    );
}

export default Resume;