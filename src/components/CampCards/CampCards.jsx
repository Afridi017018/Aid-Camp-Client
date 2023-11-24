import React from 'react';
import CampCard from '../CampCard/CampCard';

const CampCards = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold mt-12 mb-3 text-center">Popular Medical Camps</h2>
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

export default CampCards;






