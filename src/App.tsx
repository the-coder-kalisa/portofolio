import { useSelector } from "react-redux";
import { State, transition } from "./store";
import {Home, Navigation, Services, Solution, Footer} from "./components"
function App() {
  const mode = useSelector<State>(state => state.mode);
  return (

      <div className={`${mode ? "bg-[#091b2c] text-white" : "bg-[white] text-black"} ${transition}`}>
        <Navigation />
        <Home />
        <Services/>
        <Solution />
        <Footer />
      </div>
  );
}

export default App;