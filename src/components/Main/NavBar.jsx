import './NavBar.css';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {

  return (
    <div className="nav-bar">
      <ul>
        <li className="link"><Link smooth to="#about">About</Link></li>
        <li className="link"><Link smooth to="#experiences">Experiences</Link></li>
        <li className="link"><Link smooth to="#projects">Projects</Link></li>
        <li className="link"><Link smooth to="#contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;
