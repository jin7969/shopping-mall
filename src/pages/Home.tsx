import Carousel from "../components/carousel/Carousel";
import Products from "../components/Products";

const imageData = [
  {
    id: "1",
    image:
      "https://cf.res.s.zigzag.kr/benefit_banner/20230425/02405732-857d-46e8-a13e-ce7562eb35f9.jpg",
  },
  {
    id: "2",
    image:
      "https://cf.res.s.zigzag.kr/benefit_banner/20230425/7968b626-1e52-4a19-819a-737854c490e7.jpg",
  },

  {
    id: "3",
    image:
      "https://cf.res.s.zigzag.kr/benefit_banner/20230426/561d8d69-be5d-4d84-9d49-6a6264d132b9.jpg",
  },
];

function Home() {
  return (
    <main>
      <Carousel images={imageData} />
      <Products title="이번주 할인 상품" />
    </main>
  );
}

export default Home;
