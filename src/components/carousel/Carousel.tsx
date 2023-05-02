import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

interface CarouselProps {
  images: string[];
  isLoading: boolean;
}

function Carousel({ images, isLoading }: CarouselProps) {
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

  if (isLoading) return <p>loading...</p>;

  return (
    <section>
      <Slider {...settings}>
        {images.map((image, index) => (
          <img
            key={index}
            className="w-full h-96"
            src={image}
            alt="배너 이미지"
          />
        ))}
      </Slider>
    </section>
  );
}

export default Carousel;
