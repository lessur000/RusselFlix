import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const SplashScreen = ({ onFinish }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(() => {
        onFinish();
      }, 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);
  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500 ${
        hide ? "opacity-0" : "opacity-100"
      }`}
    >
      <TypeAnimation
        sequence={[
          "RusselFlix", //Text to animate
          1000, // wait 1s after typing
        ]}
        speed={20}
        wrapper="h1"
        className="text-5xl font-bold text-red-600"
        repeat={0}
        cursor={false}
      />
    </div>
  );
};

export default SplashScreen;
