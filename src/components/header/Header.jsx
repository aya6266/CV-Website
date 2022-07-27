import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import FaceMorph from "./FaceMorph";
import { motion, Variants } from "framer-motion";
import {
  leftAnimate,
  rightAnimate,
  upAnimate,
  opAnimation,
} from "../../animations";

export const Header = () => {
  return (
    <header>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="container header__container"
      >
        <motion.h5 variants={leftAnimate}>Hello I'm</motion.h5>
        <motion.h1 variants={rightAnimate}>Kyle Albert</motion.h1>
        <motion.h5 variants={leftAnimate} className="text-light">
          Frontend Developer
        </motion.h5>
        <motion.h5 variants={rightAnimate} className="text-light">
          Artist
        </motion.h5>
        <motion.div variants={leftAnimate}>
          <CTA />
        </motion.div>

        <HeaderSocials />

        <motion.div variants={upAnimate} className="me">
          <FaceMorph />
        </motion.div>

        <a variants={opAnimation} href="#contact" className="scroll__down">
          Contact Me
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
