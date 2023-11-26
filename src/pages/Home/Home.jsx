import React from 'react';
import Banner from '../../components/Banner/Banner';
import CampCards from '../../components/CampCards/CampCards';
import Testimonials from '../../components/Testimonials/Testimonials';
import UpcomingCamps from '../../components/UpcomingCamps/UpcomingCamps';


const Home = () => {
    return (
        <div>
            <Banner />
            <CampCards />
            <UpcomingCamps />
            <Testimonials />
        </div>
    );
};

export default Home;