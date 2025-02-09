import GitHubIcon from "@mui/icons-material/GitHub";
import "./social.css";
import { Download, Language, LinkedIn, Mail } from "@mui/icons-material";

function DownloadButton() {
  const handleDownload = () => {
    window.print(); // Abre el diálogo de impresión
  };
  return (
    <div className="download-button" onClick={handleDownload}>
      <Download /> CV
    </div>
  );
}

function Social() {
  return (
    <div className="social-container">
      <a
        href="https://github.com/NikoConn"
        className="social-icon"
        target="_blank"
      >
        <GitHubIcon /> NikoConn
      </a>
      <a
        href="https://www.linkedin.com/in/nicolás-garcía-sastre-500a5a1b9"
        className="social-icon"
        target="_blank"
      >
        <LinkedIn /> Nicolas Garcia Sastre
      </a>
      <a href="https://nicog.es" className="social-icon" target="_blank">
        <Language /> nicog.es
      </a>
      <a
        href="mailto:n.garcia.sastre@gmail.com"
        className="social-icon"
        target="_blank"
      >
        <Mail /> n.garcia.sastre@gmail.com
      </a>
      {/* <DownloadButton /> */}
    </div>
  );
}

export default Social;
