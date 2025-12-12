import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProfessionalApp } from "./useContex/ProfessionalApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProfessionalApp />
  </StrictMode>
);
