'use client';
import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import MainCar from '../../images/hero/main-car.png';
import { RiArrowRightSLine } from 'react-icons/ri';
import { MdVerified } from 'react-icons/md';
import Modal from './modal';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Fragment>
        <section className='w-9/12 h-auto mx-auto'>
          <div className=''>
            <div className='w-full flex justify-center items-center mt-40 md:mb-32 ml-6 md:ml-0'>
              <div className='space-y-9'>
                <div className='space-y-4'>
                  <p className='md:text-2xl text-4xl font-extrabold'>
                    Plan your trip now
                  </p>
                  <p className='md:text-[45px] text-6xl font-extrabold'>
                    Save <span className='text-orange-600'>big </span>with our
                    <br /> car rental
                  </p>
                  <p className='md:text-sm text-lg text-black/50'>
                    Rent the car of your dream. Unbeatable prices.
                    <br /> Unlimited miles. <br /> Flexible pick-up options and
                    much more
                  </p>
                </div>
                <div className='banner-btn'>
                  <button onClick={() => setShowModal(true)}>
                    <div className='flex flex-row items-center'>
                      <span></span>
                      <p className='text-sm'>
                        {' '}
                        <b> Learn More</b>
                      </p>
                      <h1 className='mt-1 ml-4 text-xl'>
                        <MdVerified />
                      </h1>
                    </div>
                  </button>
                  <button onClick={() => setShowModal(true)}>
                    <div className='flex flex-row items-center'>
                      <span></span>
                      <p className='text-sm'>
                        {' '}
                        <b> About Us</b>
                      </p>
                      <p className='mt-1 ml-4 text-xl'>
                        <RiArrowRightSLine />
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <div className='xl:w-2/3 w-[31rem] lg:block hidden'>
                <Image alt='maincar_image' src={MainCar} />
              </div>
            </div>
          </div>
          <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
        </section>
      </Fragment>
    </>
  );
};

export default Hero;
