import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// CONTEXT
// import { RefContext } from "../context/refContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RefContext.Provider
      value={{
        Home: useRef(null),
        Projects: useRef(null),
        About: useRef(null),
        Contact: useRef(null),
      }}
    > */}
    <App />
    {/* </RefContext.Provider> */}
  </StrictMode>
);
