import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../hooks/useAxios';
import Loading from '../../pages/Loading/Loading';

const Testimonials = () => {
  const axios = useAxios();

  const getFeedbacks = async () => {
    const res = await axios.get('/api/feedback/get-feedbacks');
    return res;
  }

  const { data, isLoading } = useQuery({
    queryKey: ['feedbacks'],
    queryFn: getFeedbacks
  })

  if (isLoading) {
    <Loading />
  }



  return (

    <div>
      {
        data?.data?.data?.length > 0 &&
        <div className='px-10 my-10'>
          <div>
            <h2 className="text-3xl font-bold mt-12 mb-3 text-center">Testimonials</h2>
          </div>
          <div className="carousel w-full h-80 border shadow-2xl">
            {
              data?.data?.data[1] &&
              <div id="slide1" className="carousel-item relative w-full">
                <div className="w-full flex flex-col justify-center items-center">
                  <p className='font-bold text-2xl'>{data?.data.data[0].participant}</p>
                  <p className='text-xs font-bold text-gray-600'>{data?.data?.data[0]?.campId.name}</p>

                  {data?.data.data[0].rating === 1 && <p className='text-2xl font-bold text-orange-500'>★</p>}
                  {data?.data.data[0].rating === 2 && <p className='text-2xl font-bold text-orange-500'>★ ★</p>}
                  {data?.data.data[0].rating === 3 && <p className='text-2xl font-bold text-orange-500'>★ ★ ★</p>}
                  {data?.data.data[0].rating === 4 && <p className='text-2xl font-bold text-orange-500'>★ ★ ★ ★</p>}
                  {data?.data.data[0].rating === 5 && <p className='text-2xl font-bold text-orange-500'>★ ★ ★ ★ ★</p>}


                  <p className='w-2/4 mt-5 text-center text-gray-500 font-bold'>❝ {data?.data.data[0].feedback} ❞</p>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
              </div>
            }

            {
              data?.data?.data[1] &&
              <div id="slide2" className="carousel-item relative w-full">
                <div className="w-full flex flex-col justify-center items-center">
                  <p className='font-bold text-2xl'>{data?.data.data[1].participant}</p>
                  <p className='text-xs font-bold text-gray-600'>{data?.data.data[1].campId.name}</p>

                  {data?.data.data[1].rating === 1 && <p className='text-2xl font-bold text-orange-500'>★</p>}
                  {data?.data.data[1].rating === 2 && <p className='text-2xl font-bold text-orange-500'>★ ★</p>}
                  {data?.data.data[1].rating === 3 && <p className='text-2xl font-bold text-orange-500'>★ ★ ★</p>}
                  {data?.data.data[1].rating === 4 && <p className='text-2xl font-bold text-orange-500'>★ ★ ★ ★</p>}
                  {data?.data.data[1].rating === 5 && <p className='text-2xl font-bold text-orange-500'>★ ★ ★ ★ ★</p>}


                  <p className='w-2/4 mt-5 text-center text-gray-500 font-bold'>❝ {data?.data.data[1].feedback} ❞</p>

                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a>
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div>
            }

            {
              data?.data?.data[2] &&
              <div id="slide3" className="carousel-item relative w-full">
                <div className="w-full flex flex-col justify-center items-center">
                  <div className="w-full flex flex-col justify-center items-center">
                    <p className='font-bold text-2xl'>{data?.data.data[2].participant}</p>
                    <p className='text-xs font-bold text-gray-600'>{data?.data?.data[1].campId.name}</p>

                    {data?.data.data[2].rating === 1 && <p className='text-2xl font-bold text-orange-500'>★</p>}
                    {data?.data.data[2].rating === 2 && <p className='text-2xl font-bold text-orange-500'>★ ★</p>}
                    {data?.data.data[2].rating === 3 && <p className='text-2xl font-bold text-orange-500'>★ ★ ★</p>}
                    {data?.data.data[2].rating === 4 && <p className='text-2xl font-bold text-orange-500'>★ ★ ★ ★</p>}
                    {data?.data.data[2].rating === 5 && <p className='text-2xl font-bold text-orange-500'>★ ★ ★ ★ ★</p>}


                    <p className='w-2/4 mt-5 text-center text-gray-500 font-bold'>❝ {data?.data.data[2].feedback} ❞</p>

                  </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a>
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div>
            }

          </div>
        </div>
      }
    </div>

  );
};

export default Testimonials;
