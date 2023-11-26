
import React from 'react';

const CampCard= ({element}) => {


  return (
    <div className="mx-auto w-full">
      <div className=" border">

          <div className="bg-white p-4 rounded shadow">
            <img
              src={element.image}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-bold mb-2">{element.name}</h3>
            <p className="text-gray-600">{element.date} | {element.time}</p>
            <p className="text-gray-600 mb-2">{element.location}</p>
            <div className='text-gray-600 font-bold mt-2'>
            <p className="mb-2">
              Service: {element.service}
            </p>
            <p className="mb-2">Participant: {element.participant_count}</p>
            <p>Target Audience: {element.target}</p>
            </div>
            <div className='text-center'>
            <button className='bg-blue-600 px-3 py-1 rounded text-white mt-5 hover:bg-blue-800'>See Details</button>
            </div>
          </div>

      </div>
    </div>
  );
};

export default CampCard;
