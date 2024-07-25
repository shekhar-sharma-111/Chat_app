import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import ProtectedRouteHome from "./ProtectedRoute/ProtectedRouteHome";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        // element: <Home />,
        element: (<ProtectedRouteHome element={<Home/>} />),
       
      },
      {
        path: "/login",
        element: <ProtectedRoute element={<Login />} />,
      },
      {
        path: "/signup",
        element: <ProtectedRoute element={<Signup />} />,
        // element:<Signup/>,
      },
    ],
  },
]);

export default router;
