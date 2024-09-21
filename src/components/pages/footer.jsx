import { SiLinkedin, SiGithub } from "react-icons/si";
import { IconContext } from "react-icons";
import MediaQuery from "react-responsive";

import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <MediaQuery minWidth={700}>
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
          <IconContext.Provider value={{ color: "#faf5ed", size: "2em" }}>
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
      </MediaQuery>

      <MediaQuery maxWidth={700}>
        <div className="footer-box-one">
          <div className="footer-name">Surya Salem</div>
          <div className="portfolio-version">portfolio v1.24</div>
          <br />
          <div className="copyright">all rights reserved</div>
        </div>
        {/* <div className="footer-box-two"></div>
        <div className="footer-box-three">
          <div className="contact">contact me at</div>
          <a href="mailto:suryasalem24@outlook.com" className="contact-email">
            suryasalem24@outlook.com
          </a>
        </div> */}
        <div className="footer-box-four">
          <a href="mailto:suryasalem24@outlook.com" className="contact-email">
            email
          </a>
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
            rel="noreferrer"
            className="social-icon"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/suryasalem"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            linkedin
          </a>
        </div>
      </MediaQuery>
    </footer>
  );
};

export default Footer;
