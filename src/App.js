import React from "react";

// Import des composants
import { Accueil } from "./pages/Accueil";

// Import du CSS
import "./App.css";

function App() {
  // #region [INTERFACE]
  return (
    <div className="app">
      <Accueil />
    </div>
  );
  // #endregion
}

export default App;
