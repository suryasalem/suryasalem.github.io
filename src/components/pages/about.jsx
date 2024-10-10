import surya from "../images/me.png";

import Header from "./header";
import Footer from "./footer";
import "./about.css";

const About = () => {
  return (
    <body>
      <Header />

      <main className="main">
        <container className="about-container">
          <div className="text-boxes">
            <div className="about-title">Who</div>
            <div className="tagline">
              <div className="about-text">
                Hi, I'm Surya! <br />
                <br />
                I am passionate computer scientist with a B.S. in Computer
                Science from Purdue University, where I focused on ML, AI, and
                Software Engineering, complemented by a minor in Management. I
                have hands-on experience with technologies such as Python, R, C,
                Java, HTML, CSS, Javascript, SQL, ARM Assembly, Scala, Haskell,
                Rust, Azure, AWS, Git, Figma, and many others. <br />
                <br />
                I have interned at Leidos and Align Technology, where I enhanced
                security infrastructure, developed Python scripts for workflow
                efficiency, and designed autonomous solutions for data analysis.
                My projects span various domains, including AI chatbots,
                cryptocurrency, social media platforms, and image
                classification. Notable projects include DripDrop, a full-stack
                fashion platform, and a boundary detection algorithm for John
                Deere. <br />
                <br />
                I co-founded and served as Vice President Internal for the
                Association of South Asians at Purdue (ASAP), fostering
                community and cultural exchange. Additionally, I am an alumni of
                the ADVNT Performance Team, where we achieved 2nd place at Indy
                Open'24. Explore my portfolio to learn more about my work and
                passion for technology!
                <br />
                <br />
                You can reach my by email or connect with me on LinkedIn or visit my GitHub to see my projects in action, all linked below!
              </div>
              {/* <div className="highlight">Surya</div> */}
            </div>
          </div>
          <div className="image-box">
            <img src={surya} alt="surya" className="surya-image" />
          </div>
        </container>
      </main>

      <Footer />
    </body>
  );
};

export default About;
