import { useSelector } from "react-redux";
import { State, transition } from "./store";
import {Home, Navigation} from "./components"
function App() {
  const mode = useSelector<State>(state => state.mode);
  return (

      <div className={`${mode && "bg-black"} ${transition} h-[5000px]`}>
        <Navigation />
        <Home />
      </div>
  );
}

export default App;
