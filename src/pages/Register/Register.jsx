import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useState } from 'react';

const Register = () => {

    const [passwordMessage, setPasswordMessage] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const passwordPattern = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
        const newForm = new FormData(e.currentTarget);
        const name = newForm.get('name');
        const photo = newForm.get('photo');
        const email = newForm.get('email');
        const password = newForm.get('password');

        if (passwordPattern.test(password)) {
            setPasswordMessage("");
            try {

                const now = await createUser(email, password, name, photo)
                await updateUser(name, photo);
                toast.dismiss();
                toast.success("Registered Successfully !");
                navigate("/login");

            } catch (error) {
                toast.error(error.message);
                setLoading(false);
            }

        } else {
            setPasswordMessage('*Password should be at least 6 characters long and include at least one capital letter and one special character.');
        }


    }

    return (
        <div className='px-5'>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className='h-96 w-full lg:w-[500px]' src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=360&t=st=1699447999~exp=1699448599~hmac=87cc235016cf094524058a7587ef3731d3f5218ed642af99709ac38a49342f93" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="photo url" name='photo' className="input input-bordered" required />
                            </div>
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
                                <label className="label">
                                    <p className='text-red-500 text-sm'>{passwordMessage}</p>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>

                            </div>
                            <div className='text-center text-gray-500'>
                                <p>Already have an account? <span className='text-blue-700'><Link to="/login">Login</Link></span></p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;