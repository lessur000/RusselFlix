import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Home/Hero";
import LatestReleases from "../components/sections/Home/LatestReleases";
import SplashScreen from "../components/ui/SplashScreen";

const Home = () => {
  const [showSplash, setShowSplash] = useState(null);

  useEffect(() => {
    const hasShownSplash = sessionStorage.getItem("hasShownSplash");

    if (!hasShownSplash) {
      setShowSplash(true); // Show splash if it's a new session
    } else {
      setShowSplash(false); // Skip splash
    }
  }, []);
  
  const handleSplashFinish = () => {
    setShowSplash(false);
    sessionStorage.setItem("hasShownSplash", "true");
  };

  //  Don't render anything until we know whether to show splash
  if (showSplash === null) return null;

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }
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
