import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom/dist';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import Loading from '../Loading/Loading';

const RegisteredCamps = () => {

    const axios = useAxios();
    const { user } = useAuth();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    const navigate = useNavigate();

    const getRegCamp = async () => {
        const res = await axios.get(`/api/join/get-reg-camps?email=${user?.email}`)
        return res;
    }


    const { data, isLoading, refetch } = useQuery({
        queryKey: ["reg-camps", user],
        queryFn: getRegCamp
    })


    if (isLoading || !user) {
        return <Loading />
    }

    // console.log(data.data.data)

    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;
    const currentUsers = data.data.data.slice(indexOfFirstUser, indexOfLastUser);

    const handlePageChange = (direction) => {
        setCurrentPage((direction === 'prev' ? currentPage - 1 : currentPage + 1));
    };



    const handleCancel = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await axios.delete(`/api/join/delete-reg-camp/${id}`);
                refetch();
                Swal.fire({
                    title: "Canceled!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });



    }


    return (
        <div className='px-2 lg:px-20 my-10'>

            <Helmet>
                <title>Aid Camp | Registered Camps</title>
            </Helmet>

            <div className='text-center font-bold'>Registered Camps</div>

            <div className="overflow-x-auto shadow mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Camp</th>
                            <th>Date & Time</th>
                            <th>Fees</th>
                            <th>Payment Status</th>
                            <th>Confirmation Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.data.data.length > 0 &&

                            data.data.data.map((element) => (
                                <tr key={element._id}>
                                    <td>
                                        <div className="flex items-center gap-3">

                                            <div>
                                                <div className="font-bold">{element.campId.name}</div>
                                                <div className="text-sm opacity-50">{element.campId.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {element.campId.date}, {element.campId.time}
                                    </td>
                                    <td>${element.campId.fees}</td>

                                    <td>{element.payment_status === "unpaid" ? <button onClick={() => navigate(`/dashboard/payment/${element._id}`)} className='bg-blue-500 text-white px-3 py-1 rounded'>Pay</button> : <p className='text-gray-600 font-bold'>Paid</p>}</td>

                                    {element.confirmation_status === "pending" && <td className='text-gray-500'>Pending</td>}
                                    {element.confirmation_status === "confirmed" && <td className='text-green-600 font-bold'>Confirmed</td>}

                                    <td>{element.payment_status === "unpaid" && <button onClick={() => handleCancel(element._id)} className='px-3 py-1 rounded bg-gray-500 text-white'>Cancel</button>}</td>

                                </tr>
                            ))

                        }

                    </tbody>

                </table>
            </div>


            {/* Pagination buttons */}
            <div className='text-center my-3'>
                <button className={`cursor-pointer ${currentPage === 1 && "text-gray-500"}`} onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>
                    Prev
                </button>
                <span className='mx-3 border border-gray-500 px-1'>{currentPage}</span>
                <button className={`cursor-pointer ${indexOfLastUser >= data.data.data.length && "text-gray-500"}`} onClick={() => handlePageChange('next')} disabled={indexOfLastUser >= data.data.data.length}>
                    Next
                </button>
            </div>



        </div>
    );
};

export default RegisteredCamps;