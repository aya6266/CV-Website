import React from "react";
import "./portfolio.css";
import MyArtYourArt from "../../projectArt/My-Art-Your-Art.svg";

import Kanboard from "../../projectArt/Kanboard.svg";
import art__generator from "../../projectArt/art__generator.svg";
import TicTacToe from "../../projectArt/Tic-Tac-Toe.svg";
import EtchASketch from "../../projectArt/EtchaASketch.svg";
import wordleClone from "../../projectArt/wordle-Clone.svg";
import { motion, Variants } from "framer-motion";
import {
  leftAnimate,
  rightAnimate,
  upAnimate,
  opAnimation,
} from "../../animations";
export const Portfolio = () => {
  return (
    <motion.section
      initial={"offscreen"}
      animate={"onscreen"}
      transition={{ staggerChildren: 0.5 }}
      id="portfolio"
    >
      <motion.h5 variants={leftAnimate}>My Current Work</motion.h5>
      <motion.h2 variants={rightAnimate}>Portfolio</motion.h2>
      <div className="container portfolio__container">
        <motion.article variants={upAnimate} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={MyArtYourArt} alt="" />
          </div>
          <h3>My Art Your Art</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/aya6266/My-Art-Your-Art"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://aya6266.github.io/My-Art-Your-Art/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </motion.article>
        <motion.article variants={upAnimate} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={wordleClone} alt="" />
          </div>
          <h3>Wordle Clone</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/aya6266/wordle__clone"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://wordle-clone-9e05c.web.app//"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </motion.article>
        <motion.article variants={upAnimate} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Kanboard} alt="" />
          </div>
          <h3>Kanboard</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/aya6266/Kanboard"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://aya6266.github.io/Kanboard/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </motion.article>
        <motion.article variants={upAnimate} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={art__generator} alt="" />
          </div>
          <h3>Art Generator</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/aya6266/art__generator"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://aya6266.github.io/art__generator/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </motion.article>
        <motion.article variants={upAnimate} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={TicTacToe} alt="" />
          </div>
          <h3>Tic Tac Toe</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/aya6266/Tic-Tac-Toe"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://aya6266.github.io/Tic-Tac-Toe/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </motion.article>
        <motion.article variants={upAnimate} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={EtchASketch} alt="" />
          </div>
          <h3>Etch A Sketch</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/aya6266/Etch-A-Sketch"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://aya6266.github.io/Etch-A-Sketch/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </motion.article>
      </div>
    </motion.section>
    //   <motion.section
    //   initial={"offscreen"}
    //   whileInView={"onscreen"}
    //   viewport={{ once: true, amount: 0.5 }}
    //   transition={{ staggerChildren: 0.5 }}
    //   id="portfolio"
    // >
    //   <motion.h5 variants={leftAnimate}>My Current Work</motion.h5>
    //   <motion.h2 variants={rightAnimate}>Portfolio</motion.h2>
    //   <div className="container portfolio__container">
    //     <motion.article variants={upAnimate} className="portfolio__item">
    //       <div className="portfolio__item-image">
    //         <img src={MyArtYourArt} alt="" />
    //       </div>
    //       <h3>My Art Your Art</h3>
    //       <div className="portfolio__item-cta">
    //         <a
    //           href="https://github.com/aya6266/My-Art-Your-Art"
    //           className="btn"
    //           target="_blank"
    //         >
    //           Github
    //         </a>
    //         <a
    //           href="https://aya6266.github.io/My-Art-Your-Art/"
    //           className="btn btn-primary"
    //           target="_blank"
    //         >
    //           Live Demo
    //         </a>
    //       </div>
    //     </motion.article>
    //     <motion.article variants={upAnimate} className="portfolio__item">
    //       <div className="portfolio__item-image">
    //         <img src={wordleClone} alt="" />
    //       </div>
    //       <h3>Wordle Clone</h3>
    //       <div className="portfolio__item-cta">
    //         <a
    //           href="https://github.com/aya6266/wordle__clone"
    //           className="btn"
    //           target="_blank"
    //         >
    //           Github
    //         </a>
    //         <a
    //           href="https://wordle-clone-9e05c.web.app//"
    //           className="btn btn-primary"
    //           target="_blank"
    //         >
    //           Live Demo
    //         </a>
    //       </div>
    //     </motion.article>
    //     <motion.article variants={upAnimate} className="portfolio__item">
    //       <div className="portfolio__item-image">
    //         <img src={Kanboard} alt="" />
    //       </div>
    //       <h3>Kanboard</h3>
    //       <div className="portfolio__item-cta">
    //         <a
    //           href="https://github.com/aya6266/Kanboard"
    //           className="btn"
    //           target="_blank"
    //         >
    //           Github
    //         </a>
    //         <a
    //           href="https://aya6266.github.io/Kanboard/"
    //           className="btn btn-primary"
    //           target="_blank"
    //         >
    //           Live Demo
    //         </a>
    //       </div>
    //     </motion.article>
    //     <motion.article variants={upAnimate} className="portfolio__item">
    //       <div className="portfolio__item-image">
    //         <img src={art__generator} alt="" />
    //       </div>
    //       <h3>Art Generator</h3>
    //       <div className="portfolio__item-cta">
    //         <a
    //           href="https://github.com/aya6266/art__generator"
    //           className="btn"
    //           target="_blank"
    //         >
    //           Github
    //         </a>
    //         <a
    //           href="https://aya6266.github.io/art__generator/"
    //           className="btn btn-primary"
    //           target="_blank"
    //         >
    //           Live Demo
    //         </a>
    //       </div>
    //     </motion.article>
    //     <motion.article variants={upAnimate} className="portfolio__item">
    //       <div className="portfolio__item-image">
    //         <img src={TicTacToe} alt="" />
    //       </div>
    //       <h3>Tic Tac Toe</h3>
    //       <div className="portfolio__item-cta">
    //         <a
    //           href="https://github.com/aya6266/Tic-Tac-Toe"
    //           className="btn"
    //           target="_blank"
    //         >
    //           Github
    //         </a>
    //         <a
    //           href="https://aya6266.github.io/Tic-Tac-Toe/"
    //           className="btn btn-primary"
    //           target="_blank"
    //         >
    //           Live Demo
    //         </a>
    //       </div>
    //     </motion.article>
    //     <motion.article variants={upAnimate} className="portfolio__item">
    //       <div className="portfolio__item-image">
    //         <img src={EtchASketch} alt="" />
    //       </div>
    //       <h3>Etch A Sketch</h3>
    //       <div className="portfolio__item-cta">
    //         <a
    //           href="https://github.com/aya6266/Etch-A-Sketch"
    //           className="btn"
    //           target="_blank"
    //         >
    //           Github
    //         </a>
    //         <a
    //           href="https://aya6266.github.io/Etch-A-Sketch/"
    //           className="btn btn-primary"
    //           target="_blank"
    //         >
    //           Live Demo
    //         </a>
    //       </div>
    //     </motion.article>
    //   </div>
    // </motion.section>
  );
};

export default Portfolio;
