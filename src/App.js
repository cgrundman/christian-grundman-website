import { createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/HomePage.js";
import Projects from "./pages/Projects.js";
import Project from "./pages/Project.js";
import AboutMe from "./pages/AboutMe.js";
import ErrorPage from "./pages/ErrorPage.js";
import RootLayout from "./pages/Root.js";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/project', element: <Project /> },
      { path: 'aboutme', element: <AboutMe /> },
    ],
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
