import Link from "next/link";
import "./cl1.scss";
const Cl1 = () => {
  return (
    <div className="cl1">
      <div className="cl1-container container">
        <div className="cl1div1">
          <h1>Staffing Solutions</h1>
          <p>
            <em>
              Intevia Healthcare are a reliable and fast growing secondary
              supplier to some of the largest frameworks in the UK and we do not
              intend to stop there.
            </em>
          </p>
          <p>
            To discuss staffing solutions please contact us on 00442034888172
            and our Operations Director will organise a visit to come out and
            discuss a variety of options with you. Alternatively fill in the
            form on our <Link href="contact-us">contact page</Link> and we will
            get in touch with you shortly.
          </p>
        </div>
        <div className="cl1img1-container">
          <div className="cl1img1"></div>
        </div>
      </div>
    </div>
  );
};

export default Cl1;
