import { SiLinkedin, SiGithub } from "react-icons/si";
import { IconContext } from "react-icons";
import "./work.css";

import leidos from "../images/leidos.png";

const Work = () => {
  return (
    <body>
      <header className="header">
        <a href="/" className="name">
          Surya Salem
        </a>
        <nav className="nav">
          <a href="/work" className="navlink">
            work
          </a>
          <a href="#fun" className="navlink">
            projects
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
        <div className="work-title">Work</div>
        <div className="tagline">
          <div className="tagline-text">
            here are some of my previous &nbsp;
          </div>
          <div className="highlight">work experiences and school projects</div>
        </div>
        <div className="work-grid">
          {/* <a
            href="https://github.com/TaewoooK/dripdrop407"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <div className="work-item dripdrop">
              <div className="project-container">
                <div className="project-header">
                  Social Fashion <br /> Platform
                </div>
                <div className="project-desc-text">
                  <div className="project-title">DripDrop</div>
                  <div className="project-description">
                    A full stack web application that allows users to create and
                    share playlists.
                  </div>
                </div>
              </div>
            </div>
          </a> */}
          <a
            href="https://www.leidos.com/"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <div className="work-item leidos">
              <div className="project-container">
                <div className="project-header">
                  Automated Security <br /> with Scripting
                </div>
                <div className="project-desc-text">
                  <div className="project-title">Leidos</div>
                  <div className="project-description">
                    May 2023 - July 2023
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://www.aligntech.com/"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <div className="work-item align">
              <div className="project-container">
                <div className="project-header">
                  Security and Automation <br /> for Data Pipelines
                </div>
                <div className="project-desc-text">
                  <div className="project-title">Align Technology</div>
                  <div className="project-description">
                    May 2022 - August 2022
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/build-files/TDM_Symposium2022_Poster_Minecraft.pdf`}
            rel="noreferrer"
            target="_blank"
            className="project-link"
          >
            <div className="work-item minecraft">
              <div className="project-container">
                <div className="project-header">
                  Analyzing Social Data <br /> for Minecraft
                </div>
                <div className="project-desc-text">
                  <div className="project-title">Microsoft  Minecraft</div>
                  <div className="project-description">
                    August 2021 - May 2022
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/build-files/2021JohnDeere-Golf-DMSymposiumPosterFinal.pdf`}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <div className="work-item john-deere">
              <div className="project-container">
                <div className="project-header">
                  Golf Course <br /> Boundary Detection
                </div>
                <div className="project-desc-text">
                  <div className="project-title">John Deere</div>
                  <div className="project-description">
                    August 2020 - May 2021
                  </div>
                </div>
              </div>
            </div>
          </a>
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

export default Work;
