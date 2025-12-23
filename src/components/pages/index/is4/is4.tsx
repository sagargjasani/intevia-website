import Link from "next/link";
import "./is4.scss";

const Is4 = () => {
  return (
    <div className="is4 container">
      <div className="is4-left">
        <h5>
          Looking for <br />a <span>JOB</span>{" "}
        </h5>
      </div>
      <div className="is4-right">
        <div className="is4-img-container">
          <p>Medical Jobs</p>
          <Link href="/candidates">CANDIDATES</Link>
        </div>
      </div>
    </div>
  );
};

export default Is4;
