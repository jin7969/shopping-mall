import Carousel from "../components/Carousel";

const imageData = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80",
  },

  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1537274942065-eda9d00a6293?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
];

function Home() {
  return (
    <main>
      <section>
        <Carousel images={imageData} />
      </section>
    </main>
  );
}

export default Home;
