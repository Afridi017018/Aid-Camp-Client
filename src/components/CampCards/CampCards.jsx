import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../hooks/useAxios';
import Loading from '../../pages/Loading/Loading';
import CampCard from '../CampCard/CampCard';

const CampCards = () => {

    const axios = useAxios();

    const getPopularCamps = async () => {
        const res = await axios.get(`/api/camp/get-popular-camps`);
        return res;
    }


    const { data, isLoading } = useQuery({
        queryKey: ["popularCamps"],
        queryFn: getPopularCamps
    })

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className="text-3xl font-bold mt-12 mb-3 text-center">Popular Medical Camps</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5 px-10'>
                {
                    data?.data?.data.map((element) => (
                        <CampCard key={element._id} element={element} />
                    ))
                }

            </div>
        </div>
    );
};

export default CampCards;






