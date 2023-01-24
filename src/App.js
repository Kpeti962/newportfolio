import React, { useState } from "react";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";
import "./style/App.scss";
import { v4 as uuidv4 } from "uuid";
import musicPlayer from "./img/musicPlayer.png";
import pizzaComparison from "./img/pizzaComparison.png";
import petipizza from "./img/petipizza.png";
import todo from "./img/todo.png";
import weather from "./img/weather.png";
import restaurant from "./img/restaurant.png";
import CV from "./components/CV";

function App() {
  const [showImg, setShowImg] = useState(true);
  const [showSkills, setShowSkills] = useState(false);

  const [addAbleLanguages, setAddAbleLanguages] = useState([
    {
      className: "html",
      name: "HTML",
      id: uuidv4(),
    },
    {
      className: "css",
      name: "CSS",
      id: uuidv4(),
    },
    {
      className: "javascript",
      name: "JavaScript",
      id: uuidv4(),
    },
    {
      className: "scss",
      name: "SCSS",
      id: uuidv4(),
    },
    {
      className: "tailwind",
      name: "Tailwind CSS",
      id: uuidv4(),
    },
    {
      className: "react",
      name: "React",
      id: uuidv4(),
    },
    {
      className: "firebase",
      name: "Firebase",
      id: uuidv4(),
    },
  ]);
  const [addedLanguages, setAddedLanguages] = useState([]);
  const [projects, setProjects] = useState([
    {
      name: "Pizza Comparison",
      usedLanguages: ["html", "css", "scss", "javascript", "react"],
      show: true,
      projectLink: "https://kpeti962.github.io/reactPizzaComparison/",
      githubLink: "https://github.com/Kpeti962/reactPizzaComparison",
      img: pizzaComparison,
    },
    {
      name: "Meteorological App",
      usedLanguages: ["html", "css", "scss", "javascript", "react"],
      show: true,
      projectLink: "https://kpeti962.github.io/meteorologicalFunAppForApis/",
      githubLink: "https://github.com/Kpeti962/meteorologicalFunAppForApis",
      img: weather,
    },
    {
      name: "Music Player",
      usedLanguages: ["html", "css", "scss", "javascript", "react"],
      show: true,
      projectLink: "https://kpeti962.github.io/musicPlayerReact/",
      githubLink: "https://github.com/Kpeti962/musicPlayerReact",
      img: musicPlayer,
    },
    {
      name: "Todo List",
      usedLanguages: ["html", "css", "scss", "javascript", "react"],
      show: true,
      projectLink: "https://kpeti962.github.io/localStoreToDo/",
      githubLink: "https://github.com/Kpeti962/localStoreToDo",
      img: todo,
    },
    {
      name: "Pizzeria App",
      usedLanguages: ["html", "css", "scss", "javascript", "react"],
      show: true,
      projectLink: "https://kpeti962.github.io/peti_pizza",
      githubLink: "https://github.com/Kpeti962/peti_pizza",
      img: petipizza,
    },
    {
      name: "Reataurant App",
      usedLanguages: [
        "html",
        "css",
        "tailwind",
        "javascript",
        "react",
        "firebase",
      ],
      show: true,
      projectLink: "https://kpeti962.github.io/restaurantWithFirebase/",
      githubLink: "https://github.com/Kpeti962/restaurantWithFirebase",
      img: restaurant,
    },
  ]);

  return (
    <>
      <Welcome showImg={showImg} setShowImg={setShowImg} />
      {showImg && (
        <div className="App">
          <Projects
            addAbleLanguages={addAbleLanguages}
            setAddAbleLanguages={setAddAbleLanguages}
            addedLanguages={addedLanguages}
            setAddedLanguages={setAddedLanguages}
            projects={projects}
            setProjects={setProjects}
            showSkills={showSkills}
            setShowSkills={setShowSkills}
          />
          <CV />
          <Skills />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
