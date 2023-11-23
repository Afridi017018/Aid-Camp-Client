import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';



const NavBar = () => {


const user = true
    const navigate = useNavigate()

    const handleLogOut = async () => {
        await logOut();
    }

    const links = <div className={`flex flex-col gap-2 lg:flex-row lg:gap-10 font-medium lg:text-lg text-blue-700`}>

        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-blue-800 text-white px-2 py-1 rounded font-bold" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/available-camps"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-blue-800 text-white px-2 py-1 rounded font-bold" : ""
                }
            >
                Available Camps
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-blue-800 text-white px-2 py-1 rounded font-bold" : ""
                }
            >
                Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact-us"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-blue-800 text-white px-2 py-1 rounded font-bold" : ""
                }
            >
                Contact Us
            </NavLink>
        </li>
        
        
        {
            user === null &&
            <>
                <li className='lg:hidden'>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-blue-800 text-white px-2 py-1 rounded font-bold" : ""
                        }
                    >
                        Login
                    </NavLink>
                </li>
                <li className='lg:hidden'>
                    <NavLink
                        to="/register"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-blue-800 text-white px-2 py-1 rounded font-bold" : ""
                        }
                    >
                        Register
                    </NavLink>
                </li>
            </>
        }

        {
            user === null ||
            <>
                <li onClick={handleLogOut} className='lg:hidden font-bold text-red-700'>
                    <NavLink>Logout</NavLink>
                </li>
            </>
        }



    </div>

    const endLinks = <div className='hidden lg:flex gap-5 font-medium lg:text-lg justify-center items-center'>

        <li>
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-700 font-bold underline underline-offset-4" : ""
                }
            >
                Login
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-700 font-bold underline underline-offset-4" : ""
                }
            >
                Register
            </NavLink>
        </li>
    </div>




    return (
        <div className={`bg-blue-50 w-full`}>
            <div className="navbar container mx-auto h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>

                    </div>
                    <div onClick={() => navigate("/")} className="text-xl font-bold flex cursor-pointer">
                        <div>
                            <img className='h-14 w-44' src="/bloginsightslogo.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="navbar-center">
                    <ul className="menu-horizontal px-1 hidden lg:flex">
                        {links}

                    </ul>
                 
                </div>
                <div className="navbar-end">

                   
                    <ul className="px-1">
                        {
                            user === null &&
                            endLinks

                        }
                        {
                            user === null ||
                            <div className='pr-5 lg:pr-0 flex gap-2 flex-row lg:gap-5 font-medium lg:text-lg'>
                                <li className='flex items-center'>
                                    <div>
                                        <img className='h-6 w-6 lg:h-9 lg:w-9 rounded-full' src={user.photoURL} alt="" />
                                    </div>
                                </li>
                                <li className='flex items-center'>
                                    {user.displayName}
                                </li>
                                <li onClick={handleLogOut} className='hidden lg:flex items-center cursor-pointer font-bold text-red-700'>
                                    Logout
                                </li>
                            </div>

                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;