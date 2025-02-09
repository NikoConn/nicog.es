import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Importamos motion desde framer-motion
import "./App.css";
import "./spinner.css";
import Description from "./components/Description/Description";
import Photo from "./components/Photo/photo";
import Projects from "./components/Projects/Projects";
import Publications from "./components/Publications/Publications";
import Social from "./components/Social/Social";
import Studies from "./components/Studies/Studies";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation()

  function onClickChangeLanguage(event) {
    i18n.changeLanguage(event.target.innerHTML)
  }

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }} // Inicia con opacidad 0 y desplazado hacia abajo
      animate={{ opacity: 1 }} // Se mueve a su posición original con opacidad 1
      transition={{ duration: 1, ease: "easeOut" }} // Animación de 1 segundo
    >
      <div className="language-selector-container">
        <button onClick={onClickChangeLanguage} style={{color: i18n.language == 'en'? 'black': 'gray'}} >en</button>
        <button onClick={onClickChangeLanguage} style={{color: i18n.language == 'es'? 'black': 'gray'}} >es</button>
      </div>
      <div className="horizontal-page-container">
        <div className="left-side">
          <Photo />
          <Description />
          <Social />
        </div>
        <div className="right-side">
          <WorkExperience />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90%",
          maxWidth: "700px",
          gap: "50px",
        }}
      >
        <Studies />
        <Publications />
        <Projects />
      </div>
    </motion.div>
  );
}

export default App;
