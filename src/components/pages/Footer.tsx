import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <a className="footercard" href="tel:7025938934">
        7025938934{" "}
        <div className="footericon">
          <FontAwesomeIcon icon={faPhone} />
        </div>
      </a>
      <a className="footercard" href="mailto:sinanlw95@gmail.com">
        sinanlw95@gmail.com
        <div className="footericon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </a>
      <a
        className="footercard"
        href="https://www.linkedin.com/in/sinanmuhammed95/"
        target="_blank"
      >
        sinanmuhammed
        <div className="footericon">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </a>
      <a className="footercard" href="https://ig.me/m/95.ixv" target="_blank">
        95.ixv
        <div className="footericon">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </a>
      <a
        className="footercard"
        href="https://github.com/95-txt"
        target="_blank"
      >
        95-txt
        <div className="footericon">
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </a>
      <a
        className="footercard"
        href="https://wa.me/7025938934?text=Hi, this is from your portfolio web site"
        target="_blank"
      >
        7025938934
        <div className="footericon">
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </a>
    </div>
  );
};

export default Footer;
