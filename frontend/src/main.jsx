import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Css imports
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import { twMerge } from "tailwind-merge";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PrimeReactProvider
    value={{
      unstyled: true,
      pt: {},
      ptOptions: {
        mergeSections: true,
        mergeProps: true,
        classNameMergeFunction: twMerge,
      },
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PrimeReactProvider>
);
