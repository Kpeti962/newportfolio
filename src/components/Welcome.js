import React, { useRef, useState } from "react";
import selfImg from "../img/selfImg.png";

import { Typewriter } from "react-simple-typewriter";

const Welcome = ({ showImg, setShowImg }) => {
  const [showBtn, setShowBtn] = useState(false);

  setTimeout(() => setShowBtn(true), 5000);
  const ref = useRef(null);

  const showMoreHandle = () => {
    setShowImg(true);
    setTimeout(() => ref.current?.scrollIntoView({ behavior: "smooth" }), 200);
  };

  return (
    <div className="welcome-session">
      <div className="hello-text">
        <h2>
          <Typewriter
            words={[`Hello, I'm Peter Koncz, Junior Frontend developer`]}
          />
        </h2>
      </div>
      <div className="aboutme-text">
        <h4>
          I graduated in tourism and hospitality in January 2021, but I decided
          to learn to program. I have been learning to be a frontend developer
          since 2022, and I also completed a frontend developer online training
          at EPAM Systems Inc. The more I delved deeper into its mysteries, the
          more I liked this profession. I know I still have a long way to go,
          but I think I'm on the right track. In this portfolio I try to show
          everything I've learned so far.
        </h4>
      </div>
      {showBtn && (
        <button type="submit" onClick={showMoreHandle} className="btn-show">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Learn more about me
        </button>
      )}
      {showImg && (
        <div ref={ref} className="aboutme-session">
          <h3>Yep. That's me</h3>
          <img src={selfImg} alt="" />
        </div>
      )}
    </div>
  );
};

export default Welcome;
