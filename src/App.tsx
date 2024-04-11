import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RoutesPaths } from "./types/shared";
import { Home } from "./pages/Home/Home";
import { Job } from "./pages/Job/Job";
import { NotFound } from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: RoutesPaths.HOME,
    element: <Home />,
  },
  {
    path: RoutesPaths.JOB, 
    element: <Job />,
  },
  {
    path: RoutesPaths.NOT_FOUND,
    element: <NotFound />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
