import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

interface ImageProps {
  id: string;
  image: string;
}

function Carousel({ images }: { images: ImageProps[] }) {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Slider {...settings}>
        {images.map((image) => (
          <img
            key={image.id}
            className="w-full h-96"
            src={image.image}
            alt="배너 이미지"
          />
        ))}
      </Slider>
    </section>
  );
}

export default Carousel;
