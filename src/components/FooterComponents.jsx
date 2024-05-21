import "./style/footeromponents.css";

import footer1 from "../assets/images/free.png";
import footer2 from "../assets/images/ig.png";
import footer3 from "../assets/images/linked.png";

const FooterComponents = () => {
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-ul">
            <ul>
              <li>
                <strong>Pages</strong>
              </li>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Testimonial</a></li>
            </ul>
            <ul>
              <li>
                <strong>About</strong>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="">Project</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <ul>
              <li>
                <strong>Privacy</strong>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
              <li>
                <a href="">Cookies</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <p>Jakarta Selatan St. 12950</p>
            <p>Indonesia</p>
            <div className="footer-social">
              <a href="">
                <img src={footer1} alt="freelance" />
              </a>
              <a href="">
                <img src={footer2} alt="instagram" />
              </a>
              <a href="">
                <img src={footer3} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <h1>
            Rund<span>Web</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FooterComponents;
