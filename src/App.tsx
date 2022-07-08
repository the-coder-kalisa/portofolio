import { useSelector } from "react-redux";
import { State, transition } from "./store";
import {Home, Navigation, Services, Solution} from "./components"
function App() {
  const mode = useSelector<State>(state => state.mode);
  return (

      <div className={`${mode ? "bg-[#091b2c]" : "bg-[white]"} ${transition}`}>
        <Navigation />
        <Home />
        <Services/>
      </div>
  );
}

export default App;