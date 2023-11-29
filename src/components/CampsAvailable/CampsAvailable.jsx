import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../hooks/useAxios';
import Loading from '../../pages/Loading/Loading';
import CampCard from '../CampCard/CampCard';

const CampsAvailable = () => {

    const axios = useAxios();

    const getAvailableCamps = async () => {
      const res = await axios.get(`/api/camp/get-available-camps`);
      return res;
    }


const {data, isLoading} = useQuery({
 queryKey: ["availableCamps"],
 queryFn: getAvailableCamps
})

if(isLoading)
{
    return <Loading />
}

// console.log(data.data.data)


    return (
        <div>
            <div className='text-2xl pt-28 text-center font-bold text-gray-600'><h1>Available Camps</h1></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 py-10'>
                
                {
                    data?.data?.data.map((element)=>(
                        <CampCard key={element._id} element={element} />
                    ))
                }


            </div>
        </div>
    );
};

export default CampsAvailable;