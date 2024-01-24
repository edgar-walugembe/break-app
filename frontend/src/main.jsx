import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Css imports
import "./index.css";
import "./flags.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css";

//primeReact imports
import { PrimeReactProvider } from "primereact/api";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
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
