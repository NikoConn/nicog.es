import { useEffect, useState } from "react";
import "./publications.css";
import { useTranslation } from "react-i18next";

function Publication({ publication }) {
  publication = publication["work-summary"][0];

  return (
    <a
      className="publication-item"
      href={publication.url.value}
      target="_blank"
    >
      <div className="publication-info">
        <span className="publication-journal">
          {publication["journal-title"].value}
        </span>
        <span className="publication-year">
          {publication["publication-date"].year.value}
        </span>
      </div>
      <div>{publication.title.title.value}</div>
    </a>
  );
}

function Publications() {
  const { t } = useTranslation();
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch("https://pub.orcid.org/v3.0/0009-0006-3945-890X/works", {
      headers: { Accept: "application/json" },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.group) {
          setPublications(data.group);
        }
      });
  }, []);

  return (
    <div>
      <h1 className="title">{t("publications")}</h1>
      <div className="publications-container">
        {publications.map((publication, index) => (
          <Publication publication={publication} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Publications;
