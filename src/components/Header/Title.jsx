import "./Title.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Title = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/chalermchat-aiemsook/", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/cbtab", "_blank");
  };
  return (
    <div className="title-container">
      <div className="card-title">
        <div className="name-container">
          <p className="text">
            `{"${"} Chalermchat {"}"}`
          </p>
        </div>
        <div className="title">
          <h1>{`< Developer >`}</h1>
        </div>
        <ul>
          <li className="icon" onClick={handleLinkedInClick}>
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
          <li className="icon" onClick={handleGithubClick}>
            <FontAwesomeIcon icon={faGithub} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Title;
