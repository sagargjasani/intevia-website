import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import "./c1.scss";
const C1 = () => {
  return (
    <div className="c1">
      <h1>Candidates</h1>
      <div className="c1-container container">
        <div className="c1div1">
          <p>
            Intevia Healthcare supports all candidates from start to finish of
            each placement and beyond. Our dedicated Consultants are available{" "}
            <Link href="/contact-us">24/7, 365 days</Link> and most importantly
            we do our very best to ensure you are always happy with your
            bookings, training requirements and much more.
          </p>
        </div>
        <div className="c1img1-container">
          <div className="c1img1"></div>
        </div>
        <div className="c1img2-container">
          <div className="c1img2"></div>
        </div>
        <div className="c1lastdiv">
          <p>
            By registering with Intevia Healthcare, we can offer a full range of
            benefits. These include:
          </p>
          <ul>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              <p>Professional, confidential and honest approach</p>
            </li>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              <p>Highly trained Consultants</p>
            </li>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              <p>Dedicated ongoing support, 24/7, 365 day</p>
            </li>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              <p>
                Referral bonus for each successful placement (subject to a
                qualifying period)
              </p>
            </li>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              <p>Assistance in finding affordable accommodation</p>
            </li>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              <p>Training courses contributed against or provided</p>
            </li>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              <p>Weekly pay</p>
            </li>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              <p>Contract and Permanent positions</p>
            </li>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              <p>Revalidation and Appraisal Services</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default C1;
