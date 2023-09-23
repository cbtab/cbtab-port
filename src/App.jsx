import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Main/NavBar";
import { useEffect, useState } from "react";
import DisableBrowserHistoryNavigation from "./components/config/disableBrowserHistory";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [scrollToHome, setScrollToHome] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setScrollToHome(true);
    };

    const scrollTo = () => {
      const homeElement = document.getElementById("header");
      if (homeElement && scrollToHome) {
        homeElement.scrollIntoView({ behavior: "smooth" });

        setScrollToHome(false);
      }
    };

    window.addEventListener("resize", handleResize);

    scrollTo();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollToHome]);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "rgb(0, 255, 255)",
        }}
        outerStyle={{
          border: "3px solid rgb(255, 255, 255)",
        }}
      />
      <Router>
        <DisableBrowserHistoryNavigation />
        <NavBar />
        <Header />
        <Main />
      </Router>
    </>
  );
}

export default App;
