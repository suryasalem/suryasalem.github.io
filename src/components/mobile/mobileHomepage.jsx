import React from "react";
import MobileHeader from "./mobileHeader.jsx";
import MobileFooter from './mobileFooter.jsx'
import "./mobileHomepage.css";

const mobileHomepage = () => {
  return (
    <body>
      <MobileHeader />
      
      <main className="m-main">
        <div className="m-intro">HI, I'M SURYA</div>
        <div className="m-tagline">
          <div className="m-tagline-text">
            a software engineer passionate in &nbsp;
          </div>
          <div className="m-highlight">full-stack development</div>
        </div>
      </main>

      <MobileFooter />
    </body>
  );
};

export default mobileHomepage;
