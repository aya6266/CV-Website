import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { motion, Variants } from "framer-motion";
import {
  leftAnimate,
  rightAnimate,
  upAnimate,
  opAnimation,
} from "../../animations";
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b1wj3gj",
        "template_b2npkpt",
        form.current,
        "XtvcfCWfHOXEX9ByV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      id="contact"
    >
      <motion.h5 variants={leftAnimate}>Give Me A Message</motion.h5>
      <motion.h2 variants={rightAnimate}>Contact Me</motion.h2>

      <motion.form variants={upAnimate} ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Who are you?" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea
          name="message"
          rows="7"
          placeholder="Say Hi :}"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
