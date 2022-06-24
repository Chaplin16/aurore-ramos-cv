export default function Footer() {
  return (
    <footer>
      <div className="d-flex  justify-content-around ">
        <a href="https://aurorecreationweb.fr">
          <img
            className="phone"
            src="./assets/telephone-aurore-creation-web.png"
            alt="portable d aurore creation web"
          />
        </a>

        <ul>
          <li>
            Les avis de mes clients sur Google à{" "}
            <span className="color fw-bold">Aurore Création Web</span>
          </li>
          <li>
            <img class="pe-1"  src="./assets/github-aurore-ramos.png" alt="telephone pour contacter aurore ramos" />
            <a href="https://github.com/Chaplin16?tab=repositories">
              Github repositories
            </a>
          </li>
          <li>
          <img class="ps-1 pe-2" src="./assets/linkedin-aurore-ramos.png" alt="linkedin pour le profil d'aurore ramos" />
            <a href="https://www.linkedin.com/in/aurore-creation-web/">
              Linkedin
            </a>
          </li>
          <li>
          <img class="p-2 ps-1" src="./assets/aurore-creation-web-logo.png" alt="logo d'aurore création web" />
            <a href="https://aurorecreationweb.fr">
              Aurore Création Web
            </a>
          </li>
          <li className="fw-bold">
          <img class="p-2 ps-1" src="./assets/telephone.png" alt="logo d'aurore création web" />
            06.77.80.98.69</li>
          <li className="fw-bold">198 rue des coquilles 30220 AIGUES-MORTES</li>
        </ul>

        <div className="flag">
          <img
            src="./assets/flag-english.png"
            alt="Je parle l'anglais technique"
          />
          <img src="./assets/flag-french.png" alt="langue maternelle" />
        </div>
      </div>
    </footer>
  );
}
