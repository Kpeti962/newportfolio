import React from "react";
import sketchMan from "../img/sketchMan.png";
import cv from "../img/cv.png";
import resume from "../data/resume.pdf";
import {motion} from "framer-motion";

const CV = () => {
  return (
    <div className="cv-section">
      <div className="imgs">
        <img src={sketchMan} alt="" />
        <div className="cv">
          <h5>Click to download</h5>
          <a target="_blank" href={resume}>
            <motion.img whileHover={{scale: 1.1}} style={{ width: "80px", height: "60px", marginRight: "50px" }} src={cv} alt="" />
          </a>
        </div>
      </div>
      <h2>Oh no... Quickly download my CV before this man sweeps it away</h2>
    </div>
  );
};

export default CV;
