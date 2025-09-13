import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import LandingPage from "./pages/LandingPage";
import TalentsPage from "./pages/TalentsPage";


const router = createBrowserRouter([
  {path: '/', element: <LandingPage />},
    {path: '/talents', element: <TalentsPage />}
]
);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}