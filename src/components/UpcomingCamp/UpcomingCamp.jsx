import React from 'react';

const UpcomingCamp = ({element}) => {

    console.log(element)

    return (
        <div>
            <div className="card card-side bg-base-100 h-64 border rounded-none shadow">
                <img className='w-52 lg:w-80 h-full' src={element.image} />
                <div className="card-body">
                    <h2 className="card-title">{element.name}</h2>
                    <div className='text-gray-600 text-sm'>
                        <p>{element.date} | {element.time} </p>
                        <p>{element.location}</p>

                    </div>
                    <div className='font-bold text-gray-600'>
                        <p>Service: {element.service}</p>
                        <p>Target Audience: {element.target}</p>
                    </div>
                    <div className="card-actions justify-center mt-2">
                        <button className="bg-blue-600 px-4 py-1 rounded text-white">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCamp;