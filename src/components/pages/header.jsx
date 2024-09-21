import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import pingu from "../images/pingu-no-bg.png";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <MediaQuery maxWidth={700}>
        <Link to="/">
          <img src={pingu} alt="Logo" className="logo" />
        </Link>
      </MediaQuery>
      <MediaQuery minWidth={700}>
        <Link to="/" className="name">
          Surya Salem
        </Link>
      </MediaQuery>

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
  );
};

export default Header;
