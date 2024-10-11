import { createBrowserRouter, RouterProvider} from "react-router-dom";

import ComingSoon from "./pages/ComingSoon.js"

const router = createBrowserRouter([
  {
    path: '/',
    element: <ComingSoon />, // create standard layout <RouteLayout />
    // TODO add errorElement: <ErrorPage />
    // TODO Add: children: [
    //   { index: true, element: <HomePage /> },
    //   { path: 'products', element: <ProductsPage /> },
    //   { path: 'products/:productId', element: <ProductDetailPage />},
    // ],
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
