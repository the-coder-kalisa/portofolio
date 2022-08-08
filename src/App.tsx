import { useDispatch, useSelector } from "react-redux";
import { actions, State, transition } from "./store";
import { Home, Navigation, Services, Solution, Footer } from "./components";
import { useEffect, useState } from "react";
import { Router } from "react-router-dom";
import Career from "./components/Career";
function App() {
  const { mode, phone } = useSelector<State, State>(
    (state) => state
  );
  const dispacth = useDispatch();
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth <= 1110
        ? window.innerWidth <= 800
          ? dispacth(actions.changePhone("phone"))
          : dispacth(actions.changePhone("tablet"))
        : dispacth(actions.changePhone("destkop"));
    });
  });
  useEffect(() => {
    window.innerWidth <= 1110
      ? window.innerWidth <= 800
        ? dispacth(actions.changePhone("phone"))
        : dispacth(actions.changePhone("tablet"))
      : dispacth(actions.changePhone(false));
  }, []);
  const [font, setFont] = useState<boolean>(true);
  useEffect(
    () => () => {
      if (phone === "phone" || phone === "tablet") {
        setFont(false);
      } else {
        setFont(true);
      }
    },
    [phone]
  );
  return (
    <div
      className={`${
        mode ? "bg-[#091b2c] text-white" : "bg-[white] text-black"
      } ${transition} ${font ? "text-lg" : "text-sm"}`}
    >
      <Navigation />
      <Home />
      <Services />
      <Solution />
      <Career />
      <Footer />
    </div>
  );
}

export default App;
