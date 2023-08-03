import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons';

const Contact = ()=>{
    return(
        <div className="contact-container" id="contact">
            <div className="title-contact">
                <h1>{"<"} Contact {">"}</h1>
                <p><FontAwesomeIcon icon={faWrench} /> In maintainance</p>
            </div>
        </div>
    )
}

export default Contact;