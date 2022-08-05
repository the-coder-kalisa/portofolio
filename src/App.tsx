import { useDispatch, useSelector } from "react-redux";
import { actions, State, transition } from "./store";
import { Home, Navigation, Services, Solution, Footer } from "./components";
import { useEffect } from "react";
function App() {
  const mode = useSelector<State>((state) => state.mode);
  const dispacth = useDispatch();
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth <= 1110
        ? ( window.innerWidth <= 800 ? dispacth(actions.changePhone("phone")) :  dispacth(actions.changePhone("tablet")))
        : dispacth(actions.changePhone("destkop"))
    });
  });
  useEffect(() => {
    window.innerWidth <= 1110
    ? ( window.innerWidth <= 800 ? dispacth(actions.changePhone("phone")) :  dispacth(actions.changePhone("tablet")))
      : dispacth(actions.changePhone(false));
  }, []);
  return (
    <div
      className={`${
        mode ? "bg-[#091b2c] text-white" : "bg-[white] text-black"
      } ${transition}`}
    >
      <Navigation />
      <Home />
      <Services />
      <Solution />
      <Footer />
    </div>
  );
}

export default App;
