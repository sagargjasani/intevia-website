import Link from "next/link";
import "./cl2.scss";
const Cl2 = () => {
  return (
    <div className="cl2">
      <div className="cl2-container container">
        <div className="cl2img1-container">
          <div className="cl2img1"></div>
        </div>
        <div className="cl2div1">
          <h1>International Medical Recruitment</h1>
          <p>
            <em>
              International Medical recruitment – Intevia Healthcare has strong
              ties into Europe, Australia & the Middle East. With opportunities
              for Health professionals in a wide variety of countries in the
              world. With current clients we’re able to relocate you when you
              are ready for the next stage of your career. <br />
              <br />
            </em>{" "}
            Moving Families and loved ones is a very important part of the
            process and at Intevia Healthcare we are very aware of the
            importance to support that transition. To move with ease and be
            confident with the support we have dedicated international
            Recruitment Consultants working on the International Division.
          </p>
          <p>
            <em>
              Call today to discuss your next move 000000000000 or get in touch
              via our <Link href="contact-us">contact page</Link>.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cl2;
