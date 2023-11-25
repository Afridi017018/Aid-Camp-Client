import React from 'react';


import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();


    const { signIn, signInGoogle, user, setLoading } = useContext(AuthContext);

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
                axios.post(`/user-info`, { user: login.user.email, name: login.user.displayName, photo: login.user.photoURL })
                navigate(location?.state ? location.state : "/")
            }

        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }


    }

    const handleGoogleLogin = async (e) => {
        e.preventDefault();


        try {
            const login = await signInGoogle();
            toast.dismiss();
            toast.success("Login Successful !");

            if (login.user) {
                axios.post(`/user-info`, { user: login.user.email, name: login.user.displayName, photo: login.user.photoURL })
                navigate(location?.state ? location.state : "/")
            }

        } catch (error) {
            toast.error(error.message);

        }



    }



    return (
        <div className='px-5'>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16">
                    <div className="text-center lg:text-left lg:w-1/2">
                        <img className='h-96 w-full lg:w-[500px]' src="https://img.freepik.com/free-vector/access-control-system-abstract-concept-vector-illustration-security-system-authorize-entry-login-credentials-electronic-access-password-passphrase-pin-verification-abstract-metaphor_335657-5746.jpg?w=360&t=st=1699448054~exp=1699448654~hmac=9ee8c032f80c1eea7f3d76f47bfb22910ba72e6863df0b0aa6d2676abd30b0ad" alt="" />
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

                            <div onClick={handleGoogleLogin} className="mt-6 btn btn-primary flex gap-5 justify-center">
                                <div className='text-xl'><FcGoogle /></div>
                                <div>Sign In With Google</div>
                            </div>
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