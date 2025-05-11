import React, { useState, useEffect } from 'react';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavSocial from './NavSocial';
import NavContact from './NavContact';
import NavToggle from './NavToggle';
import './stylesheets/NavBar.css'; 


const NavBar = () => {
  const [navToggled, setNavToggled] = useState(false);
  const [navTransitionable, setNavTransitionable] = useState(false);

  useEffect(() => {
    const handleResize = (e) => {
      if (e.matches) {
        setNavTransitionable(false);
        setNavToggled(false);
      }
    };

    const mediaQuery = window.matchMedia("(max-width: 800px)");
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  const handleNavToggle = () => {
    setNavTransitionable(true);
    setNavToggled(!navToggled);
  };

  return (
    <nav 
      data-toggled={navToggled ? "true" : "false"} 
      data-transitionable={navTransitionable ? "true" : "false"}
    >
      <NavLogo />
      
      <div id="nav-mobile-section">
        <NavLinks />
        <NavSocial />
        <NavContact />
      </div>
      
      <NavToggle handleNavToggle={handleNavToggle} />
    </nav>
  );
};

export default NavBar;