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
          <a href="#resume" className="navlink">
            resume
          </a>
        </nav>
      </header>
      <main className="main">
        <div className="intro">HI, I'M SURYA</div>
        <div className="tagline">
          a software engineer passionate in{" "}
          <span className="highlight">full-stack development</span>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-left">
          <div className="footer-name">Surya Salem</div>
          <div className="portfolio-year">portfolio 2024</div>
        </div>
        <div className="footer-center">all rights reserved</div>
        <div className="footer-right">
          <a href="mailto:suryasalem24@outlook.com" className="contact-email">
            suryasalem24@outlook.com
          </a>
          <div className="social-icons">
            <a
              href="https://www.github.com/suryasalem"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/suryasalem"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </body>
  );
};

export default Homepage;
