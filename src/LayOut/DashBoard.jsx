import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom/dist';
import useAuth from '../hooks/useAuth';
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegRegistered } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { CiMedicalCross } from "react-icons/ci";
import { MdOutlineUpcoming } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineManageHistory } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const DashBoard = () => {

    const { userInfo, logOut } = useAuth();
    const navigate = useNavigate();

    return (
        <div className='flex flex-col lg:flex-row'>

            <div className='md:w-full lg:w-64 bg-gray-600 lg:min-h-screen text-white font-bold'>
                <div>

                    <div className='mx-auto w-40 h-16 lg:w-full lg:px-10 lg:h-16 lg:mb-3 cursor-pointer'><img onClick={() => navigate('/')} src="/aid-camp-logo.png" alt="" /></div>

                    <ul className=' menu p-4 gap-5'>
                        <li>
                            <NavLink to='/'><FaHome /> Home</NavLink>
                        </li>

                        <li>
                            <NavLink to='/dashboard/user-profile'><CgProfile /> Profile</NavLink>
                        </li>

                        {
                            userInfo?.role === "participant" &&
                            <>

                                <li>
                                    <NavLink to='/dashboard/registered-camps'><FaRegRegistered />Registered Camps</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/payment-history'><MdHistory /> Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/feedback'><MdOutlineFeedback /> Feedback</NavLink>
                                </li>
                            </>
                        }


                        {
                            userInfo?.role === "organizer" &&
                            <>

                                <li>
                                    <NavLink to='/dashboard/add-camp'><IoMdAddCircle /> Add Camp</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manage-camps'><MdOutlineManageHistory /> Manage Camps</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manage-registered-camps'><FaRegRegistered /> Registered Camps</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/add-upcoming-camp'><MdOutlineUpcoming /> Add Upcoming</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manage-upcoming-camps'><MdOutlineManageHistory /> Manage Upcoming</NavLink>
                                </li>
                            </>
                        }


                        {
                            userInfo?.role === "professional" &&

                            <>

                                <li>
                                    <NavLink to='/dashboard/accepted-camps'><IoCheckmarkDoneCircle /> Accepted Camps</NavLink>
                                </li>
                            </>
                        }

                        <li>
                            <NavLink to='/dashboard/all-popular-camps'><CiMedicalCross /> Popular Camps</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/all-upcoming-camps'><MdOutlineUpcoming /> Upcoming Camps</NavLink>
                        </li>



                    </ul>


                </div>


                <div>
                    <button onClick={() => logOut()} className='mx-8 bg-red-500 text-white px-2 py-1 rounded-lg mt-3 mb-5 lg:mb-0'>Logout</button>
                </div>



            </div>

            <div className='flex-1 bg-gradient-to-r from-blue-200 to-cyan-100'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;