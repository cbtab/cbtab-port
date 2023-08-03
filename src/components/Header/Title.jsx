import './Title.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Title = ()=>{
    return (
        <div className="title-container">
            <div className="card-title">
                <p><span>I'm</span> Chalermchat</p>
                <div className="title">
                    <h1>{`< Full stack web developer >`}</h1>
                </div>
                <ul>
                    <li className="icon"><FontAwesomeIcon icon={faFacebook} /></li>
                    <li className="icon"><FontAwesomeIcon icon={faLinkedin} /></li>
                    <li className="icon"><FontAwesomeIcon icon={faGithub} /></li>
                </ul>
            </div>
        </div>
    )
}

export default Title;