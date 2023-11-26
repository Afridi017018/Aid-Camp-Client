// src/components/CampDetails.js
import React, { useState } from 'react';

import { Modal } from 'react-responsive-modal';

const CampDetails = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

  const [participantData, setParticipantData] = useState({
    name: '',
    age: '',
    phone: '',
    gender: '',
    address: '',
    healthInfo: '',
    emergencyContact: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setParticipantData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    // You can access participantData state to get the form data
    // and perform any necessary actions (e.g., API call, etc.)
    // For simplicity, let's just close the modal in this example

  };


    return (
        <div className='pt-32 pb-10 px-10'>
            <div>
                <img className='w-full h-[28rem] rounded' src="https://img.freepik.com/free-photo/medical-banner-with-doctor-patient_23-2149611238.jpg?w=740&t=st=1700763105~exp=1700763705~hmac=f3fde538305cfd4c14b60efbe9172f3fa8d9084aaa7c5cc8367a8db4730b990b" alt="" />
            </div>
            <div className='text-center my-2'>
                <button onClick={onOpenModal} className='bg-blue-600 text-white px-3 py-1 text-lg rounded'>Join Now</button>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-3xl'>Health and Wellness Camp</h1>
                <div className='my-2 text-sm text-gray-600 font-bold'>
                    <p>Date: February 15, 2023 | 4.00pm</p>
                    <p>Venue: City Park</p>
                    <p>Service: Dental Checkup</p>
                    <p>Audience: All Ages</p>
                    <p>Professionals: Dr. Smith, Nurse Johnson</p>
                </div>
            </div>

            <div className='text-gray-600 text-lg'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aperiam consectetur provident, ipsum mollitia, quidem ratione unde aliquid animi, vero dolore quaerat non delectus. Odio eligendi id cumque enim iure, iste quos, rem earum est ab nesciunt ullam. Laudantium sapiente nisi harum dolorem fuga, quidem iure. Mollitia, dignissimos. Repellendus, libero.</p>
            </div>


            {/*--- modal ---*/}
            <div>
                <Modal open={open} onClose={onCloseModal} center>
                <div className="bg-white p-4 rounded-md shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4">Participant Registration</h2>
            <form onSubmit={handleRegistrationSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={participantData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="age">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={participantData.age}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={participantData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="gender">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={participantData.gender}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="address">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={participantData.address}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="healthInfo">
                  Health Information
                </label>
                <textarea
                  id="healthInfo"
                  name="healthInfo"
                  value={participantData.healthInfo}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="emergencyContact">
                  Emergency Contact
                </label>
                <input
                  type="text"
                  id="emergencyContact"
                  name="emergencyContact"
                  value={participantData.emergencyContact}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Register</button>

            </form>
          </div>
                </Modal>
            </div>




        </div>
    );
};

export default CampDetails;
