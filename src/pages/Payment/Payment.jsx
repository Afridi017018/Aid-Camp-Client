import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom/dist';
import useAxios from '../../hooks/useAxios';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const axios = useAxios();
    const { id } = useParams();

    const getSingleRegCamp = async () => {
        const res = await axios.get(`/api/join/get-single-reg-camp/${id}`)
        return res;
    }

    const { data, isLoading } = useQuery({
        queryKey: ["singleCampInfo", id],
        queryFn: getSingleRegCamp
    })

    if (isLoading) {
        return <Loading />
    }

    // console.log(data.data.data)

    return (
        <div className="px-20">

            <Helmet>
                <title>Aid Camp | Payment</title>
            </Helmet>

            <div className='text-center my-5 text-2xl font-bold underline underline-offset-8 text-gray-600'>Make Payment</div>
            <div className='my-44'>

                <Elements stripe={stripePromise}>
                    <CheckoutForm regDetails={data.data.data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;