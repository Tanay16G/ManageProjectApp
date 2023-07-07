import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const App = () => {
  return (
    <React.Fragment>
      <h1 className="text-gray-600">Namaste React !!</h1>
    </React.Fragment>
  );
};

root.render(<App />);
