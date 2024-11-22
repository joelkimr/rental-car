import React from 'react';
import { LogoSlider } from './Logos';
import { SearchPanelWrapper } from './search-panel-wrapper';
const Booking = () => {
  return (
    <>
      <section className='mt-9'>
        <div className='w-9/12 mx-auto flex flex-col space-y-9'>
          <div className=''>
            <p className='font-extrabold md:text-2xl text-4xl mb-6'>
              Book a Car
            </p>
          </div>
          <div>
            <SearchPanelWrapper />
          </div>
        </div>
        <div className='py-48 w-9/12 mx-auto'>
          <div className='relative h-12 min-h-12 overflow-x-hidden'>
            <div className="before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[30%] before:bg-gradient-to-r before:from-orange-200 before:content-['']"></div>
            <div className="after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[30%] after:bg-gradient-to-l after:from-orange-200 after:content-['']"></div>
            <div className='flex h-full items-center justify-center'>
              <LogoSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
