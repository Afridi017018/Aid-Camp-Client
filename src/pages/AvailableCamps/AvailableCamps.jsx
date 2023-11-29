import React from 'react';
import { Helmet } from 'react-helmet-async';
import CampsAvailable from '../../components/CampsAvailable/CampsAvailable';


const AvailableCamps = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-200 to-blue-300'>

            <Helmet>
                <title>Aid Camp | Available Camps</title>
            </Helmet>


            <CampsAvailable />
        </div>
    );
};

export default AvailableCamps;