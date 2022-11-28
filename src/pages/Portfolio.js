import Carousel from "../components/Carousel";
import ImagesWebsites from "../components/ImagesWebsites";
import arrayArrow from "../components/ArrayArrow";
import Arrow from "../components/CardArrow";


export default function Realisations() {

    return (
      <main id="portfolio" className="mt-5 mx-auto">
        <h2 className="title" >Quelques sites vitrines en JS, Bootstrap, Sass</h2>
        <Carousel images={ImagesWebsites.vitrine} />
        <h2 className="title" id="cms">
          Quelques sites avec un CMS, wordPress, Jimdo, Prestashop
        </h2>
        <Carousel images={ImagesWebsites.cms} />
        <h2 className="title" id="personal">Entrainements et projets fictifs</h2>
        <Carousel images={ImagesWebsites.projects} />
        <div className="d-flex justify-content-center ">
            <Arrow arrayArrow={arrayArrow.home}/>
            <Arrow arrayArrow={arrayArrow.trainingDown} />
        </div>
      </main>
    );
  }
  