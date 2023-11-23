// import React from 'react';

// const PopularCamp = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default PopularCamp;




import React from 'react';

const PopularCamp = () => {
  const medicalCampsData = [
    {
      name: 'Camp A',
      image: 'https://img.freepik.com/free-photo/medical-banner-with-doctor-patient_23-2149611238.jpg?w=740&t=st=1700763105~exp=1700763705~hmac=f3fde538305cfd4c14b60efbe9172f3fa8d9084aaa7c5cc8367a8db4730b990b',
      fees: '$20',
      dateAndTime: 'March 10, 2023 | 9:00 AM - 4:00 PM',
      location: 'Community Center, Main Street',
      services: ['General Checkup', 'Dental Care', 'Immunization'],
      professionals: ['Dr. Smith', 'Nurse Johnson'],
      targetAudience: 'All Ages',
    },
    // Add more medical camps data here
  ];

  return (
    <div className="mx-auto my-5">
      <div className=" border">
        {medicalCampsData.map((camp, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <img
              src={camp.image}
              alt={`Image for ${camp.name}`}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold mb-2">{camp.name}</h3>
            <p className="text-gray-600 mb-2">{camp.dateAndTime}</p>
            <p className="text-gray-600 mb-2">{camp.location}</p>
            <p className="text-gray-800 mb-2">
              Services: {camp.services.join(', ')}
            </p>
            <p className="text-gray-800 mb-2">
              Professionals: {camp.professionals.join(', ')}
            </p>
            <p className="text-gray-600 mb-2">Fees: {camp.fees}</p>
            <p className="text-gray-600 mb-2">Participant: 25</p>
            <p className="text-gray-600">Target Audience: {camp.targetAudience}</p>
            <div className='text-center'>
            <button className='bg-blue-600 px-3 py-1 rounded text-white mt-5 hover:bg-blue-800'>See Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCamp;
