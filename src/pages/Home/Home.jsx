import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutUs from '../../components/AboutUs/AboutUs';
import Banner from '../../components/Banner/Banner';
import CampCards from '../../components/CampCards/CampCards';
import Faq from '../../components/Faq/Faq';
import Testimonials from '../../components/Testimonials/Testimonials';
import UpcomingCamps from '../../components/UpcomingCamps/UpcomingCamps';


const Home = () => {


    return (
        <div className='bg-gradient-to-r from-cyan-200 to-blue-300'>

            <Helmet>
                <title>Aid Camp | Home</title>
            </Helmet>

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