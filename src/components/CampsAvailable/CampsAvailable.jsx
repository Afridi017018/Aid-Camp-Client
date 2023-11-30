import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import Loading from '../../pages/Loading/Loading';
import CampCard from '../CampCard/CampCard';

const CampsAvailable = () => {

    const axios = useAxios();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const getAvailableCamps = async () => {
        const res = await axios.get(`/api/camp/get-available-camps?page=${currentPage}`);

        setTotalPages(res.data.pagination.totalPages)
        return res;
    }


    const { data, isLoading } = useQuery({
        queryKey: ["availableCamps", currentPage],
        queryFn: getAvailableCamps
    })

    if (isLoading) {
        return <Loading />
    }

    console.log(data.data.data)

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <div>
            <div className='text-2xl pt-28 text-center font-bold text-gray-600'><h1>Available Camps</h1></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 py-10'>

                {
                    data?.data?.data.map((element) => (
                        <CampCard key={element._id} element={element} />
                    ))
                }


            </div>


            {/* pagination */}

            <div className="flex items-center justify-center pb-5">
                {currentPage > 1 && (
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-800"
                    >
                        {"< Prev"}
                    </button>
                )}

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}

                {currentPage < totalPages && (
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-800"
                    >
                        {"Next >"}
                    </button>
                )}
            </div>



        </div>
    );
};

export default CampsAvailable;