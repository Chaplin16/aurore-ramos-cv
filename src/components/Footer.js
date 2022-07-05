export default function Footer() {
  return (
    <footer className="mt-5 position-relative">
      <div className="d-flex  justify-content-center color-text">
        <a href="https://aurorecreationweb.fr">
          <img
            className="phone h-auto me-3"
            src="./assets/telephone-aurore-creation-web.png"
            alt="portable d aurore creation web"
          />
        </a>
        <ul className="list-unstyled ms-3 contact">
          <li className="fw-bold">
            Les avis de mes clients sur Google à{" "}
            <span className="color fw-bold color-logo">Aurore Création Web</span>
          </li>
          <li>
            <img
              class="pe-2"
              src="./assets/github-aurore-ramos.png"
              alt="telephone pour contacter aurore ramos"
            />
            <a href="https://github.com/Chaplin16?tab=repositories"  className="fw-bold color-text text-decoration-none">
              Github repositories
            </a>
          </li>
          <li>
            <img
              class="ps-1 pe-3"
              src="./assets/linkedin-aurore-ramos.png"
              alt="linkedin pour le profil d'aurore ramos"
            />
            <a  href="https://www.linkedin.com/in/aurore-creation-web/"  className="fw-bold color-text text-decoration-none">
              Linkedin
            </a>
          </li>
          <li>
            <img
              class="p-2 ps-1"
              src="./assets/aurore-creation-web-logo.png"
              alt="logo d'aurore création web"
            />
            <a href="https://aurorecreationweb.fr" className="fw-bold color-text text-decoration-none">Aurore Création Web</a>
          </li>
          <li className="fw-bold">
            <img
              class="p-2 ps-3"
              src="./assets/telephone.png"
              alt="logo d'aurore création web"
            />
            06.77.80.98.69
          </li>
          <li>
          <div className="flag d-flex">
            <img
              src="./assets/flag-english.png"
              alt="anglais technique lu et ecrit"
              class="me-4" 
            />
            <img src="./assets/flag-french.png" alt="langue maternelle" />
          </div>
          </li>
        </ul>
      </div>
      <img className="imgAurore position-absolute rounded shadow d-none" src="./assets/aurore-creation-web.jpeg" alt="aurore au travail"/>
    </footer>
  );
}
