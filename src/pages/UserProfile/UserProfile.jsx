import React from 'react';
import { Helmet } from 'react-helmet-async';
import Profile from '../../components/Profile/Profile';

const UserProfile = () => {

    return (
        <div>
            <Helmet>
                <title>Aid Camp | Profile</title>
            </Helmet>

            <Profile />
        </div>
    );
};

export default UserProfile;
