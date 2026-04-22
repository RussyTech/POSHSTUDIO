import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";
import ServicesPage from "../pages/ServicesPage";
import ForStartupsPage from "../pages/ForStartUpPage";
import ResourcesPage from "../pages/ResourcesPage";
import ContactPage from "../pages/ContactUsPage";
import TermsPage from "../pages/TermsOfUse";
import PrivacyPage from "../pages/PrivacyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "for-startups", element: <ForStartupsPage /> },
      { path: "resources", element: <ResourcesPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "/terms", element: <TermsPage /> },
      { path: "/privacy", element: <PrivacyPage /> }
    ],
  },
]);