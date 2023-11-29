import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import NewCamp from '../../components/NewCamp/NewCamp';

const AddUpcomingCamp = () => {

    const upcoming = true;
    const page_title = "Add Upcoming Camp"

    return (
        <div>

            <Helmet>
                <title>Aid Camp | Add Upcoming Camps</title>
            </Helmet>

            <NewCamp upcoming={upcoming} page_title={page_title} />
        </div>
    );
};

export default AddUpcomingCamp;
