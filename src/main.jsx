import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";
import "./styles/home.css";
import "./styles/footer.css";
import "./styles/pages.css";
import "./styles/contact.css";
import "./styles/about.css";
import "./styles/services.css";
import "./styles/news.css";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
