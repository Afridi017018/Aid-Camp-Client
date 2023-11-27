import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import Loading from '../Loading/Loading';

import { Modal } from 'react-responsive-modal';
import Swal from 'sweetalert2';

const FeedBack = () => {

    const axios = useAxios();
    const { user, userInfo } = useAuth();
    const [currentElement, setCurrentElement] = useState(null)

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const getRegCamp = async () => {
        const res = await axios.get(`/api/join/confirmed-history?email=${user?.email}`)
        return res;
    }


    const { data, isLoading } = useQuery({
        queryKey: ["reg-camps-confirmed", user],
        queryFn: getRegCamp
    })


    if (isLoading || !user) {
        return <Loading />
    }



    const currentDate = moment(Date.now()).format("DD/MM/YYYY")


    const newData = data.data.data.filter((e) => moment(currentDate, "DD/MM/YYYY").isSameOrAfter(moment(e.campId.date, "DD/MM/YYYY")))


    const handleModal = async (element) => {

        setCurrentElement(element);

        onOpenModal();


    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const obj = {
            participant: userInfo.name,
            campId: currentElement.campId._id,
            email: userInfo.email,
            rating: Number(e.target.rating.value),
            feedback: e.target.feedback.value
        }

        const result = await axios.post('/api/feedback/give-feedback', obj);

        Swal.fire({
            title: result.data.message,
            icon: "success"
        });

        onCloseModal();
        setCurrentElement(null);

    }


    return (
        <div className='px-2 lg:px-20 my-10'>

            <div className="overflow-x-auto shadow">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Camp</th>
                            <th>Date</th>
                            <th>Fees</th>
                            <th>Payment Status</th>
                            <th>Confirmation Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            newData.length > 0 &&

                            newData.map((element) => (
                                <tr key={element._id}>


                                    <td>
                                        <div className="flex items-center gap-3">

                                            <div>
                                                <div className="font-bold">{element.campId.name}</div>
                                                <div className="text-sm opacity-50">{element.campId.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-gray-600'>
                                        {element.campId.date}
                                    </td>

                                    <td>${element.campId.fees}</td>

                                    <td className='text-gray-600 font-bold capitalize'>{element.payment_status}</td>

                                    <td className='text-green-600 font-bold capitalize'>{element.confirmation_status}</td>

                                    <td><button onClick={() => handleModal(element)} className='bg-gray-600 text-white rounded px-2 py-1'>Review</button></td>

                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>








            <Modal open={open} onClose={onCloseModal} center>
                <div className="bg-white p-4 rounded-md shadow-md w-96">
                    <h2 className="text-2xl font-semibold mb-4">Review {currentElement?.campId.name}</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="age">
                                Feedback
                            </label>
                            <input
                                type="text"
                                name="feedback"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder='Your feedback'
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="age">
                                Rating
                            </label>
                            <input
                                type="number"
                                name="rating"
                                min="1"
                                max="5"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder='✮✮✮✮✮'
                                required
                            />
                        </div>


                        <div className='text-center'>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
                        </div>

                    </form>
                </div>
            </Modal>
















        </div>
    );
};

export default FeedBack;