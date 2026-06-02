import { useTranslation } from "react-i18next";
import "./description.css";

function Description() {
  const { t } = useTranslation();

  return (
    <div className="description-container">
      <div className="name">Nicolas Garcia Sastre</div>
      <div className="title-role">{t("title-description")}</div>
      <p className="description-body">{t("description")}</p>
    </div>
  );
}

export default Description;
