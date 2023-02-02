import React from 'react';
import Banner from '../Banner/Banner';
import ExponentialDental from '../ExponentialDental/ExponentialDental';
import Infocards from '../InfoCards/Infocards';
import MakeAppionment from '../MakeAppionment/MakeAppionment';
import ServicesCard from '../ServicesCard/ServicesCard';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Infocards></Infocards>
            <ServicesCard></ServicesCard>
            <ExponentialDental></ExponentialDental>
            <MakeAppionment></MakeAppionment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;