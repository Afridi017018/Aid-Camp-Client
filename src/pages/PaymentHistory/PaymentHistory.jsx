import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import Loading from '../Loading/Loading';

const PaymentHistory = () => {

    const axios = useAxios();
    const { user } = useAuth();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;


    const getRegCamp = async () => {
        const res = await axios.get(`/api/join/payment-history?email=${user?.email}`)
        return res;
    }


    const { data, isLoading } = useQuery({
        queryKey: ["reg-camps-paid", user],
        queryFn: getRegCamp
    })


    if (isLoading || !user) {
        return <Loading />
    }

    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;
    const currentUsers = data.data.data.slice(indexOfFirstUser, indexOfLastUser);

    const handlePageChange = (direction) => {
        setCurrentPage((direction === 'prev' ? currentPage - 1 : currentPage + 1));
    };


    return (
        <div className='px-2 lg:px-20 my-10'>

            <Helmet>
                <title>Aid Camp | Payment History</title>
            </Helmet>

            <div className='text-center font-bold'>Payment History</div>

            <div className="overflow-x-auto shadow mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Camp</th>
                            <th>Date & Time</th>
                            <th>Transaction ID</th>
                            <th>Fees</th>
                            <th>Payment Status</th>
                            <th>Confirmation Status</th>
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
                                    <td className='text-gray-600'>
                                        {element.campId.date}, {element.campId.time}
                                    </td>
                                    <td className='text-gray-600'>{element.transaction}</td>
                                    <td>${element.campId.fees}</td>

                                    <td className='text-gray-600 font-bold capitalize'>{element.payment_status}</td>

                                    {element.confirmation_status === "pending" && <td className='text-gray-500'>Pending</td>}
                                    {element.confirmation_status === "confirmed" && <td className='text-green-600 font-bold'>Confirmed</td>}


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

export default PaymentHistory;