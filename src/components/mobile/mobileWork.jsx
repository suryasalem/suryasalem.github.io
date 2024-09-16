import MobileHeader from "./mobileHeader.jsx";
import MobileFooter from "./mobileFooter.jsx";
import "./mobileWork.css";

const mobileWork = () => {
  return (
    <body>
      <MobileHeader />

      <main className="m-main">
        <div className="work-title">Work</div>
        <div className="m-tagline">
          <div className="m-tagline-text">
            here are some of my previous &nbsp;
          </div>
          <div className="m-highlight">work experiences</div>
        </div>
        <div className="m-work-grid">
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
                  <div className="project-title">Microsoft Minecraft</div>
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

      <MobileFooter />
    </body>
  );
};

export default mobileWork;
