import React, { useState } from 'react';
import moment from 'moment'
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import { toast } from 'react-toastify';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const NewCamp = ({ page_title, upcoming }) => {

    const { userInfo } = useAuth();
    const axios = useAxios();
    const axiosPublic = useAxiosPublic();



    const handleSubmit = async (e) => {
        e.preventDefault();
        const organizer = userInfo?.email

        const form = e.target;

        const newForm = new FormData(e.currentTarget)

        const image = newForm.get('image');

        const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
        const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

        const imageFile = { image: image }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });


        const obj = {
            name: form.name.value,
            image: res.data.data.display_url,
            fees: form.fees.value,
            date: moment(form.date.value, 'YYYY-MM-DD').format('DD/MM/YYYY'),
            time: moment(form.time.value, 'HH:mm').format('h:mm A'),
            location: form.location.value,
            service: form.service.value,
            professional: [form.professional.value],
            target: form.target.value,
            description: form.description.value,
            upcoming,
            organizer
        }


        const result = await axios.post('/api/camp/add-camp', obj);
        toast.dismiss();
        toast.success(result.data.message);

        form.reset();
        // console.log(obj)
    };

    return (
        <div className="container mx-auto my-5">
            <div className="lg:w-full mx-auto p-4 lg:px-20">
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 py-5 rounded border shadow-2xl px-10">
                    <h1 className="text-3xl font-semibold mb-5">{page_title}</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder='Camp Name'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="file"
                                name="image"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="number"
                                name="fees"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder='Camp Fees'
                                required
                            />
                        </div>
                        <div className="mb-4 flex gap-5">
                            <input
                                type="date"
                                name="date"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                required
                            />

                            <input
                                type="time"
                                name="time"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                required
                            />

                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="location"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder='Venue Location'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="service"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder='Specialized Services Provided'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="professional"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder='Healthcare Professionals in Attendance'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="target"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder='Target Audience'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                id="description"
                                name="description"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                rows="3"
                                placeholder='Description'
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewCamp;
