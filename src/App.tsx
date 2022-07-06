import { Provider } from "react-redux";
import Navigation from "./components/Navigation";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Navigation />
      </div>
    </Provider>
  );
}

export default App;
