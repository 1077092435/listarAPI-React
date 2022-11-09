import { Provider } from "../context/Provider";
import { Contenido } from "./Contenido";

function App() {
  return (
    <div className="App container-md px-3 p-md-0">
      <Provider>
        <Contenido />
      </Provider>
    </div>
  );
}

export default App;
