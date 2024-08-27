import { SiLinkedin, SiGithub } from "react-icons/si";
import { IconContext } from "react-icons";
import surya from "../images/me.png";
import { Link } from "react-router-dom";

import "./about.css";

const About = () => {
  return (
    <body>
      <header className="header">
        <Link to="/" className="name">
          Surya Salem
        </Link>
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
        <container className="about-container">
          <div className="text-boxes">
            <div className="about-title">Who</div>
            <div className="tagline">
              <div className="about-text">
                Hi, I'm Surya <br />
                <br />
                I recently graduated from Purdue University with a B.S. in
                Computer Science specializing in Software Engineering, Machine
                Learning, and Artificial Intelligence with a Minor in
                Management. During my time at Purdue, I have been involved in
                The Data Mine, a learning community partnering with corporations
                to work on year-long projects, as well as various clubs. I was
                also the co-founder and VPI of the Association of South Asians
                at Purdue (ASAP). <br />
                <br />
                In my free time, I enjoy photography, dancing, and gaming. When
                I was at Purdue, I was in a group called ADVNT, a
                pre-professional dance organization that performed at showcases
                and competitions throughout the Midwest. At my last performance
                with the team, we won 2nd place at IndyOpen ‘24. I also game
                casually to stay in touch with many of my friends.
              </div>
              {/* <div className="highlight">Surya</div> */}
            </div>
          </div>
          <div className="image-box">
            <img src={surya} alt="surya" className="surya-image" />
          </div>
        </container>
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

export default About;
