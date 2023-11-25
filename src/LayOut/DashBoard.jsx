import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom/dist';

const DashBoard = () => {
    return (
        <div className='flex flex-col lg:flex-row'>

            <div className='md:w-full lg:w-64 bg-gray-600 min-h-screen text-white font-bold'>
                <ul className=' menu p-4 gap-5'>
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

                    <li>
                        <NavLink to='/dashboard/professional-profile'>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/accepted-camps'>Accepted Camps</NavLink>
                    </li>
                    


                </ul>
            </div>

            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;