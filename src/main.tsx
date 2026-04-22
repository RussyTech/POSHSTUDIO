import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";


// Tailwind entry CSS (make sure this file has @tailwind directives)
import "./app/layout/index.css";
import { router } from "./app/routes/Routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
