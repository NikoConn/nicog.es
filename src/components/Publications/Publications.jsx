import { useEffect, useState } from "react";

function Publication({ publication }) {
  const work = publication["work-summary"][0];
  return (
    <a className="cvp-pub-item" href={work.url.value} target="_blank" rel="noopener noreferrer">
      <div className="cvp-pub-info">
        <span className="cvp-pub-journal">{work["journal-title"].value}</span>
        <span className="cvp-pub-year">{work["publication-date"].year.value}</span>
      </div>
      <div className="cvp-pub-title">{work.title.title.value}</div>
    </a>
  );
}

function Publications() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch("https://pub.orcid.org/v3.0/0009-0006-3945-890X/works", {
      headers: { Accept: "application/json" },
    })
      .then((r) => r.json())
      .then((data) => { if (data.group) setPublications(data.group); });
  }, []);

  return publications.map((pub, i) => <Publication publication={pub} key={i} />);
}

export default Publications;
