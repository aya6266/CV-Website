import React from "react";
import animation from "../../assets/Ani-.mp4";
import { useMotionValue, useTransform, motion } from "framer-motion";
const Video = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        rotate: -10,
      }}
      className="greek__animation"
    >
      <video height="90%" width="90%" autoPlay muted loop>
        <source src={animation} type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default Video;
