import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Router } from "@/main/routes/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
