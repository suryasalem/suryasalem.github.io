import surya from "../images/me.png";
import MobileHeader from "./mobileHeader.jsx";
import MobileFooter from "./mobileFooter.jsx";
import "./mobileAbout.css";

const mobileAbout = () => {
  return (
    <body>
      <MobileHeader />

      <main className="m-main">
        <container className="m-about-container">
          <div className="text-boxes">
            <div className="about-title">Who</div>
            <div className="m-tagline">
              <div className="m-about-text">
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

      <MobileFooter />
    </body>
  );
};

export default mobileAbout;
