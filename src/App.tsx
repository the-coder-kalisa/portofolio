import { useSelector } from "react-redux";
import { State, transition } from "./store";
import {Home, Navigation} from "./components"
function App() {
  const mode = useSelector<State>(state => state.mode);
  return (

      <div className={`${mode ? "bg-[#0b233b]" : "bg-[#ffffff]"} ${transition}`}>
        <Navigation />
        <Home />
      </div>
  );
}

export default App;
