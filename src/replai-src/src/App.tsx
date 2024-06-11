import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/replai",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
