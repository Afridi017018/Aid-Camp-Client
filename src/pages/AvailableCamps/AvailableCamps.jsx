import React from 'react';
import { Helmet } from 'react-helmet-async';
import CampsAvailable from '../../components/CampsAvailable/CampsAvailable';


const AvailableCamps = () => {
    return (
        <div>

            <Helmet>
                <title>Aid Camp | Available Camps</title>
            </Helmet>


            <CampsAvailable />
        </div>
    );
};

export default AvailableCamps;