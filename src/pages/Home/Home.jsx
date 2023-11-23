import React from 'react';
import Banner from '../../components/Banner/Banner';
import PopularCamps from '../../components/PopularCamps/PopularCamps';
import Testimonials from '../../components/Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Banner />
            <PopularCamps />
            <Testimonials />
        </div>
    );
};

export default Home;