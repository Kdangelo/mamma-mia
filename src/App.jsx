import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./router/AppRoutes";
import { PizzasProvider } from "./context/PizzasContext";

function App() {
  return (
    <div className="App">
      <PizzasProvider>
        <Router>
          <Navbar />
          <AppRoutes />
        </Router>
      </PizzasProvider>
    </div>
  );
}

export default App;
