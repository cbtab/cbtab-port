import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = ()=>{
    const iconColor = 'white';
    return (
        <div className="footer"> 
            <Link smooth to="#header"><p id="arrow"><FontAwesomeIcon icon={faAnglesUp}  style={{ color: iconColor }}/></p></Link>
            <ul>
                <li className="icon"><FontAwesomeIcon icon={faFacebook} style={{ color: iconColor }}/></li>
                <li className="icon"><FontAwesomeIcon icon={faLinkedin} style={{ color: iconColor }} /></li>
                <li className="icon"><FontAwesomeIcon icon={faGithub} style={{ color: iconColor }}/></li>
            </ul>
            <p id="footer-text">Copyright 2023 - Chalermchat Aiemsook</p>
        </div>
    )
}

export default Footer