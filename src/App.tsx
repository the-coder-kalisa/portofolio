
import Navigation from "./components/Navigation";
import { useSelector } from "react-redux";
import { State } from "./store";

function App() {
  const mode = useSelector<State>(state => state.mode);
  return (

      <div className={`${mode && "bg-black"}`}>
        <Navigation />
      </div>
  );
}

export default App;
