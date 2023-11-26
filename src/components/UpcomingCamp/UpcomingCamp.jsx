import React from 'react';

const UpcomingCamp = () => {
    return (
        <div>
            <div className="card card-side bg-base-100 h-64 border rounded-none shadow">
                <img className='min-w-52 lg:min-w-80 h-full' src="https://img.freepik.com/free-photo/medium-shot-female-nurse-hospital_23-2150796720.jpg?t=st=1701017311~exp=1701020911~hmac=0411c8dbe4cbfc8b64b65cead4b78ecd3c6c364d7aa0497b32e0820784ed92cb&w=360" />
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <div className='text-gray-600'>
                        <p>2701/24 | 4.00pm </p>
                        <p>Agrabad, Ctg</p>

                    </div>
                    <div className='font-bold text-gray-600'>
                        <p>Service: Dental </p>
                        <p>Target Audience: Children</p>
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