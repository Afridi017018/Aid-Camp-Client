import { createBrowserRouter } from "react-router-dom";
import App from "./LayOut/App";
import DashBoard from "./LayOut/DashBoard";
import AcceptedCamps from "./pages/AcceptedCamps/AcceptedCamps";
import AddCamp from "./pages/AddCamp/AddCamp";
import AddUpcomingCamp from "./pages/AddUpcomingCamp/AddUpcomingCamp";
import AllPopularCamps from "./pages/AllPopularCamps/AllPopularCamps";
import AllUpcomingCamps from "./pages/AllUpcomingCamps/AllUpcomingCamps";
import AvailableCamps from "./pages/AvailableCamps/AvailableCamps";
import CampDetails from "./pages/CampDetails/CampDetails";
import ContactUs from "./pages/ContactUs/ContactUs";
import FeedBack from "./pages/FeedBack/FeedBack";
import Home from "./pages/Home/Home";
import InterestedParticipants from "./pages/InterestedParticipants/InterestedParticipants";
import InterestedProfessionals from "./pages/InterestedProfessionals/InterestedProfessionals";
import Login from "./pages/Login/Login";
import ManageCamps from "./pages/ManageCamps/ManageCamps";
import ManageRegisteredCamps from "./pages/ManageRegisteredCamps/ManageRegisteredCamps";
import ManageUpcoming from "./pages/ManageUpcoming/ManageUpcoming";
import Payment from "./pages/Payment/Payment";
import PaymentHistory from "./pages/PaymentHistory/PaymentHistory";
import Register from "./pages/Register/Register";
import RegisteredCamps from "./pages/RegisteredCamps/RegisteredCamps";
import UserProfile from "./pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";







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
                path: "/camp-details/:campId",
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
        element: <PrivateRoute><DashBoard /></PrivateRoute>,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "user-profile",
                element: <PrivateRoute><UserProfile /></PrivateRoute>,
            },
            {
                path: "registered-camps",
                element: <Private><RegisteredCamps /></Private>,
            },
            {
                path: "payment-history",
                element: <PrivateRoute><PaymentHistory /></PrivateRoute>,
            },
            {
                path: "feedback",
                element: <PrivateRoute><FeedBack /></PrivateRoute>,
            },

            {
                path: "add-camp",
                element: <PrivateRoute><AddCamp /></PrivateRoute>,
            },
            {
                path: "manage-camps",
                element: <PrivateRoute><ManageCamps /></PrivateRoute>,
            },
            {
                path: "manage-registered-camps",
                element: <PrivateRoute><ManageRegisteredCamps /></PrivateRoute>,
            },
            {
                path: "add-upcoming-camp",
                element: <PrivateRoute><AddUpcomingCamp /></PrivateRoute>,
            },
            {
                path: "manage-upcoming-camps",
                element: <PrivateRoute><ManageUpcoming /></PrivateRoute>,
            },
            {
                path: "payment/:id",
                element: <PrivateRoute><Payment /></PrivateRoute>,
            },
           
            {
                path: "interested-participants/:id",
                element: <PrivateRoute><InterestedParticipants /></PrivateRoute>,
            },
            {
                path: "interested-professionals/:id",
                element: <PrivateRoute><InterestedProfessionals /></PrivateRoute>,
            },
            {
                path: "accepted-camps",
                element: <PrivateRoute><AcceptedCamps /></PrivateRoute>,
            },
            {
                path: "all-popular-camps",
                element: <PrivateRoute><AllPopularCamps /></PrivateRoute>,
            },
            {
                path: "all-upcoming-camps",
                element: <PrivateRoute><AllUpcomingCamps /></PrivateRoute>,
            },


        ]
    },
]);