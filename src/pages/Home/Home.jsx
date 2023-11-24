import React from 'react';
import Banner from '../../components/Banner/Banner';
import CampCards from '../../components/CampCards/CampCards';
import Testimonials from '../../components/Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Banner />
            <CampCards />
            <Testimonials />
        </div>
    );
};

export default Home;