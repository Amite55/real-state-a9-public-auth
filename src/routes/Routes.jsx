import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import HostelDetails from "../Pages/HostelDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/hostelDetails/:id",
                element: <HostelDetails></HostelDetails>,
                loader: () => fetch('../../public/hostelData.json')
            }
        ]
    }
]);

export default router;