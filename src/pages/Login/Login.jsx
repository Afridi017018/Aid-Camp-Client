import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import useAxios from '../../hooks/useAxios';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // const axios = useAxios();

    const { signIn, signInGoogle, user, setLoading, userInfo, setUserInfo } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        const newForm = new FormData(e.currentTarget);

        const email = newForm.get('email');
        const password = newForm.get('password');

        try {
            const login = await signIn(email, password);
            toast.dismiss();
            toast.success("Login Successful !");

            if (login.user) {
                // axios.post(`/user-info`, { user: login.user.email, name: login.user.displayName, photo: login.user.photoURL })
                navigate(location?.state ? location.state : "/dashboard/user-profile")
            }

        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }


    }

    // const handleGoogleLogin = async (e) => {
    //     e.preventDefault();


    //     try {
    //         const login = await signInGoogle();
    //         toast.dismiss();
    //         toast.success("Login Successful !");

    //         if (login.user) {
    //             // axios.post(`/user-info`, { user: login.user.email, name: login.user.displayName, photo: login.user.photoURL })
    //             navigate(location?.state ? location.state : "/")
    //         }

    //     } catch (error) {
    //         toast.error(error.message);

    //     }



    // }



    return (
        <div className='px-5'>

            <Helmet>
                <title>Aid Camp | Login</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16">
                    <div className="text-center lg:text-left lg:w-1/2">
                        <img className='h-96 w-full lg:w-[500px]' src="https://img.freepik.com/free-vector/login-concept-illustration_114360-748.jpg?w=360&t=st=1701330646~exp=1701331246~hmac=1104f1069f18af8ce1bb09dd5f9153cbb29c4b7957f739904a0176b0a7264513" alt="" />
                    </div>
                    <div className="card flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            {/* <div onClick={handleGoogleLogin} className="mt-6 btn btn-primary flex gap-5 justify-center">
                                <div className='text-xl'><FcGoogle /></div>
                                <div>Sign In With Google</div>
                            </div> */}
                            <div className='text-center text-gray-500'>
                                <p>Don't have an account? <span className='text-blue-700'><Link to="/register">Register</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;