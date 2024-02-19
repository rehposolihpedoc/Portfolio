import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import './Pages/custom.css'
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
                <a
                    href='#about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >About Me
                </a>
            </li>
            <li className="nav-item">
                <a
                    href='#portfolio'
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >Portfolio</a>
            </li>
            <li className="nav-item">
                <a
                    href='#resume'
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >Resume</a>
            </li>
            <li className="nav-item">
                <a
                    href='#contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contact</a>
            </li>
        </ul>

    </nav>
</div>
  );
}

export default NavTabs;