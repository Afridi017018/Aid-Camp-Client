import React from 'react';

const Testimonials = () => {
  return (
    <div className='px-10 my-10'>
      <div>
      <h2 className="text-3xl font-bold mt-12 mb-3 text-center">Testimonials</h2>
      </div>
      <div className="carousel w-full h-52 border shadow-2xl">
        <div id="slide1" className="carousel-item relative w-full">
          {/* <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" /> */}
          <div className="w-full flex flex-col justify-center items-center">
            <p>1ggg</p>
            <p>hiii</p>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <div className="w-full flex flex-col justify-center items-center">
            <p>2ggg</p>
            <p>hiii</p>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className="w-full flex flex-col justify-center items-center">
            <p>3ggg</p>
            <p>hiii</p>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
