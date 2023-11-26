import React from 'react';
import UpcomingCamp from '../UpcomingCamp/UpcomingCamp';

const UpcomingCamps = () => {
    return (
        <div className='px-10'>
            <h2 className="text-3xl font-bold mt-16 mb-3 text-center">Upcoming Camps</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10'>
            <UpcomingCamp />
            <UpcomingCamp />
            <UpcomingCamp />
            <UpcomingCamp />
        </div>
        </div>
    );
};

export default UpcomingCamps;