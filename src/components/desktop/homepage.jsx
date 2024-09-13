import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si"
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import TextTransition, {presets} from "react-text-transition";

import "./homepage.css";

const descriptions = ['full-stack development', 'machine learning', 'artificial intelligence', 'web development', 'ui/ux & web design', 'photography', 'dance', 'gaming']

const Homepage = () => {
  const [currentDescription, setCurrentDescription] = React.useState(descriptions[0]);

  const setRandomDescription = React.useCallback(() => {
    const idx = Math.floor(Math.random() * descriptions.length);
    let newDescription = descriptions[idx];
    if (newDescription === currentDescription) {
      setRandomDescription();
    } else {
      setCurrentDescription(newDescription);
    }
  }, [currentDescription])
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setRandomDescription();
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentDescription, setRandomDescription]);

  return (
    <body>
      <header className="header">
        <Link to="/" className="name">Surya Salem</Link>
        <nav className="nav">
          <Link to="/work" className="navlink">
            work
          </Link>
          <Link to="/projects" className="navlink">
            projects
          </Link>
          <Link to="/about" className="navlink">
            about
          </Link>
          <a
            href={`${process.env.PUBLIC_URL}/build-files/Surya_Salem_Resume.pdf`}
            rel="noreferrer"
            target="_blank"
            className="navlink"
          >
            resume
          </a>
        </nav>
      </header>
      <main className="main">
        <div className="intro">HI, I'M SURYA</div>
        <div className="tagline">
          <div className="tagline-text">
            a software engineer passionate in &nbsp;
          </div>
          {/* <div className="highlight">{currentDescription}</div> */}
          <div className="highlight">
            <TextTransition
              springConfig={presets.default}
              inline={true}
            >
              {currentDescription}
            </TextTransition>
            </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-box-one">
          <div className="footer-name">Surya Salem</div>
          <div className="portfolio-version">portfolio v1.24</div>
        </div>
        <div className="footer-box-two">
          <div className="copyright">
            <br />
            all rights reserved
          </div>
        </div>
        <div className="footer-box-three">
          <div className="contact">contact me</div>
          <a href="mailto:suryasalem24@outlook.com" className="contact-email">
            suryasalem24@outlook.com
          </a>
        </div>
        <div className="footer-box-four">
          {/* <a
            href={`${process.env.PUBLIC_URL}/build-files/Surya_Salem_Resume.pdf`}
            rel="noreferrer"
            target="_blank"
            className="resume"
          >
            resume
          </a> */}
          <IconContext.Provider value={{ color: "#faf5ed;", size: "2em" }}>
            <a
              href="https://www.github.com/suryasalem"
              target="_blank"
              rel="noopener noreferrer"
              className="github-icon"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/suryasalem"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
            >
              <SiLinkedin />
            </a>
          </IconContext.Provider>
        </div>
      </footer>
    </body>
  );
};

export default Homepage;
