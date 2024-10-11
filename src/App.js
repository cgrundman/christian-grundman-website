import { createBrowserRouter, RouterProvider} from "react-router-dom";

import ComingSoon from "./pages/ComingSoon.js"
import HomePage from "./pages/HomePage.js";
import Projects from "./pages/Projects.js";
import Project from "./pages/Project.js";
import Error from "./pages/Error.js";

const router = createBrowserRouter([
  {
    path: '/',
    // element: <ComingSoon />, // create standard layout <RouteLayout />
    errorElement: <Error />,
    children: [
      { index: true, element: <ComingSoon /> },
      { path: 'homepage', element: <HomePage /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/project', element: <Project /> },
    ],
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
