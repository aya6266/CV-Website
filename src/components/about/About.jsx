import React from "react";
import "./about.css";
import ME from "../../assets/ME.jpg";
import { FiAward } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>LOL</small>
            </article>
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>LOL</small>
            </article>
            <article className="about__card">
              <BsFolderCheck className="about__icon" />
              <h5>Projects</h5>
              <small>LOL</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit fuga,
            accusantium quae delectus dolorem illum hic voluptatibus optio
            aspernatur vero commodi mollitia totam natus eum excepturi
            architecto numquam eveniet consectetur?
          </p>
          <a href="" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
