import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const Projects = ({
  addedLanguages,
  setAddedLanguages,
  addAbleLanguages,
  setAddAbleLanguages,
  projects,
  setProjects,
}) => {
  const addLanguageHandler = (language) => {
    const filteredLanguages = addAbleLanguages.filter(
      (item) => item.id !== language.id
    );
    setAddAbleLanguages(filteredLanguages);
    setAddedLanguages([...addedLanguages, language.name]);
  };
  const deleteHandler = () => {
    
  }

  return (
    <div className="projects-session">
      <div className="title">My Projects</div>
      <div className="projects-language">
        {addAbleLanguages.map((language, index) => (
          <div key={index} className={language.className}>
            <h4>{language.name}</h4>
            <button onClick={() => addLanguageHandler(language)}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        ))}
      </div>
      <div className="added-languages">
        {addedLanguages.map((language, index) => (
          <div key={index} className={language.className}>
            <h4>{language}</h4>
            <button onClick={() => deleteHandler(language)}>
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        ))}
      </div>
      <div className="project-session">
        {projects.map((project, index) => (
          <img src={project.img} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Projects;
