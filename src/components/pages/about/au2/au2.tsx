import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./au2.scss";

const Au2 = () => {
  const data: any = [];
  return (
    <div className="au2">
      <div className="au2-container container">
        <h5>Our Team</h5>
        <div className="facs">
          <div className="fac">
            <div className="fac-img">
              {/* <Img fluid={data.fac1.childImageSharp.fluid} /> */}
            </div>
            <div className="fac-icons">
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
            </div>
            <div className="fac-details">
              <h4>Rasel Ahmed</h4>
              <p>Menager</p>
            </div>
          </div>
          <div className="fac">
            <div className="fac-img">
              {/* <Img fluid={data.fac2.childImageSharp.fluid} /> */}
            </div>
            <div className="fac-icons">
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
            </div>
            <div className="fac-details">
              <h4>Rasel Ahmed</h4>
              <p>Menager</p>
            </div>
          </div>
          <div className="fac">
            <div className="fac-img">
              {/* <Img fluid={data.fac3.childImageSharp.fluid} /> */}
            </div>
            <div className="fac-icons">
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
            </div>
            <div className="fac-details">
              <h4>Rasel Ahmed</h4>
              <p>Menager</p>
            </div>
          </div>
          <div className="fac">
            <div className="fac-img">
              {/* <Img fluid={data.fac4.childImageSharp.fluid} /> */}
            </div>
            <div className="fac-icons">
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
            </div>
            <div className="fac-details">
              <h4>Rasel Ahmed</h4>
              <p>Menager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Au2;
