import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import EmployerDashboard from './pages/EmployerDashboard.jsx';

const router = createBrowserRouter([
  {path: '/', element: <EmployerDashboard />},

]
);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}