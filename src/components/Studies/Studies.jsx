import { useTranslation } from "react-i18next";
import "./studies.css";

function StudyItem({ imageUrl, school, studyName, link }) {
  return (
    <a href={link} target="_blank" className="study-item">
      <img src={imageUrl} />
      <div className="study-text-container">
        <div className="school">{school}</div>
        <div>{studyName}</div>
      </div>
    </a>
  );
}

function Studies() {
  const { t } = useTranslation();

  return (
    <div className="studies-container">
      <StudyItem
        imageUrl={"/images/upv.jpeg"}
        school={t("upv")}
        studyName={t("miarfid")}
        link={"https://www.upv.es/titulaciones/MUIARFID/index.html"}
      />
      <StudyItem
        imageUrl={"/images/upv.jpeg"}
        school={t("upv")}
        studyName={t("inf")}
        link={"https://www.upv.es/titulaciones/MUIARFID/index.html"}
      />
    </div>
  );
}

export default Studies;
