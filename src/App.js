import { createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/HomePage.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import ProjectPage from "./pages/ProjectPage.js";
import AboutMePage from "./pages/AboutMePage.js";
import ErrorPage from "./pages/ErrorPage.js";
import TrialPage from "./pages/TrialPage.js";
import RootLayout from "./pages/Root.js";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/:projectid', element: <ProjectPage /> },
      { path: 'aboutme', element: <AboutMePage /> },
      { path: 'trial', element: <TrialPage /> },
    ],
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
