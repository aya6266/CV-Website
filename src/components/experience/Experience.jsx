import React from "react";
import "./experience.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { DiGit, DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiBabel } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { motion, Variants } from "framer-motion";
import {
  leftAnimate,
  rightAnimate,
  upAnimate,
  opAnimation,
} from "../../animations";
export const Experience = () => {
  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      id="experience"
    >
      <motion.h5 variants={leftAnimate}>The Skills I Have</motion.h5>
      <motion.h2 variants={rightAnimate}>My Experience</motion.h2>

      <motion.div
        variants={upAnimate}
        className="container experience__container"
      >
        <div className="experience__frontend">
          <h3>Development</h3>
          <div className="experience__content mobile">
            <article className="experience__details">
              <AiOutlineHtml5 className="experience__details-icon" />
              <div>
                <h4>Html</h4>
                <small className="text-light">Markup Language</small>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3Full className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Styling</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Language</small>
              </div>
            </article>
            <article className="experience__details">
              <SiWebpack className="experience__details-icon" />
              <div>
                <h4>Webpack</h4>
                <small className="text-light">Tools/Methods</small>
              </div>
            </article>
            <article className="experience__details">
              <SiBabel className="experience__details-icon" />
              <div>
                <h4>Babel</h4>
                <small className="text-light">Tools/Methods</small>
              </div>
            </article>
            <article className="experience__details">
              <DiGit className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Source Code</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Frameworks</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <h4>Tailwindcss</h4>
                <small className="text-light">Styling</small>
              </div>
            </article>
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Backend</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPython className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Language</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJest className="experience__details-icon" />
              <div>
                <h4>Jest</h4>
                <small className="text-light">Test-running</small>
              </div>
            </article>
            <article className="experience__details">
              <DiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">NoSQL database</small>
              </div>
            </article>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
