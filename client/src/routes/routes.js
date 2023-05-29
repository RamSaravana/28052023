import MainDashboard from "../components/dashboard/MainDashboard";
import Login from "../components/login/Login";

const routes = (authenticated) => [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <MainDashboard />,
  },
];

export default routes;
