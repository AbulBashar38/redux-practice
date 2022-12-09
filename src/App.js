import store from "./rudex/store";
import { Provider } from "react-redux";
import "./App.css";
import Count from "./component/Count";

function App() {
  return (
    <Provider store={store}>
      <Count></Count>
    </Provider>
  );
}

export default App;
