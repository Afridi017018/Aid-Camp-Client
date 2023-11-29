import React, { useState } from 'react';
import moment from 'moment'
import NewCamp from '../../components/NewCamp/NewCamp';
import { Helmet } from 'react-helmet-async';

const AddCamp = () => {

    const upcoming = false;
    const page_title = "Add Camp"

    return (
        <div>

            <Helmet>
                <title>Aid Camp | Add Camps</title>
            </Helmet>

            <NewCamp upcoming={upcoming} page_title={page_title} />
        </div>
    );
};

export default AddCamp;
