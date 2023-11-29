import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import useAxios from '../../hooks/useAxios';
import Loading from '../../pages/Loading/Loading';
import CampCard from '../CampCard/CampCard';

const CampCards = () => {

    const axios = useAxios();
    const navigate = useNavigate();
    const [sort, setSort] = useState(false)

    const getPopularCamps = async () => {
        const res = await axios.get(`/api/camp/get-popular-camps?sort=${sort}`);
        return res;
    }


    const { data, isLoading } = useQuery({
        queryKey: ["popularCamps", sort],
        queryFn: getPopularCamps
    })

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className="text-3xl font-bold mt-12 mb-3 text-center">Popular Camps</h2>
            <div className='text-center'>
                <button onClick={()=>setSort(true)} className=' border border-blue-600 text-blue-600 hover:bg-blue-500 hover:text-white text-sm px-2 py-1 rounded'>Sort By Participants</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5 px-10'>
                {
                    data?.data?.data.map((element) => (
                        <CampCard key={element._id} element={element} />
                    ))
                }

            </div>
            <div onClick={() => navigate(`/available-camps`)} className='font-bold text-lg text-center underline underline-offset-4 text-gray-600 cursor-pointer'>See All</div>
        </div>
    );
};

export default CampCards;






