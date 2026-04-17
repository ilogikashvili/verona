import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button'; // import the reusable Button component
import Image from '../ui/Images';
import './Navbar.css'; // navbar-specific styling

const Navbar = () => {
  const navigate = useNavigate(); // react-router hook to navigate programmatically
  const [activeDropdown, setActiveDropdown] = useState(null); // tracks which dropdown is open
  const [isVisible, setIsVisible] = useState(true); // tracks navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // tracks last scroll position
  const closeDropdownTimeout = useRef(null);

  const handleRedirect = (page) => {
    navigate(page); // changes the browser URL and renders the new route
  };

  const clearCloseTimeout = () => {
    if (closeDropdownTimeout.current) {
      window.clearTimeout(closeDropdownTimeout.current);
      closeDropdownTimeout.current = null;
    }
  };

  const openDropdown = (name) => {
    clearCloseTimeout();
    setActiveDropdown(name);
  };

  const closeDropdown = () => {
    clearCloseTimeout();
    closeDropdownTimeout.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };


  const handleRegularClick = (action) => {
    console.log(`Performing ${action}`); // placeholder for non-navigation button actions
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`navbar ${!isVisible ? 'navbar-hidden' : ''} ${activeDropdown ? 'navbar-expanded' : ''}`}>
      {/* Left side: logo and first three buttons */}
      <div className="navbar-left">
        <div className="navbar-logo" onClick={() => handleRedirect('/')} role="button" tabIndex={0}>
          <Image src="/path/to/logo.png" alt="Logo" />
        </div>
        
        <nav className="navbar-menu-left">
          <div
            className="navbar-dropdown-wrapper"
            onMouseEnter={() => openDropdown('products')}
            onMouseLeave={closeDropdown}
          >
            <Button onClick={() => handleRedirect('/products')}>ProductsPage</Button>
            {activeDropdown === 'products' && (
              <div
                className="navbar-dropdown"
                onMouseEnter={clearCloseTimeout}
                onMouseLeave={closeDropdown}
              >
                <div className="dropdown-content">
                  <button onClick={() => handleRedirect('/products')}>All Products</button>
                  <button onClick={() => handleRedirect('/products')}>New Arrivals</button>
                  <button onClick={() => handleRedirect('/products')}>Featured Collections</button>
                </div>
              </div>
            )}
          </div>

          <div
            className="navbar-dropdown-wrapper"
            onMouseEnter={() => openDropdown('collections')}
            onMouseLeave={closeDropdown}
          >
            <Button onClick={() => handleRedirect('/products')}>Collections</Button>
            {activeDropdown === 'collections' && (
              <div
                className="navbar-dropdown"
                onMouseEnter={clearCloseTimeout}
                onMouseLeave={closeDropdown}
              >
                <div className="dropdown-content">
                  <button onClick={() => handleRedirect('/products')}>Collection A</button>
                  <button onClick={() => handleRedirect('/products')}>Collection B</button>
                  <button onClick={() => handleRedirect('/products')}>Collection C</button>
                </div>
              </div>
            )}
          </div>

          <Button onClick={() => handleRegularClick('action1')}>Button 1</Button>
        </nav>
      </div>

      {/* Center logo between the two button groups */}
      <div className="navbar-logo-center">
        <Image src="/logo192.png" alt="Secondary Logo" />
      </div>

      {/* Right side: remaining buttons and dropdown */}
      <div className="navbar-right">
        <nav className="navbar-menu">
          <Button onClick={() => handleRegularClick('action2')}>Button 2</Button>
          <Button onClick={() => handleRegularClick('action3')}>Button 3</Button>
          <Button onClick={() => handleRegularClick('action4')}>Button 4</Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; // Export so App.js can import and render it
