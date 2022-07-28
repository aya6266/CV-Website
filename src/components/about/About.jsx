import React from "react";
import "./about.css";

import { FiAward } from "react-icons/fi";
import { BsFolderCheck, BsFillBriefcaseFill } from "react-icons/bs";
import Video from "./Video";
import { motion, Variants } from "framer-motion";
import { leftAnimate, rightAnimate, upAnimate } from "../../animations";

export const About = () => {
  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      id="about"
    >
      <motion.h5 variants={leftAnimate}>Get To Know</motion.h5>
      <motion.h2 variants={rightAnimate}>About Me</motion.h2>

      <div className="container about__container">
        <motion.div variants={leftAnimate} className="about__me">
          <Video />
        </motion.div>
        <div className="about__content">
          <motion.div
            variants={upAnimate}
            transition={{ staggerChildren: 0.5 }}
            className="about__cards"
          >
            <article className="about__card">
              <BsFillBriefcaseFill className="about__icon" />
              <h5>Experience</h5>
              <small>2 years in STEM related field</small>
            </article>
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Education</h5>
              <small>2:1 Chemistry Bsc</small>
            </article>
            <article className="about__card">
              <BsFolderCheck className="about__icon" />
              <h5>Projects</h5>
              <small>Present in Portfolio</small>
            </article>
          </motion.div>
          <motion.p variants={leftAnimate}>
            I was drawn to programming by my creativity and love of analytical
            problem solving. Being a self-driven front-end focused software
            developer, my ideal position would be with a company where I can
            apply my knowledge of web-development to problem solving whilst
            working my way to becoming a full stack developer.
          </motion.p>
          <motion.a
            variants={upAnimate}
            href="#contact"
            className="btn btn-primary"
          >
            Let's Talk
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
