import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Registrar from "./Components/Registrar/Registrar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/Registrar" Component={Registrar} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
