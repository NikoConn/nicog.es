import { useTranslation } from "react-i18next";
import "./projects.css";

function Project({ imageUrl, projectName, description, link }) {
  return (
    <a href={link} target="_blank" className="project-item">
        <img src={imageUrl} />
        <div className="project-name">{projectName}</div>
      <div>{description}</div>
    </a>
  );
}

function Projects() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="title">{t("projects")}</h1>
      <div className="projects-container">
        <Project
          imageUrl={"/images/collimator.png"}
          projectName={"Collimator"}
          description={t("collimator-description")}
          link={"https://github.com/NikoConn/collimator"}
        />
      </div>
    </div>
  );
}

export default Projects;
