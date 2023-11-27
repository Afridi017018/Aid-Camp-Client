import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import Loading from '../Loading/Loading';

const PaymentHistory = () => {

    const axios = useAxios();
    const { user } = useAuth();


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



    return (
        <div className='px-2 lg:px-20 my-10'>

            <div className="overflow-x-auto shadow">
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
                                    <td>{element.campId.fees}</td>

                                    <td className='text-gray-600 font-bold capitalize'>{element.payment_status}</td>

                                    {element.confirmation_status === "pending" && <td className='text-gray-500'>Pending</td>}
                                    {element.confirmation_status === "confirmed" && <td className='text-green-600 font-bold'>Confirmed</td>}


                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;