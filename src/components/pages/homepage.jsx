import React from "react";
import TextTransition, {presets} from "react-text-transition";

import Header from "./header";
import Footer from "./footer"
import "./homepage.css";

const descriptions = ['full-stack development', 'machine learning', 'artificial intelligence', 'web development', 'ui/ux & web design', 'photography', 'dance', 'gaming']

const Homepage = () => {
  const [currentDescription, setCurrentDescription] = React.useState(descriptions[0]);

  const setRandomDescription = React.useCallback(() => {
    const idx = Math.floor(Math.random() * descriptions.length);
    let newDescription = descriptions[idx];
    if (newDescription === currentDescription) {
      setRandomDescription();
    } else {
      setCurrentDescription(newDescription);
    }
  }, [currentDescription])
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setRandomDescription();
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentDescription, setRandomDescription]);

  return (
    <body>
      <Header />
      <main className="main">
        <div className="intro">HI, I'M SURYA</div>
        <div className="tagline">
          <div className="tagline-text">
            a software engineer passionate in &nbsp;
          </div>
          {/* <div className="highlight">{currentDescription}</div> */}
          <div className="highlight">
            <TextTransition
              springConfig={presets.default}
              inline={true}
            >
              {currentDescription}
            </TextTransition>
            </div>
        </div>
      </main>
      <Footer />
    </body>
  );
};

export default Homepage;
