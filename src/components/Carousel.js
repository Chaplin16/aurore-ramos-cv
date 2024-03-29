//défilement des formats portable pour toutes les réalisation de sites internet et projets
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { v4 as uuidv4 } from "uuid";

export default function Carousel({images}) {

  const sliderSettings = {
    //parametre du slicks
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1800,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },  
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="content ms-3" id="portfolio">
      <Slider {...sliderSettings}>
        {images.map((item) => (
          <a href={item.link} key={uuidv4()} className="text-decoration-none">
            <div className="cardImage pt-5 pb-5">
              <p className="popUp text-center">{item.popUp}</p>
              <img id="webSite" src={item.image} alt={item.alt} />
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
}
