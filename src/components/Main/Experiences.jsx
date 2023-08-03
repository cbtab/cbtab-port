import React from 'react';
import './Experiences.css';

const Experiences = () => {
    return (
        <div className="experiences-container" id="experiences">
            <h1>{"<"} Frameworks {">"}</h1>
            <div className="cards-container">
                <div className="cards">
                    <div id="mongoDB"></div>
                    <p>MongoDb</p>
                </div>
                <div className="cards">
                    <div id="expressJS"></div>
                    <p>Express.js</p>
                </div>
                <div className="cards">
                    <div id="reactJS"></div>
                    <p>React.js</p>
                </div>
                <div className="cards">
                    <div id="nodeJS"></div>
                    <p>Node.js</p>
                </div>
            </div>
        </div>
    )
}

export default Experiences;
