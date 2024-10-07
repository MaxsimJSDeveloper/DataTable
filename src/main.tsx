import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
