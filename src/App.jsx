import React from "react";

import "./App.scss";
import AllRoutes from "./components/AllRoutes/AllRoutes";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
