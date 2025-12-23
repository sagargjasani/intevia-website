import Link from "next/link";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h5>Welcome to</h5>
        <h1>Intevia Healthcare</h1>
        <p>
          Scored Platinum score with 100% pass within capacity of one of our
          majaor client GRI
        </p>
        <div className="hero-btn">
          <Link href="/about-us">Know More</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
