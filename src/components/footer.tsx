"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import "./footer.scss";
const Footer = () => {
  return (
    <>
      <a
        className="whatsapp"
        style={{ color: "white" }}
        href="https://wa.me/447418347802"
        target="_blank"
        rel="noreferrer"
      >
        <RiWhatsappFill size="3.3rem" style={{ color: "white" }} />
      </a>
      <footer>
        <div className="footer">
          <div className="footer-logo">
            <Link href="/">
              <img src="/images/logo.png" alt="intevia-logo" />
            </Link>
          </div>

          <div className="footer-up">
            <div>
              <p>
                Suite 5 3rd Floor, <br /> Alpha House, <br />
                296 Kenton Road, <br /> Harrow, United Kingdom, <br /> HA3 8DD
              </p>
            </div>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/candidates">Candidates</Link>
              </li>
              <li>
                <Link href="/clients">Clients</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
            </ul>
            <div>
              <h1>Any questions?</h1>
              <a href="tel:02034888172">0203 4888 172</a>
              {/* <a href="tel:07418347802">0741 8347 802 (Whatsapp Only)</a> */}
              <a href="mailto:info@inteviahealthcare.co.uk">
                info@inteviahealthcare.co.uk
              </a>
              <div className="footer-icons">
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com/">
                  <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div id="usefullLinks">
              <h1>Usefull Links</h1>
              <ul>
                <li>
                  <Link href="./files/TIMESHEET_&_Assesment_Intevia_Healthcare.pdf">
                    GET TIMESHEET
                  </Link>
                </li>
                <li>
                  <Link href="./files/PPN-0621-Carbon-Reduction-Plan-Intevia.pdf">
                    Carbon reduction Plan
                  </Link>
                </li>
                <li>
                  <Link href="./files/Modern-Slavery-Intevia Healthcare LTD.pdf">
                    Modern Slavery
                  </Link>
                </li>
                <li>
                  <Link href="./files/Cyber Essentials Certificate.pdf">
                    Cyber Essential Certificate
                  </Link>
                </li>
                {/* <li>
                  <Link href="./files/APSCo UK Membership Certificate 2024 final - Intevia Healthcare.pdf">
                    APSCo membership
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="footer-copy">
            Company Registration Number - 13337393 <br /> ICO NUMBER - ZB303299{" "}
            <br />
            &copy; {new Date().getFullYear()} Intevia Healthcare | All Rights
            Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
