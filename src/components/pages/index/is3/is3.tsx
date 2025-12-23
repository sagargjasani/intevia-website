import Link from "next/link";
import "./is3.scss";

const Is3 = () => {
  return (
    <div className="is3">
      <div className="container">
        <div className="is3-inner">
          <p>Book an appointment with one of our specialists</p>

          <Link href="/contact-us">BOOK NOW</Link>
        </div>
      </div>
    </div>
  );
};

export default Is3;
