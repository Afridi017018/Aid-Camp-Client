import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import CampDetails from "./pages/CampDetails/CampDetails";
import Home from "./pages/Home/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/camp-details",
                element: <CampDetails />,
            },
           
        ]
    },
]);