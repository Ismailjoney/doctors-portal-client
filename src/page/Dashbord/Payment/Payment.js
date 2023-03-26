import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);
console.log(stripePromise)


const Payment = () => {
    const bookings = useLoaderData()
    const { treatment, price, appionmentDate, slot } = bookings;

    return (
        <div>
            <h2 className='text-3xl mb-5 font-bold'>Payment for {treatment}</h2>
            <p className="text-xl">Please Pay ${price} for  your appionment on {appionmentDate} time {slot}</p>
            <div className='w-96 my-16 border'>
                <Elements   stripe={stripePromise}>
                <CheckOutForm 
                bookings={bookings}
                />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;