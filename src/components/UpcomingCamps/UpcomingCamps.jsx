import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../hooks/useAxios';
import Loading from '../../pages/Loading/Loading';
import UpcomingCamp from '../UpcomingCamp/UpcomingCamp';

const UpcomingCamps = () => {

    const axios = useAxios();

    const getUpcomingCamps = async () => {
      const res = await axios.get(`/api/camp/get-upcoming-camps`);
      return res;
    }


const {data, isLoading} = useQuery({
 queryKey: ["upcomingCamps"],
 queryFn: getUpcomingCamps
})


if(isLoading)
{
    return <Loading />
}


    return (
        <div className='px-10'>
            <h2 className="text-3xl font-bold mt-16 mb-3 text-center">Upcoming Camps</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10'>
            {
                    data?.data?.data.map((element)=>(
                        <UpcomingCamp key={element._id} element={element} />
                    ))
                }
        </div>
        </div>
    );
};

export default UpcomingCamps;