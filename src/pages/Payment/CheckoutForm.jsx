import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';

const CheckoutForm = ({ regDetails }) => {

    // console.log(regDetails.campId.fees)

    const axios = useAxios();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');

    const stripe = useStripe();
    const elements = useElements();



    useEffect(() => {
        if (regDetails.campId.fees > 0) {
            axios.post('/api/join/create-payment-intent', { price: regDetails.campId.fees })
                .then(res => {
                    // console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axios, regDetails.campId.fees])



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('payment error', error);
            setError(error.message);
        }

        else {
            // console.log('payment method', paymentMethod)
            setError('');
        }




        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }


        else {
            // console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                // console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // // now save the payment in the database
                const payment = {

                    joinId: regDetails._id,
                    transaction: paymentIntent.id,
                    payment_status: "paid"

                }

                const res = await axios.put('/api/join/update-join-reg', payment);
                // console.log('payment saved', res.data);

                Swal.fire({
                    title: "Payment Successful!",
                    text: `Transaction Id: ${paymentIntent.id}`,
                    icon: "success"
                });
                navigate('/dashboard/payment-history')


            }
        }








    }

    return (

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
            <div className='my-10'>
                <button className=" w-full px-4 py-1 bg-blue-600 text-white rounded" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
            <p className="text-red-600">{error}</p>

        </form>

    );
};

export default CheckoutForm;