import React from 'react';
import './App.css';
import logo from './blogo-removebg-preview.png';
import logo1 from './logo.png';


function Header() {
  return (
    <header className="header">
      <div className="header">
        <div className="homepage-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="JK" style={{ width: '100px', marginLeft: '10px', marginRight: '10px', height: '150px' }} />
            <div style={{ fontWeight: 'bold', fontSize: '36px', marginLeft: '500px' }}>Government of Jammu and Kashmir<br />Jammu Development Authoriy</div>
            <img src={logo1} alt="JK" style={{ width: '100px', marginLeft: '500px', marginRight: '10px', height: '150px' }} />

          </div>
        </div>
        <div className="navigation-menu">
          <nav>
            <ul className="nav" style={{ display: 'flex', justifyContent: 'flex-end', listStyle: 'none', height: '0px' }}>
              <li style={{ marginRight: '10px' }}><a href="#home" className="nav-link"><strong>HOME</strong></a></li>
              <li style={{ marginRight: '10px' }}><a href="#aboutus" className="nav-link"><strong>ABOUT US</strong></a></li>
              <li style={{ marginRight: '10px' }}><a href="#services" className="nav-link"><strong>SERVICES</strong></a></li>
              <li style={{ marginRight: '10px' }}><a href="#attraction" className="nav-link"><strong>ATTRACTION</strong></a></li>
              <li style={{ marginRight: '10px' }}><a href="#touristsites" className="nav-link"><strong>TOURIST SITES</strong></a></li>
              <li style={{ marginRight: '10px' }}><a href="#permission" className="nav-link"><strong>PERMISSION</strong></a></li>
              <li style={{ marginRight: '10px' }}><a href="#gallery" className="nav-link"><strong>GALLERY</strong></a></li>
              <li style={{ marginRight: '10px' }}><a href="#contactus" className="nav-link"><strong>CONTACT US</strong></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;