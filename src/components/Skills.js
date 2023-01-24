import React, { useState, useRef } from "react";
import downArrow from "../img/downArrow.png";
import rightArrow from "../img/rightArrow.png";
import leftArrow from "../img/leftArrow.png";
import vanilla from "../img/vanillasJS.png";
import react from "../img/react.png";
import css from "../img/css.png";
import scss from "../img/scss.png";
import html from "../img/html.png";
import tailwind from "../img/tailwind.png";
import firebase from "../img/firebase.png";
import vue from "../img/vue.png";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

 

  return (
    <motion.div className="skills-session">
      <h1>Skills</h1>
      <div className="skills">
     <img src={vanilla} alt="" />
     <img src={html} alt="" />
     <img src={css} alt="" />
     <img src={scss} alt="" />
     <img src={tailwind} style={{width: "300px"}} alt="" />
     <img src={react} alt="" />
     <img src={firebase} style={{width: "200px"}} alt="" />
     <img src={vue} alt="" />
      </div>
      
     

    </motion.div>
  );
};

export default Skills;
