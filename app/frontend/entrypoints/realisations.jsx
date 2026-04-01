import React from "react";
import { createRoot } from "react-dom/client";
import NosRealisationsAll from "../components/atelier/nos_réalisations/Nos_realisation_all.jsx";
import "../styles/application.css";
import "../styles/realisation.css";
import '../styles/responsive.css'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("realisations-react-root");
  if (root) {
    createRoot(root).render(<NosRealisationsAll />);
  }
});
