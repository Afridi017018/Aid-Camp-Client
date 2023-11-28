import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom/dist';
import useAuth from '../hooks/useAuth';

const DashBoard = () => {

    const { userInfo } = useAuth();

    return (
        <div className='flex flex-col lg:flex-row'>

            <div className='md:w-full lg:w-64 bg-gray-600 lg:min-h-screen text-white font-bold'>
                <div>
                    <ul className=' menu p-4 gap-5'>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>


                        {
                            userInfo?.role === "participant" &&
                            <>
                                <li>
                                    <NavLink to='/dashboard/participant-profile'>Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/registered-camps'>Registered Camps</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/payment-history'>Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/feedback'>Feedback</NavLink>
                                </li>
                            </>
                        }


                        {
                            userInfo?.role === "organizer" &&
                            <>
                                <li>
                                    <NavLink to='/dashboard/organizer-profile'>Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/add-camp'>Add Camp</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manage-camps'>Manage Camps</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manage-registered-camps'>Registered Camps</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/add-upcoming-camp'>Add Upcoming</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manage-upcoming-camps'>Manage Upcoming</NavLink>
                                </li>
                            </>
                        }


                        {
                            userInfo?.role === "professional" &&

                            <>
                                <li>
                                    <NavLink to='/dashboard/professional-profile'>Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/accepted-camps'>Accepted Camps</NavLink>
                                </li>
                            </>
                        }

                        <li>
                            <NavLink to='/dashboard/all-popular-camps'>Popular Camps</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/all-upcoming-camps'>Upcoming Camps</NavLink>
                        </li>



                    </ul>


                </div>

{/* 
                <div>
                    <ul className='menu p-4 gap-5'>
                        <li><Link>Logout</Link></li>
                    </ul>
                </div> */}



            </div>

            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;