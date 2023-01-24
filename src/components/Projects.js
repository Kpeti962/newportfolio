import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faX,
  faAngleLeft,
  faAngleRight,
  faArrowDown,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Projects = ({
  addedLanguages,
  setAddedLanguages,
  addAbleLanguages,
  setAddAbleLanguages,
  projects,
  setProjects,
}) => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const [projectsForSlider, setProjectsForSlider] = useState([]);
  
 

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const addLanguageHandler = (language) => {
    const filteredLanguages = addAbleLanguages.filter(
      (item) => item.id !== language.id
    );

    setAddAbleLanguages(filteredLanguages);
    const { name, className, id } = language;
    setAddedLanguages([
      ...addedLanguages,
      { name: language.name, className: language.className, id: language.id },
    ]);
  };

  useEffect(() => {
    if (addedLanguages.length === 0) {
      setProjectsForSlider(projects);
      return;
    }
    const projectsArray = projects;
    const addedLanguagesNames = addedLanguages.map(
      (language) => language.className
    );
    const result = projectsArray.filter((project) =>
      project.usedLanguages.some((r) => addedLanguagesNames.includes(r))
    );
    setProjectsForSlider(result);
  }, [addedLanguages]);

  const deleteHandler = (language) => {
    const filtered = addedLanguages.filter((item) => item.id !== language.id);

    setAddedLanguages(filtered);
    const { name, className, id } = language;
    setAddAbleLanguages((addAbleLanguages) => [...addAbleLanguages, language]);
  };

  return (
    <>
      <div className="projects-session">
        <div className="title">My Projects</div>
       
        <div className="projects-language">
          {addAbleLanguages.map((language, index) => {
            const { className, name, id } = language;
            return (
              <div key={index}>
                <h4>{language.name}</h4>
                <button onClick={() => addLanguageHandler(language)}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            );
          })}
        </div>
        <div className="added-languages">
          {addedLanguages.map((language, index) => {
            const { className, name, id } = language;
            return (
              <div key={index} className={language.className}>
                <h4>{language.name}</h4>
                <button onClick={() => deleteHandler(language)}>
                  <FontAwesomeIcon icon={faX} />
                </button>
              </div>
            );
          })}
        </div>
        <div ref={scrl} className="project-session">
          {projectsForSlider.map((project, index) => (
            <div>
              <h4>{project.name}</h4>
              <img src={project.img} alt="" />
              <div className="project-btns">
                <button>Go to code</button>
                <button>Go to link</button>
              </div>
            </div>
            //legyen modal az információkról
          ))}
        </div>
        <div className="arrows">
          <motion.button
            className="left-arrow"
            onClick={() => slide(-150)}
            whileTap={{ scale: 0.75 }}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </motion.button>
          <motion.button
            className="right-arrow"
            onClick={() => slide(+150)}
            whileTap={{ scale: 0.75 }}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </motion.button>
        </div>
        <div className="move-on-btn">
          <button>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          <h2>Scroll down to skills</h2>
          <button>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
