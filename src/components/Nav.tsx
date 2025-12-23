"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useDeviceSelectors } from "react-device-detect";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./nav.scss";

const Nav = () => {
  const [selectors] = useDeviceSelectors(window.navigator.userAgent);
  const { isMobile } = selectors;
  const [ham, changeHam] = useState(selectors.isMobile ? false : true);
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
      rotateY: 112,
    },
    show: {
      rotateY: 0,
    },
  };

  useEffect(() => {
    if (isMobile) {
      setTimeout(() => {
        changeHam(true);
        changeHam(false);
      }, 1000);
    }
  }, []);
  return (
    <>
      <nav>
        <div className="brand">
          <div className="logo">
            <Link href="/">
              <img src="/images/logo.png" alt="intevia-logo" />
            </Link>
          </div>
        </div>
        <div
          className={ham ? "ham ham-open" : "ham"}
          onClick={() => changeHam(!ham)}
        >
          <motion.span
            animate={{ opacity: 1, x: 0, y: 0, color: "white" }}
            initial="false"
          />
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
              <Link href="./files/TIMESHEET_&_Assesment_Intevia_Healthcare.pdf">
                GET TIMESHEET
              </Link>
            </motion.div>
            <motion.div
              animate={ham ? "show" : "hidden"}
              initial={ham ? "hidden" : "show"}
              variants={navlink}
              transition={{ delay: 1.2 }}
              className="navlink"
              onClick={() => resetHam()}
            >
              <span />
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
          <ul className="nav-icons">
            <motion.a
              animate={ham ? "show" : "hidden"}
              initial={ham ? "hidden" : "show"}
              variants={navIcon}
              transition={{ delay: 1.2 }}
              href="https://www.facebook.com/Intevia-Healthcare-105692805507912"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              animate={ham ? "show" : "hidden"}
              initial={ham ? "hidden" : "show"}
              variants={navIcon}
              transition={{ delay: 1.3 }}
              href="https://www.instagram.com/intevia_healthcare/"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              animate={ham ? "show" : "hidden"}
              initial={ham ? "hidden" : "show"}
              variants={navIcon}
              transition={{ delay: 1.4 }}
              href="https://www.linkedin.com/company/intevia-healthcare"
            >
              <FaLinkedinIn />
            </motion.a>
            {/* <motion.a
            animate={ham ? "show" : "hidden"}
            initial={ham ? "hidden" : "show"}
            variants={navIcon}
            transition={{ delay: 1.5 }}
            href="https://twitter.com/"
          >
            <FaTwitter />
          </motion.a> */}
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default Nav;
