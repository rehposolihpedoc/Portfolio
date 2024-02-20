import React, { useState } from 'react';
import Navigation from '../../components/NavTabs';
import './custom.css';

function Header(props) {
  return (
    <div className="header">
      <h1 className="header"> YA </h1>
      <Navigation />
    </div>
  );
}

export default Header;