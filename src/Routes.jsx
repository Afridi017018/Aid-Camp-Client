import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AvailableCamps from "./pages/AvailableCamps/AvailableCamps";

import CampDetails from "./pages/CampDetails/CampDetails";
import ContactUs from "./pages/ContactUs/ContactUs";
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
            {
                path: "/available-camps",
                element: <AvailableCamps />,
            },
            {
                path: "/contact-us",
                element: <ContactUs />,
            },
           
        ]
    },
]);