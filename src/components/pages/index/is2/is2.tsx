import {
  FaCheck,
  FaEdit,
  FaEllipsisV,
  FaHandsHelping,
  FaIdCardAlt,
  FaQuestion,
  FaRocketchat,
} from "react-icons/fa";
import "./is2.scss";

const Is2 = () => {
  return (
    <div className="is2">
      <h5>Our Services</h5>
      <div className="is2-up">
        <div>
          <h4>
            <FaEdit />
          </h4>
          <h5>Basic Life Support courses</h5>
          <p>Stay up to date with our Basic Life Support courses.</p>
        </div>
        <div>
          <h4>
            <FaHandsHelping />
          </h4>
          <h5>24/7 Helpdesk </h5>
          <p>Our team are available 24/7, to help you whatever the issue.</p>
        </div>
        <div>
          <h4>
            <FaIdCardAlt />
          </h4>
          <h5>Supply of Uniforms</h5>
          <p>We supply all candidates with their own uniforms.</p>
        </div>
        <div>
          <h4>
            <FaCheck />
          </h4>
          <h5>DBS (CRB) service</h5>
          <p>We support with the application process from beginning to end</p>
        </div>
        <div>
          <h4>
            <FaRocketchat />
          </h4>
          <h5>Training Courses</h5>
          <p>
            Our team provide training courses so you can stay up to date with
            all the requirements.
          </p>
        </div>
        {/* <div>
          <h4>
            <FaCalendarCheck />
          </h4>
          <h5>Daily Pay Run</h5>
          <p>
            We pay all our candidates daily, making sure that you can stay on
            top of finances.
          </p>
        </div> */}
        <div>
          <h4>
            <FaEllipsisV />
          </h4>
          <h5>Fantastic Referral scheme</h5>
          <p>We reward you for helping us place a candidate.</p>
        </div>
        <div>
          <h4>
            <FaQuestion />
          </h4>
          <h5>Learn More</h5>
          <p>Click above to learn more about what services we offer. </p>
        </div>
      </div>
    </div>
  );
};

export default Is2;
