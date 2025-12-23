import { FaGlobeAmericas, FaIdCard, FaList, FaUsers } from "react-icons/fa";
import "./is5.scss";

const Is5 = () => {
  return (
    <div className="is5">
      <h5>Client Services</h5>
      <div className="is5-cards">
        <div className="card">
          <div className="card-up">
            <span>
              <FaUsers />
            </span>
            <h5>Staffing Solutions</h5>
          </div>
          <div className="card-down">
            <p>
              Intevia Global are a reliable and fast growing secondary supplier
              to some of the largest frameworks in the UK and we do not intend
              to stop there.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-up">
            <span>
              <FaIdCard />
            </span>
            <h5>Permanent Recruitment</h5>
          </div>
          <div className="card-down">
            <p>
              We provide a comprehensive search to aid your recruitment
              processes and supply the full range of clinical professionals,
              including Doctors, Nurses, AHP’s, Social workers and all
              healthcare support roles.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-up">
            <span>
              <FaGlobeAmericas />
            </span>
            <h5>International Recruitment</h5>
          </div>
          <div className="card-down">
            <p>
              Intevia Global has opportunities for Health professionals in a
              wide variety of countries in the world meaning we’re able to
              relocate you when you’re ready for the next stage of your career.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-up">
            <span>
              <FaList />
            </span>
            <h5>Compliance</h5>
          </div>
          <div className="card-down">
            <p>
              We have streamlined the process and given you total transparency
              and complete control for you to complete everything online through
              an online profile, at a time convenient to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Is5;
