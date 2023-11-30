import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import Loading from '../Loading/Loading';

import { useNavigate } from 'react-router-dom/dist';
import { Helmet } from 'react-helmet-async';


const AllPopularCamps = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;


    const axios = useAxios();
    const navigate = useNavigate();


    const getAllPopularCamps = async () => {
        const res = await axios.get(`/api/camp/get-all-popular-camps`);
        return res;
    }


    const { data, isLoading } = useQuery({
        queryKey: ["getAllPopularCamps"],
        queryFn: getAllPopularCamps
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



    return (
        <div className='px-2 lg:px-20 my-10'>

            <Helmet>
                <title>Aid Camp | Popular Camps</title>
            </Helmet>

            <div className='text-center font-bold'>Popular Camps</div>
            <div className="overflow-x-auto shadow mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Camp</th>
                            <th>Date & Time</th>
                            <th>Venue</th>
                            <th>Target</th>
                            <th>fees</th>
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
                                        {element.name}
                                    </td>
                                    <td>
                                        {element.date} , {element.time}
                                    </td>
                                    <td>{element.location}</td>
                                    <td>{element.target}</td>
                                    <td>${element.fees}</td>

                                    <td>
                                        <button onClick={() => navigate(`/camp-details/${element._id}`)} className='px-2 rounded text-white bg-gray-500'>Details</button>
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

export default AllPopularCamps;