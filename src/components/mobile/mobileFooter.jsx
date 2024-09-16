import './mobileFooter.css'

const mobileFooter = () => {
    return (
      <footer className="m-footer">
        <div className="m-footer-box-one">
          <div className="m-footer-name">Surya Salem</div>
          <div className="m-portfolio-version">portfolio v1.24</div>
          <br />
          <div className="m-copyright">all rights reserved</div>
        </div>
        {/* <div className="footer-box-two"></div>
        <div className="footer-box-three">
          <div className="contact">contact me at</div>
          <a href="mailto:suryasalem24@outlook.com" className="contact-email">
            suryasalem24@outlook.com
          </a>
        </div> */}
        <div className="m-footer-box-four">
          <a href="mailto:suryasalem24@outlook.com" className="m-contact-email">
            email
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/build-files/Surya_Salem_Resume.pdf`}
            rel="noreferrer"
            target="_blank"
            className="m-resume"
          >
            resume
          </a>
          <a
            href="https://www.github.com/suryasalem"
            target="_blank"
            rel="noreferrer"
            className="m-social-icon"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/suryasalem"
            target="_blank"
            rel="noreferrer"
            className="m-social-icon"
          >
            linkedin
          </a>
        </div>
      </footer>
    );
}

export default mobileFooter;