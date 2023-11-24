import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom/dist';

const DashBoard = () => {
    return (
        <div className='flex'>

            <div className='w-64 bg-gray-600 min-h-screen text-white'>
                <ul className=' menu p-4 gap-5'>
                    <li>
                        <NavLink to='/dashboard/participant-profile' >Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/registered-camps' >Registered Camps</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/payment-history' >Payment History</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/feedback' >Feedback</NavLink>
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