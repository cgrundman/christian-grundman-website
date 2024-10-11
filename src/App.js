import { createBrowserRouter, RouterProvider} from "react-router-dom";

import ComingSoon from "./pages/ComingSoon.js"
import HomePage from "./pages/HomePage.js";
import Projects from "./pages/Projects.js";

const router = createBrowserRouter([
  {
    path: '/',
    // element: <ComingSoon />, // create standard layout <RouteLayout />
    // TODO add errorElement: <ErrorPage />
    children: [
      { index: true, element: <ComingSoon /> },
      { path: 'homepage', element: <HomePage /> },
      { path: 'projects', element: <Projects /> },
    ],
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
