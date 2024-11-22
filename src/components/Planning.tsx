import React from 'react';

const Planning = () => {
  return (
    <section className='md:min-w-full min-w-[140%] mt-56 md:mt-0'>
      <div className='flex flex-col justify-center items-center gap-y-20'>
        <div className='text-center'>
          <p className='text-2xl font-semibold'>Plan your trip now</p>
          <p className='text-4xl font-extrabold'>Quick & easy car rental</p>
        </div>
        <div className='w-9/12 h-auto flex flex-row space-x-16 items-center justify-center'>
          <div className='flex flex-col justify-center items-center'>
            <img src='https://ik.imagekit.io/joel/icon1.png?updatedAt=1697709103482' />
            <p className='md:text-xl text-4xl font-semibold'>Select Car</p>
            <p className='text-black/60 md:text-[17px] text-2xl mt-3'>
              We offer a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src='https://ik.imagekit.io/joel/icon2.png?updatedAt=1697709103311' />
            <p className='md:text-xl text-4xl font-semibold'>
              Contact Operator
            </p>
            <p className='text-black/60 md:text-[17px] text-2xl mt-3'>
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src='https://ik.imagekit.io/joel/icon3.png?updatedAt=1697709103320' />
            <p className='md:text-xl text-4xl font-semibold'>Let us Drive</p>
            <p className='text-black/60 md:text-[17px] text-2xl mt-3'>
              Wheither you are hitting any road. We have got you covered with
              our wide range of cars.
            </p>
          </div>
        </div>
      </div>
      <hr className='mt-20' />
    </section>
  );
};

export default Planning;
