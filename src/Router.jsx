import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Models from "./components/Models";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "models",
          element: <Models />,
        },
        {
          path: "about",
          element: null,
        },
        {
          path: "contact",
          element: null,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
