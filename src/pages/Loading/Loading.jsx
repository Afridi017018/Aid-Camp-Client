import React from 'react';

const Loading = () => {
    return (
        <div className='relative'>
            <div className='h-[555px]  opacity-40 -z-10'>
                
                </div>
                <div className='text-center absolute top-1/2 right-1/2 text-gray-700 z-10'>
                <span className="loading loading-spinner loading-lg"></span>
                </div>
        </div>
    );
};

export default Loading;