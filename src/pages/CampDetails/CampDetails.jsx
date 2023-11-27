// src/components/CampDetails.js
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import { Modal } from 'react-responsive-modal';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import Loading from '../Loading/Loading';

const CampDetails = () => {

    const { userInfo } = useAuth();
    const { campId } = useParams();
    const axios = useAxios();

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);



    const getCampById = async () => {
        const res = await axios.get(`/api/camp/get-camp-by-id/${campId}`)
        return res;
    }


    const { data, isLoading } = useQuery({
        queryKey: ["campDetails", campId],
        queryFn: getCampById
    })






    if (isLoading) {
        return <Loading />
    }







    const handleRegistrationSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const obj = {
            userId: userInfo._id,
            email: userInfo.email,
            age: form.age.value,
            gender: form.gender.value,
            healthInfo: form.healthInfo.value,
            emergency: form.emergency.value,
            fees: form.fees.value,
            organizer: data.data.data.organizer

        }


        console.log(obj)

    };


    return (
        <div className='pt-32 pb-10 px-10'>
            <div>
                <img className='w-full h-[28rem] rounded' src={data.data.data.image} alt="" />
            </div>
            {
                userInfo?.role === "participant" &&
                <div className='text-center my-2'>
                    <button onClick={onOpenModal} className='bg-blue-600 text-white px-3 py-1 text-lg rounded'>Join Now</button>
                </div>
            }
            {
                userInfo === null &&
                <div className='text-center my-2'>
                    <button className='bg-blue-600 text-white px-3 py-1 text-lg rounded'>Join Now</button>
                </div>
            }
            <div className='my-5'>
                <h1 className='font-bold text-3xl'>{data.data.data.name}</h1>
                <div className='my-2 text-sm text-gray-600 font-bold'>
                    <p>Date: {data.data.data.date} | {data.data.data.time}</p>
                    <p>Venue: {data.data.data.location}</p>
                    <p>Service: {data.data.data.service}</p>
                    <p>Audience: {data.data.data.target}</p>
                    <p>Professionals: {data.data.data.professional}</p>
                    <p>Participants: {data.data.data.participant_count}</p>
                    <p>Fees: ${data.data.data.fees}</p>
                </div>
            </div>

            <div className='text-gray-600 text-lg'>
                <p>{data.data.data.description}</p>
            </div>


            {/*--- modal ---*/}
            <div>
                <Modal open={open} onClose={onCloseModal} center>
                    <div className="bg-white p-4 rounded-md shadow-md w-96">
                        <h2 className="text-2xl font-semibold mb-4">Participant Registration</h2>
                        <form onSubmit={handleRegistrationSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={userInfo?.name}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                    placeholder='Name'
                                    readOnly
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="age">
                                    Age
                                </label>
                                <input
                                    type="number"
                                    name="age"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                    placeholder='Age'
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder='Phone'
                                    defaultValue={userInfo?.phone || ""}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="gender">
                                    Gender
                                </label>
                                <select
                                    name="gender"
                                    defaultValue=""
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                    required
                                >
                                    <option disabled value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="address">
                                    Address
                                </label>
                                <textarea
                                    name="address"
                                    placeholder='Address'
                                    defaultValue={userInfo?.address || ""}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="healthInfo">
                                    Health Information
                                </label>
                                <textarea
                                    name="healthInfo"
                                    placeholder='Health Information'
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="emergencyContact">
                                    Emergency Contact
                                </label>
                                <input
                                    type="text"
                                    name="emergency"
                                    placeholder='Emergency Contact'
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="fees">
                                    Fees
                                </label>
                                <input
                                    type="text"
                                    name="fees"
                                    value={data.data.data.fees}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                    readOnly
                                />
                            </div>


                            <div className='text-center'>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Register</button>
                            </div>
                            
                        </form>
                    </div>
                </Modal>
            </div>




        </div>
    );
};

export default CampDetails;
