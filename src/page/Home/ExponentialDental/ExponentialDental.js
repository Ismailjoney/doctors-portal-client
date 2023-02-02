import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ExponentialDental = () => {
    return (
        <div className="hero  mt-32 ">
            <div className="hero-content flex-col justify-evenly lg:flex-row-reverse">
                <div className='lg:w-1/3 '>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Start</PrimaryButton>
                </div>
                <div className='lg:w-1/2 h-1/2 flex justify-center'>
                    <img src={treatment} className=" lg:w-1/2  rounded-lg  sm:w-full" alt="treatment" />
                </div>
            </div>
        </div>

    );
};

export default ExponentialDental;