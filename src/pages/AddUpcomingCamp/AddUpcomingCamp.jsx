import React, { useState } from 'react';
import NewCamp from '../../components/NewCamp/NewCamp';

const AddUpcomingCamp = () => {

    const upcoming = true;
    const page_title = "Add Upcoming Camp"

    return (
        <div>
            <NewCamp upcoming ={upcoming} page_title={page_title}  /> 
        </div>
    );
};

export default AddUpcomingCamp;
