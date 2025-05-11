import React from 'react';

const NavToggle = ({ handleNavToggle }) => {
  return (
    <button id="nav-toggle-button" type="button" onClick={handleNavToggle}>
      <span>Menu</span>
      <i className="fa-solid fa-bars"></i>
    </button>
  );
};

export default NavToggle;