import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsSticky(currentScrollPos > navBarRef.current.offsetTop);
      
      // Check if scrolling direction is up and set sticky to false
      setIsSticky((prevSticky) => {
        if (currentScrollPos < lastScrollPos) {
          return false;
        }
        return prevSticky;
      });

      // Update last known scroll position
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);

  const navBarRef = React.createRef();

  return (
    <div
      className={`nav-bar ${isSticky ? 'sticky' : ''}`}
      ref={navBarRef}>
      <ul>
        <li><Link smooth to="#about">About</Link></li>
        <li><Link smooth to="#experiences">Experiences</Link></li>
        <li><Link smooth to="#projects">Projects</Link></li>
        <li><Link smooth to="#contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;
