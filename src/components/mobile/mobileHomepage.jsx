import React from "react";
import "./mobileHomepage.css";
import pingu from "../images/pingu-no-bg.png";

const mobileHomepage = () => {
  return (
    <body>
      <header className="m-header">
        <div>
          <img src={pingu} alt="Logo" className="m-logo" />
        </div>

        <nav className="m-nav">
          <a href="#work" className="m-navlink">
            work
          </a>
          <a href="#fun" className="m-navlink">
            fun
          </a>
          <a href="#about" className="m-navlink">
            about
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/build-files/Surya_Salem_Resume.pdf`}
            rel="noreferrer"
            target="_blank"
            className="m-navlink"
          >
            resume
          </a>
        </nav>
      </header>
      <main className="m-main">
        <div className="m-intro">HI, I'M SURYA</div>
        <div className="m-tagline">
          <div className="m-tagline-text">
            a software engineer passionate in &nbsp;
          </div>
          <div className="m-highlight">full-stack development</div>
        </div>
      </main>
      <footer className="m-footer">
        <div className="m-footer-box-one">
          <div className="m-footer-name">Surya Salem</div>
          <div className="m-portfolio-version">portfolio v1.24</div>
          <br />
          <div className="m-copyright">all rights reserved</div>
        </div>
        {/* <div className="footer-box-two"></div>
        <div className="footer-box-three">
          <div className="contact">contact me at</div>
          <a href="mailto:suryasalem24@outlook.com" className="contact-email">
            suryasalem24@outlook.com
          </a>
        </div> */}
        <div className="m-footer-box-four">
          <a href="mailto:suryasalem24@outlook.com" className="m-contact-email">
            email
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/build-files/Surya_Salem_Resume.pdf`}
            rel="noreferrer"
            target="_blank"
            className="m-resume"
          >
            resume
          </a>
          <a
            href="https://www.github.com/suryasalem"
            target="_blank"
            rel="noreferrer"
            className="m-social-icon"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/suryasalem"
            target="_blank"
            rel="noreferrer"
            className="m-social-icon"
          >
            linkedin
          </a>
        </div>
      </footer>
    </body>
  );
};

export default mobileHomepage;
