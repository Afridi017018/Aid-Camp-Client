import React from 'react';
import { useNavigate } from 'react-router-dom/dist';

const Banner = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className='relative'>
                <div className="carousel w-full h-[600px]">


                    <div id="item1" className="carousel-item w-full">
                        <img src="https://img.freepik.com/free-photo/my-daughter-isn-t-afraid-pay-visit-here_329181-7634.jpg?w=740&t=st=1700757108~exp=1700757708~hmac=6e53dc9362eee9abf0ed6472826738fa7654ef2c4314b0f21b252758023e1344" className="w-full" />
                    </div>



                    <div id="item2" className="carousel-item w-full">
                        <img src="https://img.freepik.com/premium-photo/yogyakarta-indonesia-february-2023-mother-holding-her-baby-is-undergoing-screening-process-before-getting-covid19-vaccine_539145-193.jpg?w=740" className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://img.freepik.com/premium-photo/happy-team-diverse-doctors-hospital-lobby_709984-2700.jpg?w=740" className="w-full" />
                    </div>
                </div>
                <div className="flex absolute bottom-5 justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs bg-black z-10 text-white hover:text-black">1</a>
                    <a href="#item2" className="btn btn-xs bg-black z-10 text-white hover:text-black">2</a>
                    <a href="#item3" className="btn btn-xs bg-black z-10 text-white hover:text-black">3</a>
                </div>

                <div className='absolute w-full h-[600px] bg-black opacity-60 top-0'></div>
                <div>
                    <div className=' absolute bottom-40 w-full text-white text-center text-sm lg:text-xl font-bold'>
                        <h3 className='my-2'>Revolutionize Community Health with Our Aid Camp!</h3>
                        <h3 className='m-2'>Seamless Organization, and Impactful Outreach</h3>
                        <h3 className='m-2'>Empower Your Healthcare Initiatives for a Healthier Tomorrow!</h3>

                        <button onClick={() => navigate('/available-camps')} className='my-5 bg-blue-700 hover:bg-blue-900 text-base font-normal px-3 py-1 rounded'>All Camps</button>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Banner;