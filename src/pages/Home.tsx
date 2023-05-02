import { useQuery } from "@tanstack/react-query";
import { getBannerImages } from "../api/firebase";
import Carousel from "../components/carousel/Carousel";
import Products from "../components/Products";

function Home() {
  const { isLoading, data: images } = useQuery(["banner"], getBannerImages, {
    staleTime: 1000 * 60 * 60,
  });

  if (isLoading) return <p>loading...</p>;

  return (
    <main>
      <Carousel images={images} />
      <Products title="이번주 할인 상품" />
    </main>
  );
}

export default Home;
