import { createBrowserRouter } from "react-router-dom";
import App from "./LayOut/App";
import DashBoard from "./LayOut/DashBoard";
import AddCamp from "./pages/AddCamp/AddCamp";
import AddUpcomingCamp from "./pages/AddUpcomingCamp/AddUpcomingCamp";
import AvailableCamps from "./pages/AvailableCamps/AvailableCamps";

import CampDetails from "./pages/CampDetails/CampDetails";
import ContactUs from "./pages/ContactUs/ContactUs";
import FeedBack from "./pages/FeedBack/FeedBack";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ManageCamps from "./pages/ManageCamps/ManageCamps";
import ManageRegisteredCamps from "./pages/ManageRegisteredCamps/ManageRegisteredCamps";
import ManageUpcoming from "./pages/ManageUpcoming/ManageUpcoming";
import OrganizerProfile from "./pages/OrganizerProfile/OrganizerProfile";
import ParticipantProfile from "./pages/ParticipantProfile/ParticipantProfile";
import PaymentHistory from "./pages/PaymentHistory/PaymentHistory";
import Register from "./pages/Register/Register";
import RegisteredCamps from "./pages/RegisteredCamps/RegisteredCamps";







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
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },

    {
        path: "dashboard",
        element: <DashBoard />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "participant-profile",
                element: <ParticipantProfile />,
            },
            {
                path: "registered-camps",
                element: <RegisteredCamps />,
            },
            {
                path: "payment-history",
                element: <PaymentHistory />,
            },
            {
                path: "feedback",
                element: <FeedBack />,
            },
            {
                path: "organizer-profile",
                element: <OrganizerProfile />,
            },
            {
                path: "add-camp",
                element: <AddCamp />,
            },
            {
                path: "manage-camps",
                element: <ManageCamps />,
            },
            {
                path: "manage-registered-camps",
                element: <ManageRegisteredCamps />,
            },
            {
                path: "add-upcoming-camp",
                element: <AddUpcomingCamp />,
            },
            {
                path: "manage-upcoming-camps",
                element: <ManageUpcoming />,
            },

        ]
    },
]);