import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import OpenPostion from "./pages/OpenPositions.jsx";

const router = createBrowserRouter([
  {path: '/open-positions', element: <OpenPostion />},

]
);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}