import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import Loading from '../Loading/Loading';

import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom/dist';


const AcceptedCamps = () => {


    const {user} = useAuth();
    const axios = useAxios();
    const navigate = useNavigate();


    const getAcceptedCamps = async () => {
        const res = await axios.get(`/api/professional/get-accepted-camps?email=${user?.email}`);
        return res;
    }


    const { data, isLoading} = useQuery({
        queryKey: ["getAcceptedCamps" , user],
        queryFn: getAcceptedCamps
    })

    if (isLoading) {
        return <Loading />
    }



    return (
        <div className='px-2 lg:px-20 my-10'>
            <div className='text-center font-bold'>Accepted Camps</div>
            <div className="overflow-x-auto shadow mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Camp</th>
                            <th>Date & Time</th>
                            <th>Venue</th>
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
                                        {element.campId.name}
                                    </td>
                               <td>
                                {element.campId.date} , {element.campId.time}
                               </td>
                                    <td>{element.campId.location}</td>
                                    <td className={`font-bold capitalize text-green-500`}>{element.approve_status}</td>

                                    <td>
                                        <button onClick={()=> navigate(`/camp-details/${element.campId._id}`)} className='px-2 rounded text-white bg-gray-500'>Details</button>
                                    </td>

                                </tr>
                            ))

                        }

                    </tbody>

                </table>

            </div>



        </div>
    );
};

export default AcceptedCamps;