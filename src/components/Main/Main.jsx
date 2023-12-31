import "./Main.css";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = () => {
  return (
    <div className="main-container">
      <Contact />
      <Projects />
      <About />
    </div>
  );
};

export default Main;
