import pingu from "../images/pingu-no-bg.png";
import { Link } from "react-router-dom";

import "./mobileHeader.css";

const mobileHeader = () => {
  return (
    <header className="m-header">
      <Link to="/">
        <img src={pingu} alt="Logo" className="m-logo" />
      </Link>

      <nav className="m-nav">
        <Link to="/work" className="m-navlink">
          work
        </Link>
        <Link to="/projects" className="m-navlink">
          projects
        </Link>
        <Link to="/about" className="m-navlink">
          about
        </Link>
        <a
          href={`${process.env.PUBLIC_URL}/build-files/Surya_Salem_Resume.pdf`}
          rel="noreferrer"
          target="_blank"
          className="m-navlink"
        >
          resume
        </a>
      </nav>
    </header>
  );
};

export default mobileHeader