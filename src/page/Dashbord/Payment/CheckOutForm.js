import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({ bookings }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('')
  const [sucess, setSucess] = useState('')
  const [processing, setProcessing] = useState(false)
  const [transitionId, setTransitionId] = useState('')
  const [clientSecret, setClientSecret] = useState("");
  const { price, email, patient,_id } = bookings



  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://doctors-portal-server-chi-teal.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem('userToken')}`
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);


  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (elements == null) {
      return;
    }


    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });



    if (error) {

      setCardError(error.message)
    }
    else {
      setCardError('');
    }

    setSucess('')
    setProcessing(true)

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      },
    );

    if (confirmError) {
      setCardError(confirmError.message)
      return;
    }

    if (paymentIntent.status === "succeeded") {
      console.log('card info', card)
      const payment = {
        price,
        transitionId : paymentIntent.id,
        email,
        bookingId : _id
      }

      fetch('https://doctors-portal-server-chi-teal.vercel.app/payments', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${localStorage.getItem('userToken')}`
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.insertedId) {
            setSucess(`Congratulation Your payment Sucess`)
            setTransitionId(paymentIntent.id)
          }
        })
    }
    setProcessing(false)
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />

        <button className='btn btn-sm btn-primary my-4'
          type="submit"
          disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      <p className='text-red-500 font-bold mt-2'>{cardError}</p>
      {
        sucess && <div>
          <p className='text-bold text-green-400'>{sucess}</p>
          <p >Your transitionId:<span className='text-bold text-green-400'>{transitionId}</span></p>
        </div>
      }
    </>
  );
};

export default CheckOutForm;