import { FaCheckCircle } from "react-icons/fa";
import "./cl3.scss";
const Cl3 = () => {
  return (
    <div className="cl3">
      <div className="cl3-container container">
        <div className="cl3div1">
          <h1>Permanent Recruitment</h1>
          <p>
            <em>
              We specialise in supplying high calibre healthcare professionals
              on a permanent recruitment basis into organisations across the UK.
            </em>
            <br />
            <br />
            We provide a comprehensive search to aid your recruitment processes
            and supply the full range of clinical professionals, including
            Doctors, Nurses, AHP’s, Social workers and all healthcare support
            roles.
            <em>
              Full compliance service: <br />
            </em>
            Our recruitment consultants come from a variety of countries and
            have experience working globally and are able to provide a complete
            transition for candidates moving to better their careers. <br />
            <br />
            <em>
              Intevia Healthcare have established relationships in a variety of
              countries to be able to support a smooth and fast transition for
              international placements. <br />
              <br />
              Our clients receive as standard:
            </em>
            <ul>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                <p>
                  A HR perspective on your recruitment solution to ensure your
                  candidate selections best fit your organisational needs
                </p>
              </li>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                <p>Cost effective solutions and timescales</p>
              </li>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                <p>
                  {" "}
                  Social media and advertising campaigns when required –
                  examples of which are available for your perusal
                </p>
              </li>
            </ul>
          </p>
        </div>
        <div className="cl3img1-container">
          <div className="cl3img1"></div>
        </div>
      </div>
    </div>
  );
};
export default Cl3;
