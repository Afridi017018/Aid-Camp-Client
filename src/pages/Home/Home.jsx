import React from 'react';
import AboutUs from '../../components/AboutUs/AboutUs';
import Banner from '../../components/Banner/Banner';
import CampCards from '../../components/CampCards/CampCards';
import Faq from '../../components/Faq/Faq';
import Testimonials from '../../components/Testimonials/Testimonials';
import UpcomingCamps from '../../components/UpcomingCamps/UpcomingCamps';


const Home = () => {
    return (
        <div>
            <Banner />
            <CampCards />
            <UpcomingCamps />
            <Testimonials />
            <Faq />
            <AboutUs />
        </div>
    );
};

export default Home;