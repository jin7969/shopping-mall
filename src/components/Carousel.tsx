import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageProps {
  id: string;
  image: string;
}

function Carousel({ images }: { images: ImageProps[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <img
          key={image.id}
          className="h-72"
          src={image.image}
          alt="배너 이미지"
        />
      ))}
    </Slider>
  );
}

export default Carousel;
