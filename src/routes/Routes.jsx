import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import HostelDetails from "../Pages/HostelDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Service from "../Pages/Service";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/services",
                element: <Service></Service>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/hostelDetails/:id",
                element: <PrivateRoute> <HostelDetails></HostelDetails></PrivateRoute>,
                loader: () => fetch('../../public/hostelData.json')
            }
        ]
    }
]);

export default router;