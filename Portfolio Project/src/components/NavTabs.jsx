import { Link, useLocation } from 'react-router-dom';

import React from 'react';
import './Pages/custom.css'
import About from './Pages/about';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div>
    <nav>
        <ul className = "nav nav-tabs">
            <li>
                <h1>Yemi Ayeni</h1>
            </li>
            <li className="nav-item">
            <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
               Home
        </Link>
            </li>
            <li className="nav-item">
            <Link
          to="/About"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
               About
        </Link>
            </li>
            <li className="nav-item">
            <Link
          to="/Resume"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
               Resume
        </Link>
            </li>
            <li className="nav-item">
            <Link
          to="/Contact"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
               Contact
        </Link>
            </li>
        </ul>

    </nav>
</div>
  );
}

export default NavTabs;


/*  <a
                    href='#about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >About Me
                </a> */