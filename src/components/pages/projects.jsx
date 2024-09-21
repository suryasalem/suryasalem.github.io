import Header from "./header";
import Footer from "./footer"
import "./projects.css";

const Projects = () => {
  return (
    <body>
      <Header />

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
          
        </div>
      </main>

      <Footer />
    </body>
  );
};

export default Projects;
