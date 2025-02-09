import { useTranslation } from "react-i18next";
import "./WorkExperience.css";

function WorkExperienceItem({ company, logo, website, position, duration, description }) {
  return (
    <div className="work-experience-item">
      <div className="work-experience-text-container">
        {website ? (
          <a href={website} className="company" target="_blank" rel="noopener noreferrer">
            <img src={logo} className="company-icon" alt={`${company} logo`} />
            <div className="company-description">
              <div className="company-text">{company}</div>
              <div className="position-text">{position}</div>
              <div className="duration-text">{duration}</div>
            </div>
          </a>
        ) : (
          <div className="company">
            <img src={logo} className="company-icon" alt={`${company} logo`} />
            <div className="company-description">
              <div className="company-text">{company}</div>
              <div className="position-text">{position}</div>
              <div className="duration-text">{duration}</div>
            </div>
          </div>
        )}
        <div className="role-description">
          {description.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkExperience() {
  const  { t } = useTranslation();
  return (
    <div className="work-experience-container">
      <h1 className="title">{t("work-experience")}</h1>
      <WorkExperienceItem
        company="ITI - Instituto Tecnológico de Informática"
        logo="/images/iti.jpeg"
        website="https://www.iti.es"
        position={t("iti-job-title")}
        duration={t("iti-duration")}
        description={t("iti-job-description")}
      />
      <WorkExperienceItem
        company="Dialapplet"
        logo="/images/dialapplet.jpeg"
        website="https://www.dialapplet.com"
        position={t("dial-job-title")}
        duration={t("dial-duration")}
        description={t("dial-job-description")}
      />
    </div>
  );
}

export default WorkExperience;
