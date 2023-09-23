import "./Projects.css";
import { useRef, useState } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const projectContainerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(1);

  /// next
  const scrollToSection = (sectionIndex) => {
    const targetSection = projectContainerRef.current.querySelector(
      `section:nth-of-type(${sectionIndex})`
    );

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(sectionIndex);
    }
  };

  const scrollNextSection = () => {
    const nextSection = currentSection + 1;
    scrollToSection(nextSection);
  };

  ///previous
  const scrollToPreSection = (sectionIndex) => {
    const targetSection = projectContainerRef.current.querySelector(
      `section:nth-of-type(${sectionIndex})`
    );

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(sectionIndex);
    }
  };

  const scrollPreviousSection = () => {
    const prevSection = currentSection - 1;
    scrollToPreSection(prevSection);
  };

  const handleGithubClick = (number) => {
    if (number === 1) {
      window.open(
        "https://github.com/PasinPeat/neatly-website-client",
        "_blank"
      );
    } else if (number === 2) {
      window.open("https://github.com/cbtab/home-service-p1", "_blank");
    }
  };

  return (
    <>
      <div className="projects-container" id="projects">
        <div className="project-container" ref={projectContainerRef}>
          <div id="next-slide" onClick={scrollNextSection}>
            <SlArrowRight />
          </div>
          <div id="previous-slide" onClick={scrollPreviousSection}>
            <SlArrowLeft />
          </div>
          <section>
            <div className="slide-1">
              <div className="slide-picture">
                <div className="img">
                  <img
                    draggable="false"
                    src="https://trsrwbwyzpqqwdtduzmn.supabase.co/storage/v1/object/sign/dev-images/neatly-2.PNG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtaW1hZ2VzL25lYXRseS0yLlBORyIsImlhdCI6MTY5NTQ3NzQxMSwiZXhwIjoyMDEwODM3NDExfQ.5Zy4bbaNbyLVLbq1WrxBGXZzJd8AYY-_aui4oWhqoUw&t=2023-09-23T13%3A56%3A52.577Z"
                  ></img>
                </div>
              </div>
              <div className="slide-detail">
                <h1>Neatly</h1>
                <h3>Hotel Booking Web Application</h3>
                <p id="short-brief">
                  Developed a comprehensive web application for hotel booking as
                  the final project during bootcamp.
                </p>
                <ul>
                  <li>
                    - Designed and implemented an intuitive user interface for
                    seamless hotel booking experiences.
                  </li>
                  <li>
                    - Implemented robust user authentication using JWT for
                    secure user management.
                  </li>
                  <li>
                    - Built a Restful API to enable smooth communication between
                    the front-end and back-end.
                  </li>
                  <li>
                    - Designed a database to create an efficient and scalable
                    data storage system.
                  </li>
                  <li>
                    - Collaborated in integrating third-party payment gateways
                    to facilitate secure and convenient transactions.
                  </li>
                </ul>
                <div className="slide-direct">
                  <div className="slide-direct-demo">Demo</div>
                  <div
                    className="slide-direct-button"
                    onClick={() => handleGithubClick(1)}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="slide-1">
              <div className="slide-picture">
                <div className="img">
                  <img
                    draggable="false"
                    src="https://trsrwbwyzpqqwdtduzmn.supabase.co/storage/v1/object/sign/dev-images/homeser-1.PNG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtaW1hZ2VzL2hvbWVzZXItMS5QTkciLCJpYXQiOjE2OTU0Nzg1MjIsImV4cCI6MjAxMDgzODUyMn0.83q8o1t4Oe5CnN93ajypwy4PMwbs-5Mlj5hLox4rpvA&t=2023-09-23T14%3A15%3A24.100Z"
                  ></img>
                </div>
              </div>
              <div className="slide-detail slide-detail-2">
                <h1>HomeServices</h1>
                <h3>Home Services Booking Web Application</h3>
                <p id="short-brief">
                  Developed a user-friendly web application catering to home
                  service needs.
                </p>
                <ul>
                  <li>
                    - Designed and implemented stylish and responsive user
                    interfaces using Tailwind CSS.
                  </li>
                  <li>
                    - Implemented JWT authentication for secure user access.
                  </li>
                  <li>
                    - Developed API endpoints on the server to manage user
                    authentication.
                  </li>
                  <li>
                    - Engineered functions and APIs for users to schedule
                    appointments.
                  </li>
                </ul>
                <div className="slide-direct" disabled>
                  <div className="slide-direct-demo">Demo</div>
                  <div
                    className="slide-direct-button"
                    onClick={() => handleGithubClick(2)}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
