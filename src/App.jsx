import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { useTranslation } from "react-i18next";
import Publications from "./components/Publications/Publications";

/* Inline SVG icons matching cv-page.jsx */
function ContactIcon({ name }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", "aria-hidden": true };
  if (name === "git")
    return <svg fill="currentColor" {...common}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>;
  if (name === "in")
    return <svg fill="currentColor" {...common}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>;
  if (name === "url")
    return <svg fill="none" stroke="currentColor" strokeWidth={1.7} {...common}><circle cx={12} cy={12} r={9} /><path d="M3 12h18" /><path d="M12 3c2.7 2.6 2.7 15.4 0 18M12 3c-2.7 2.6-2.7 15.4 0 18" /></svg>;
  if (name === "@")
    return <svg fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinejoin="round" {...common}><rect x={3} y={5} width={18} height={14} rx={2} /><path d="M3.5 7.5l8.5 6 8.5-6" /></svg>;
  return null;
}

function SectionHead({ title }) {
  return (
    <div className="cvp-sec-head">
      <h2 className="cvp-sec-title">{title}</h2>
      <span className="cvp-sec-rule" />
    </div>
  );
}

const THEME = {
  "--ink": "#1a1813",
  "--muted": "#8a857c",
  "--accent": "#5f5b53",
  "--accent-wash": "rgba(26,24,19,0.06)",
  "--rule": "rgba(26,24,19,0.15)",
  "--paper-solid": "#fdfcf9",
  "--fh": "'Mukta', sans-serif",
  "--fb": "'Mukta', sans-serif",
  "--fm": "'Mukta', sans-serif",
};

const CONTACTS = {
  en: [
    { tag: "git", label: "NikoConn", href: "https://github.com/NikoConn" },
    { tag: "in",  label: "Nicolas Garcia Sastre", href: "https://www.linkedin.com/in/nicolas-garcia-sastre/" },
    { tag: "url", label: "nicog.es", href: "https://nicog.es" },
    { tag: "@",   label: "n.garcia.sastre@gmail.com", href: "mailto:n.garcia.sastre@gmail.com" },
  ],
  es: [
    { tag: "git", label: "NikoConn", href: "https://github.com/NikoConn" },
    { tag: "in",  label: "Nicolas Garcia Sastre", href: "https://www.linkedin.com/in/nicolas-garcia-sastre/" },
    { tag: "url", label: "nicog.es", href: "https://nicog.es" },
    { tag: "@",   label: "n.garcia.sastre@gmail.com", href: "mailto:n.garcia.sastre@gmail.com" },
  ],
};

