import React from 'react';

const AboutUs = () => {
    return (
        <div className='px-5 bg-base-100 lg:h-[500px] bg-gradient-to-r from-cyan-200 to-blue-300'>
            <div className="flex flex-col lg:flex-row items-center">

                <div data-aos="zoom-in-up" className='lg:w-1/2 text-center px-24'>
                   <h2 className='text-5xl font-bold mb-10 text-blue-500'>About Us</h2>
                   <p className='text-gray-500'> Founded with a passion for community well-being, we provide vital healthcare services through regular medical camps. Our dedicated team of professionals and volunteers is committed to creating a healthier, more inclusive world. Join us in making a positive impact—whether through participation or support. Connect with us. Together, let's build a healthier and happier community</p>
                </div>

                <div className='lg:w-1/2'>
                    <img data-aos="zoom-in-up"  className='h-[500px] w-full' src="https://i.ibb.co/dB2xfnj/aboutUs.png" alt="" />
                </div>


            </div>
        </div>
    );
};

export default AboutUs;