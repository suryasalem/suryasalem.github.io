import { SiLinkedin, SiGithub } from "react-icons/si";
import { IconContext } from "react-icons";
import "./projects.css";

const Projects = () => {
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
          <a href="/projects" className="navlink">
            projects
          </a>
          <a href="/about" className="navlink">
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
        <div className="project-page-title">Projects</div>
        <div className="tagline">
          <div className="tagline-text">some side projects i made &nbsp;</div>
          <div className="highlight">enjoy!</div>
        </div>
        <div className="work-grid">
          <a
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
                  <div className="project-title">
                    DripDrop - CS 407 (Senior Project)
                  </div>
                  <div className="project-description">
                    January 2024 - May 2024
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://selfservice.mypurdue.purdue.edu/prod/bzwsrch.p_catalog_detail?subject=CS&term=CURRENT&cnbr=47300"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <div className="work-item erd">
              <div className="project-container">
                <div className="project-header">
                  Auto-grouping <br /> ERD images
                </div>
                <div className="project-desc-text">
                  <div className="project-title">
                    ERD Classification - CS 473
                  </div>
                  <div className="project-description">November 2023</div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/Bmeshanko/StemSpace"
            rel="noreferrer"
            target="_blank"
            className="project-link"
          >
            <div className="work-item stemspace">
              <div className="project-container">
                <div className="project-header">
                  A Simple Social <br /> Media Platform
                </div>
                <div className="project-desc-text">
                  <div className="project-title">StemSpace - CS 307</div>
                  <div className="project-description">
                    January 2022 - May 2022
                  </div>
                </div>
              </div>
            </div>
          </a>
          {/* <a
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
          </a> */}
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

export default Projects;
