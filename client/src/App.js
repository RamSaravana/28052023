import "./App.css";
import InventoryManager from "./InventoryManager";
import { Provider } from "react-redux";
import { store } from "./reduxToolkit/store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <InventoryManager authenticationStatus={true} />
      </Provider>
    </>
  );
}

export default App;
