import React from 'react';
import CampCard from '../CampCard/CampCard';

const CampsAvailable = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10'>
                <CampCard />
                <CampCard />
                <CampCard />
                <CampCard />
                <CampCard />
                <CampCard />


            </div>
        </div>
    );
};

export default CampsAvailable;