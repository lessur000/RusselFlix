import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Home/Hero";
import LatestReleases from "../components/sections/Home/LatestReleases";

const Home = () => {
  return (
    <>
      <div className="">
      <Header />
      <Hero/>
      <LatestReleases />
      <Footer />
      </div>
    </>
  );
};

export default Home;
