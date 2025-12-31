"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./nav.scss";

const Nav = () => {
  const [ham, changeHam] = useState(true);
  const [subMenu, changeSubMenu] = useState(true);
  const resetHam = () => {
    if (isMobile) {
      changeHam(!ham);
    }
  };
  let navlink = {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    show: {
      opacity: 1,
      y: "0",
    },
  };

  let navIcon = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
    },
  };

  const navbar = {
    hidden: {
      rotateY: 120,
    },
    show: {
      rotateY: 0,
    },
  };

  useEffect(() => {
    if (isMobile) {
      changeHam(false);
    }
  }, []);

  return (
    <>
      <nav>
        <div className="brand">
          <div className="logo">
            <Link href="/">
              <img src="/images/logo.png" alt="aviteus-logo" />
            </Link>
          </div>
        </div>
        <div
          className={ham ? "ham ham-open" : "ham"}
          onClick={() => changeHam(!ham)}
        >
          <motion.span animate={{ opacity: 1, x: 0, y: 0 }} initial="show" />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <motion.div
          animate={ham ? "show" : "hidden"}
          initial={ham ? "hidden" : "show"}
          variants={navbar}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="navbar"
        >
          <div className="navlinks">
            <motion.div
              animate={ham ? "show" : "hidden"}
              initial={ham ? "hidden" : "show"}
              variants={navlink}
              transition={{ delay: 0.5 }}
              className="navlink"
              onClick={() => resetHam()}
            >
              <span />
              <Link href="/">HOME</Link>
            </motion.div>
            <motion.div
              animate={ham ? "show" : "hidden"}
              initial={ham ? "hidden" : "show"}
              variants={navlink}
              transition={{ delay: 0.6 }}
              className="navlink"
              onClick={() => resetHam()}
            >
              <span />
              <Link href="/about-us">ABOUT</Link>
            </motion.div>
            <motion.div
              animate={ham ? "show" : "hidden"}
              initial={ham ? "hidden" : "show"}
              variants={navlink}
              transition={{ delay: 0.7 }}
              className="navlink"
              onClick={() => resetHam()}
            >
              <Link href="/contact-us">CONTACT</Link>
              <span />
            </motion.div>
            <motion.div
              animate={ham ? "show" : "hidden"}
              initial={ham ? "hidden" : "show"}
              variants={navlink}
              transition={{ delay: 0.8 }}
              className="navlink"
              onClick={() => resetHam()}
            >
              <span />
              <Link href="/candidates">CANDIDATES</Link>
            </motion.div>
            <motion.div
              animate={ham ? "show" : "hidden"}
              initial={ham ? "hidden" : "show"}
              variants={navlink}
              transition={{ delay: 0.9 }}
              className="navlink"
              onClick={() => resetHam()}
            >
              <span />
              <Link href="/clients">CLIENTS</Link>
            </motion.div>
            <motion.div
              animate={ham ? "show" : "hidden"}
              initial={ham ? "hidden" : "show"}
              variants={navlink}
              transition={{ delay: 1.0 }}
              className="navlink"
              onClick={() => resetHam()}
            >
              <span />
              <Link href="/services">SERVICES</Link>
            </motion.div>
            {/* <motion.div
              animate={ham ? "show" : "hidden"}
              initial={ham ? "hidden" : "show"}
              variants={navlink}
              transition={{ delay: 1.1 }}
              className="navlink"
              onClick={() => resetHam()}
            >
              <span />
              <Link href="./files/TIMESHEET_&_Assesment_Aviteus_Healthcare.pdf">
                GET TIMESHEET
              </Link>
            </motion.div> */}
            {/* <motion.div
              animate={ham ? "show" : "hidden"}
              initial={ham ? "hidden" : "show"}
              variants={navlink}
              transition={{ delay: 1.2 }}
              className="navlink"
              onClick={() => resetHam()}
            >
              <a href="#usefullLinks">USEFUL LINKS</a>
            </motion.div> */}
            <motion.div
              animate={ham ? "show" : "hidden"}
              initial={ham ? "hidden" : "show"}
              variants={navlink}
              transition={{ delay: 1.1 }}
              className="navlink"
              onClick={() => {
                changeSubMenu(!subMenu);
              }}
              onHoverStart={() => {
                changeSubMenu(!subMenu);
              }}
              onHoverEnd={() => {
                changeSubMenu(!subMenu);
              }}
            >
              <span />
            </motion.div>
          </div>
          {/* <ul className="nav-icons">
            <motion.a
              animate={ham ? "show" : "hidden"}
              initial={ham ? "hidden" : "show"}
              variants={navIcon}
              transition={{ delay: 1.2 }}
              href="https://www.facebook.com/"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              animate={ham ? "show" : "hidden"}
              initial={ham ? "hidden" : "show"}
              variants={navIcon}
              transition={{ delay: 1.3 }}
              href="https://www.instagram.com/aviteus_healthcare/"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              animate={ham ? "show" : "hidden"}
              initial={ham ? "hidden" : "show"}
              variants={navIcon}
              transition={{ delay: 1.4 }}
              href="https://www.linkedin.com/company/aviteus-healthcare"
            >
              <FaLinkedinIn />
            </motion.a>
          </ul> */}
        </motion.div>
      </nav>
    </>
  );
};

export default Nav;
