import React from 'react';
import { useNavigate } from 'react-router-dom/dist';

const UpcomingCamp = ({ element }) => {

    const navigate = useNavigate();

    return (
        <div>
            <div className="card card-side bg-base-100 h-full border rounded-none shadow bg-gradient-to-r from-white to-blue-100">
                <img className='w-40 md:w-52 lg:w-80 h-full' src={element.image} />
                <div className="card-body">
                    <h2 className="card-title">{element.name}</h2>
                    <div className='text-gray-600 text-sm'>
                        <p>{element.date} | {element.time} </p>
                        <p>{element.location}</p>

                    </div>
                    <div className='font-bold text-gray-600'>
                        <p>Service: {element.service}</p>
                        <p>Audience: {element.target}</p>
                        <p>Fees: ${element.fees}</p>
                    </div>
                    <div className="card-actions justify-center mt-2">
                        <button onClick={() => navigate(`/camp-details/${element._id}`)} className="bg-blue-600 px-4 py-1 rounded text-white">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCamp;