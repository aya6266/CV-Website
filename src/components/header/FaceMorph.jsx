import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import f0 from "../../assets/face__morph/face0.svg";
import f1 from "../../assets/face__morph/face1.svg";
import f2 from "../../assets/face__morph/face2.svg";
import f3 from "../../assets/face__morph/face3.svg";
import f4 from "../../assets/face__morph/face4.svg";
import f5 from "../../assets/face__morph/face5.svg";
import f6 from "../../assets/face__morph/face6.svg";
import f7 from "../../assets/face__morph/face7.svg";
import f8 from "../../assets/face__morph/face8.svg";
import f9 from "../../assets/face__morph/face9.svg";
import f10 from "../../assets/face__morph/face10.svg";
import f11 from "../../assets/face__morph/face11.svg";
import f12 from "../../assets/face__morph/face12.svg";
import f13 from "../../assets/face__morph/face13.svg";
import f14 from "../../assets/face__morph/face14.svg";
import f15 from "../../assets/face__morph/face15.svg";
import { useState } from "react";
import { useEffect, useRef } from "react";
const facesArr = [
  f0,
  f1,
  f2,
  f3,
  f4,
  f5,
  f6,
  f7,
  f8,
  f9,
  f10,
  f11,
  f12,
  f13,
  f14,
  f15,
];

const imageAnimation = {
  initial: { y: "50%", opacity: 0, scale: "0.5" },
  animate: { y: 0, opacity: 1, scale: 1 },
  exit: { y: "50%", opacity: 0, transition: { duration: 0.5 } },
  transition: { duration: 2, ease: "easeOut" },
};
const FaceMorph = () => {
  const [currFace, setCurrFace] = useState(facesArr[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      giveAFace();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const giveAFace = () => {
    let num = Math.floor(Math.random() * (facesArr.length - 1));
    setCurrFace(facesArr[num]);
    return;
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.img
        {...imageAnimation}
        key={currFace}
        src={currFace}
        class="face"
        alt=""
      />
    </AnimatePresence>
  );
};

export default FaceMorph;
