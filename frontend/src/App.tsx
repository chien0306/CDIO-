import React from "react";
import "./App.css";

import AppRouter from "./router/AppRouter";

function App(): JSX.Element {
  return (
    <div className="App-body">
      <AppRouter />
    </div>
  );
}

export default App;
