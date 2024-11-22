import React from 'react';

const Banner = () => {
  return (
    <>
      <section className='md:min-w-full min-w-[150%] h-auto flex bg-[#0c0c0c] p-[3rem] text-center mt-9'>
        <div className='container'>
          <div className='flex flex-col gap-[1.5rem] text-white'>
            <h2 className='md:text-4xl text-5xl font-extrabold'>
              Save big with our cheap car rental!
            </h2>
            <p className='font-bold md:text-xl text-2xl'>
              Top Airports. Local Suppliers.
              <span className='text-primary'>24/7</span> Support.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
