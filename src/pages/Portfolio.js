import Carousel from "../components/Carousel";
import Images from "../components/Images";
import arrayArrow from "../components/ArrayArrow";
import Arrow from "../components/CardArrow";

export default function Realisations() {
    return (
      <div id="portfolio" className="mt-5 mx-auto">
        <h2 className="title" >Quelques sites vitrines en JS, Bootstrap, Sass</h2>
        <Carousel images={Images.vitrine} />
        <h2 className="title">
          Quelques sites avec un CMS, wordPress, Jimdo, Prestashop
        </h2>
        <Carousel images={Images.cms} />
        <h2 className="title">Blog et projets fictifs </h2>
        <Carousel images={Images.projects} />
        <div className="d-flex justify-content-center ">
            <Arrow arrayArrow={arrayArrow.home}/>
            <Arrow arrayArrow={arrayArrow.trainingDown} />
        </div>
      </div>
    );
  }
  