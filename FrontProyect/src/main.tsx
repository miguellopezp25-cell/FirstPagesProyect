import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProfessionalApp } from "./useContex/ProfessionalApp";
import "./style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProfessionalApp />
  </StrictMode>
);
