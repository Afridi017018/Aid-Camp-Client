// src/components/CampDetails.js
import React, { useState } from 'react';

import { Modal } from 'react-responsive-modal';

const CampDetails = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className='my-10 px-10'>
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
                    <h2>Simple centered modal</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                        hendrerit risus, sed porttitor quam.
                    </p>
                </Modal>
            </div>




        </div>
    );
};

export default CampDetails;
