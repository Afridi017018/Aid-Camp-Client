import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import Loading from '../Loading/Loading';
import moment from 'moment/moment';


import { toast } from 'react-toastify';

import { useParams } from 'react-router-dom/dist';
import { Helmet } from 'react-helmet-async';

const InterestedProfessionals = () => {


    const axios = useAxios();
    const { id } = useParams();


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;



    const getInterestedProfessionals = async () => {
        const res = await axios.get(`/api/professional/get-interested-professionals/${id}`);
        return res;
    }


    const { data, isLoading, refetch } = useQuery({
        queryKey: ["interestedProfessionals", id],
        queryFn: getInterestedProfessionals
    })

    if (isLoading) {
        return <Loading />
    }



    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;
    const currentUsers = data.data.data.slice(indexOfFirstUser, indexOfLastUser);

    const handlePageChange = (direction) => {
        setCurrentPage((direction === 'prev' ? currentPage - 1 : currentPage + 1));
    };





    const handleAccept = async (id) => {

        const result = await axios.put(`/api/professional/accept-interested-professionals/${id}`);

        refetch();
        toast.dismiss();
        toast.success(result.data.message);


    }


    // console.log(data.data.data)

    return (
        <div className='px-2 lg:px-20 my-10'>

            <Helmet>
                <title>Aid Camp | Interested Professionals</title>
            </Helmet>

            <div className='text-center font-bold'>Interested Professionals</div>
            <div className="overflow-x-auto shadow mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Specialization</th>
                            <th>Status</th>
                            {/* <th>Target Audience</th> */}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.data.data.length > 0 &&

                            data.data.data.map((element) => (
                                <tr key={element._id}>
                                    <td className='font-bold'>
                                        {element.userId.name}
                                    </td>

                                    <td className='capitalize'>{element.specialization}</td>
                                    <td className={`font-bold capitalize ${element.approve_status === "accepted" && "text-green-500"} `}>{element.approve_status}</td>

                                    <td>
                                        {
                                            element.approve_status === "pending" &&
                                            <button onClick={() => handleAccept(element._id)} className='bg-green-500 text-white px-2 py-1 rounded'>Accept</button>
                                        }
                                    </td>

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

export default InterestedProfessionals;