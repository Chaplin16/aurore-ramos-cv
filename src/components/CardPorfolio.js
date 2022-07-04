// 3 cards avec logo sous la vidéo pour se rendre sur la page portfolio   css sur le header.scss

export default function CardPortfolio(props) {
  return (
    <div>
      {props.portfolio.map((item, index) => (
        <div key={index} className="card">
          <div className="card-body align-items-center text-center">
            <img className="icon-logo" src="./assets/freelance-en-creation-site-internet.png" alt="logo d'Aurore Création Web" />
            <a href={item.link} className="text-center">
              <h3 className="card-title flex-wrap fw-bold">{item.title}</h3>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
