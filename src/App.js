import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import des composants
import { Accueil } from "./pages/Accueil";
import { Detail } from "./pages/Detail";

// Import du CSS
import "./App.css";

function App() {
  // #region [INTERFACE]
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route element={<Accueil />} exact path={"/"} />
          <Route element={<Detail />} path={"/detail"} />
        </Routes>
      </div>
    </Router>
  );
  // #endregion
}

export default App;
