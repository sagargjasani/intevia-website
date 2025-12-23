import { FaEdit, FaHeadset, FaIdCardAlt } from "react-icons/fa";
import "./au4.scss";

const Au4 = () => {
  return (
    <div className="au4 ">
      <div className="container">
        <h5>Why Choose Us</h5>
        <p>
          Because within each of its professional teams, Intevia Healthcare has
          dedicated client and candidate teams covering the multitude of medical
          specialties and roles to ensure each customer receives its first class
          service, ultimately ensuring patients are always put first.
        </p>
        <div className="au4-cards">
          <div className="au4-card">
            <span>
              <FaEdit />
            </span>
            <h5>Our Philosophy</h5>
            <p>Trustworthiness & reliability.</p>
          </div>
          <div className="au4-card">
            <span>
              <FaHeadset />
            </span>
            <h5>Our Aspirations</h5>
            <p>Meeting needs. Exceeding expectations</p>
          </div>
          <div className="au4-card">
            <span>
              <FaIdCardAlt />
            </span>
            <h5>Our Commitments</h5>
            <p>Be pro-active, seek new knowledge, communicate well</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Au4;
