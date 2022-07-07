import { useSelector } from "react-redux";
import { State, transition } from "./store";
import {Home, Navigation} from "./components"
import Services from "./components/Services";
function App() {
  const mode = useSelector<State>(state => state.mode);
  return (

      <div className={`${mode ? "bg-[#091b2c]" : "bg-[#ffffff]"} ${transition}`}>
        <Navigation />
        <Home />
        <Services/>
      </div>
  );
}

export default App;