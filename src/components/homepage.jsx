import React from "react";
import "./homepage.css";

const Homepage = () => {
  return (
    <body>
      <header className="header">
        <div className="name">Surya Salem</div>
        <nav className="nav">
          <a href="#work" className="navlink">
            work
          </a>
          <a href="#fun" className="navlink">
            fun
          </a>
          <a href="#about" className="navlink">
            about
          </a>
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
          <div className="highlight">full-stack development</div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-box-one">
          <div className="footer-name">Surya Salem</div>
          <div className="portfolio-version">portfolio v1.24</div>
        </div>
        <div className="footer-box-two">all rights reserved</div>
        <div className="footer-box-three">
          <div className="contact">contact me at</div>
          <a href="mailto:suryasalem24@outlook.com" className="contact-email">
            suryasalem24@outlook.com
          </a>
        </div>
        <div className="footer-box-four">
          <a
            href={`${process.env.PUBLIC_URL}/build-files/Surya_Salem_Resume.pdf`}
            rel="noreferrer"
            target="_blank"
            className="resume"
          >
            resume
          </a>
          <a
            href="https://www.github.com/suryasalem"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/suryasalem"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            linkedin
          </a>
        </div>
      </footer>
    </body>
  );
};

export default Homepage;
