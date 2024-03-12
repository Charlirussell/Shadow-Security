import { useState, useEffect } from 'react';

import './Navbar.scss'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  };

  const closeMenu = () => {
    if (window.innerWidth > 768) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', closeMenu);
    return () => {
      window.removeEventListener('resize', closeMenu);
    };
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setShowMenu(false);
    }
  };

  return (
    <nav>
      <div className={`dropdown ${showMenu ? 'show-menu' : ''}`} onClick={toggleMenu}>
        <div className="dropdown-icon">&#x2630;</div>
        <ul className="dropdown-menu">
          <li onCLick={handleLinkClick}>Home</li>
          <li onCLick={handleLinkClick}>Downloads</li>
          <li onCLick={handleLinkClick}>About</li>
          <li onCLick={handleLinkClick}>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