function App() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  const contacts = CONTACTS[lang] || CONTACTS.en;

  return (
    <div className="desk">
      <motion.div
        className="sheet"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="cvp-root" style={THEME}>
          <div className="cvp-body">

            {/* HEADER */}
            <header className="cvp-head">
              <div className="cvp-headleft">
                <h1 className="cvp-name">Nicolas Garcia Sastre</h1>
                <div className="cvp-role">{t("title-description")}</div>
                <div className="cvp-loc">Valencia, Spain</div>
              </div>
              <div className="cvp-lang">
                {["en", "es"].map((l) => (
                  <button
                    key={l}
                    className={lang === l ? "on" : ""}
                    onClick={() => i18n.changeLanguage(l)}
                  >{l.toUpperCase()}</button>
                ))}
              </div>
            </header>

            <hr className="cvp-hr" />

            {/* COLUMNS */}
            <div className="cvp-cols">

              {/* LEFT */}
              <div className="cvp-left">
                <div className="cvp-photo-frame">
                  <img className="cvp-photo" src="/images/personal.jpg" alt="Nicolas Garcia Sastre" />
                </div>

                <div>
                  <div className="cvp-label">{lang === "es" ? "Perfil" : "Profile"}</div>
                  <p className="cvp-bio">{t("description")}</p>
                </div>

                <div>
                  <div className="cvp-label">{lang === "es" ? "Contacto" : "Contact"}</div>
                  <div className="cvp-contacts">
                    {contacts.map((c, i) => (
                      <a key={i} className="cvp-contact" href={c.href} target="_blank" rel="noopener noreferrer">
                        <span className="cvp-ico"><ContactIcon name={c.tag} /></span>
                        <span className="cvp-cval">{c.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="cvp-right">

                {/* Work Experience */}
                <section>
                  <SectionHead title={t("work-experience")} />
                  <WorkExperienceSection t={t} />
                </section>

                {/* Education */}
                <section>
                  <SectionHead title={t("studies")} />
                  <EducationSection t={t} />
                </section>

                {/* Publications */}
                <section>
                  <SectionHead title={t("publications")} />
                  <Publications />
                </section>

                {/* Projects */}
                <section>
                  <SectionHead title={t("projects")} />
                  <ProjectsSection t={t} />
                </section>

              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}

function WorkExperienceSection({ t }) {
  const jobs = [
    {
      org: "ITI — Instituto Tecnológico de Informática",
      logo: "/images/iti.jpeg",
      roleKey: "iti-job-title",
      periodKey: "iti-duration",
      descKey: "iti-job-description",
      href: "https://www.iti.es",
    },
    {
      org: "Dialapplet",
      logo: "/images/dialapplet.jpeg",
      roleKey: "dial-job-title",
      periodKey: "dial-duration",
      descKey: "dial-job-description",
      href: "https://www.dialapplet.com",
    },
  ];
  return jobs.map((job, i) => {
    const bullets = t(job.descKey).split("\n").map(l => l.trim().replace(/^[-•]\s*/, "").trim()).filter(Boolean);
    return (
      <div className="cvp-item" key={i}>
        <div className="cvp-item-top">
          <h3 className="cvp-org">
            <a href={job.href} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              <img src={job.logo} alt={job.org} className="cvp-item-logo" />
              {job.org}
            </a>
          </h3>
          <span className="cvp-period">{t(job.periodKey)}</span>
        </div>
        <div className="cvp-itemrole">{t(job.roleKey)}</div>
        <ul className="cvp-bullets">
          {bullets.map((b, j) => <li key={j}>{b}</li>)}
        </ul>
      </div>
    );
  });
}

function EducationSection({ t }) {
  const items = [
    { logo: "/images/upv.jpeg", orgKey: "upv", degreeKey: "miarfid", href: "https://www.upv.es/titulaciones/MUIARFID/index.html" },
    { logo: "/images/upv.jpeg", orgKey: "upv", degreeKey: "inf", href: "https://www.upv.es/titulaciones/GII/index.html" },
  ];
  return items.map((item, i) => (
    <div className="cvp-item" key={i}>
      <div className="cvp-item-top">
        <h3 className="cvp-org">
          <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <img src={item.logo} alt={t(item.orgKey)} className="cvp-item-logo" />
            {t(item.orgKey)}
          </a>
        </h3>
      </div>
      <p className="cvp-edu">{t(item.degreeKey)}</p>
    </div>
  ));
}

function ProjectsSection({ t }) {
  const projects = [
    { img: "/images/puroticket.png", name: "Puro Ticket", descKey: "puroticket-description", href: "https://puroticket.es", contain: true },
    { img: "/images/aiscopia.png", name: "Aiscopia", descKey: "aiscopia-description", href: "https://aiscopia.com", contain: true },
    { img: "/images/collimator.png", name: "Collimator", descKey: "collimator-description", href: "https://github.com/NikoConn/collimator" },
    { img: "/images/spotify-stl-generator.png", name: "Spotify 3D generator", descKey: "spotify-stl-generator-description", href: "https://github.com/NikoConn/spotify-stl-generator" },
    { img: "/images/tree-game.png", name: "Tree Game", descKey: "tree-game-description", href: "https://nikoconn.github.io/tree-game" },
  ];
  return projects.map((p, i) => (
    <a key={i} href={p.href} target="_blank" rel="noopener noreferrer" className="cvp-project-item">
      <img src={p.img} alt={p.name} className="cvp-project-img" style={p.contain ? { objectFit: "contain", background: "#fff", padding: 2 } : {}} />
      <div>
        <div className="cvp-project-name">{p.name}</div>
        <div className="cvp-project-desc">{t(p.descKey)}</div>
      </div>
    </a>
  ));
}

export default App;
