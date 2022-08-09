import { transition } from "./data";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import Solution from "./components/Solution";
import Footer from "./components/Footer";
import Career from "./components/Career";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fonts, modes, phones } from "./atom";
function App() {
  const setPhone = useSetRecoilState(phones);
  const mode = useRecoilValue(modes);
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth <= 1110
        ? window.innerWidth <= 800
          ? setPhone("phone")
          : setPhone("tablet")
        : setPhone("desktop");
    });
  });
  useEffect(() => {
    window.innerWidth <= 1110
      ? window.innerWidth <= 800
        ? setPhone("phone")
        : setPhone("tablet")
      : setPhone("desktop");
  }, []);
  const font = useRecoilValue(fonts);
  return (
    <div
      className={`${
        mode ? "bg-[#091b2c] text-white" : "bg-[white] text-black"
      } ${transition} ${font ? "text-lg" : "text-sm"}`}
    >
      {/* <Navigation /> */}
      {/* <Home />
      <Services />
    <Solution /> */ }
      <Career /> 
      <Footer /> 
    </div>
  );
}

export default App;
