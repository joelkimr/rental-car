import React from 'react';
import Image from 'next/image';
import sarah from '../images/testimonials/sarah.jpg';
import mark from '../images/testimonials/mark.jpg';
import james from '../images/testimonials/james.jpg';
import alex from '../images/testimonials/alex.jpg';
import david from '../images/testimonials/david.jpg';
import jennifer from '../images/testimonials/jennifer.jpg';
import emily from '../images/testimonials/emily.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { FilledStarIcon } from './ui/filled-star';

const Testimonials = () => {
  const testimonials = [
    {
      id: 't01',
      name: 'Sarah J.',
      image_url: sarah,
      comment:
        "Absolutely seamless experience! Booking was quick, and the car was in perfect condition. I'll definitely use this service again.",
      rating: 5,
    },
    {
      id: 't02',
      name: 'Mark T.',
      image_url: mark,
      comment:
        'Great selection of vehicles and very affordable rates. The customer service team was incredibly helpful when I needed to make changes to my reservation.',
      rating: 5,
    },
    {
      id: 't03',
      name: 'James L.',
      image_url: james,
      comment:
        'The navigation tools were a lifesaver! They made it so easy to explore the city without getting lost. Highly recommended!',
      rating: 5,
    },
    {
      id: 't04',
      name: 'Alex P.',
      image_url: alex,
      comment:
        'Fantastic service! The car was clean, well-maintained, and the pickup process was a breeze. I’ll be using this service for all my future trips.',
      rating: 5,
    },
    {
      id: 't05',
      name: 'David S.',
      image_url: david,
      comment:
        'Great value for money! The booking process was quick, and the customer support was responsive. Overall, a very positive experience.',
      rating: 5,
    },
    {
      id: 't06',
      name: 'Jennifer K.',
      image_url: jennifer,
      comment:
        'The rental experience was smooth and hassle-free. The car was in great condition, and the rates were competitive. Would definitely recommend.',
      rating: 4,
    },
    {
      id: 't07',
      name: 'Emily R.',
      image_url: emily,
      comment:
        'I was a bit nervous about renting a car, but the process was so easy and transparent. I felt very secure with their insurance coverage.',
      rating: 4,
    },
  ];
  return (
    <>
      <section className=''>
        <div className='w-9/12 mx-auto space-y-28 mb-20'>
          <div className='w-full flex flex-col justify-center items-center space-y-3 mt-32'>
            <p className='md:text-2xl text-3xl font-semibold'>
              Reviewed by People
            </p>
            <p className='md:text-4xl text-5xl font-extrabold'>
              Client{`'`}s Testimonials
            </p>
            <p className='w-9/12 text-black/70 text-center md:text-[15px] text-[22px]'>
              {' '}
              Discover the positive impact we{`'`}ve made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they{`'`}re eager to share their
              positive experiences with you.
            </p>
          </div>
          <div className='pt-6 lg:pt-0'>
            <div className='relative'>
              <div className="before:absolute before:-left-1 before:top-0 before:z-10 before:h-full before:w-[7%] before:bg-gradient-to-r before:from-white before:content-[''] lg:before:-left-16 lg:before:w-[10%]"></div>
              <Carousel>
                <CarouselContent className='m-0 space-x-4 lg:space-x-6'>
                  {testimonials.map(
                    ({ id, name, comment, image_url, rating }) => {
                      return (
                        <CarouselItem
                          key={id}
                          className='p-0 sm:basis-1/2 md:basis-1/3 xl:basis-1/4'
                        >
                          <figure className='rounded-2xl bg-neutral-100 p-8'>
                            {/* Rating Section */}
                            <div
                              className='flex items-center'
                              aria-label={`Rating: ${rating} out of 5`}
                            >
                              {[...Array(rating)].map((_, index) => (
                                <FilledStarIcon
                                  key={index}
                                  className='text-yellow-300'
                                />
                              ))}
                            </div>
                            <div className='pt-4'>
                              {/* Comment Section */}
                              <blockquote className='text-balance text-[14px] leading-[23px] text-neutral-500 sm:text-[15px] sm:leading-normal md:leading-[26px] lg:text-[15px]'>
                                “{comment}”
                              </blockquote>
                            </div>
                            <div className='pt-8'>
                              {/* Reviewer Information */}
                              <figcaption className='flex items-center gap-2.5'>
                                <Image
                                  src={image_url}
                                  alt={name}
                                  className='rounded-full'
                                  width={25}
                                  height={25}
                                />
                                <p className='text-[15px] font-bold text-neutral-700'>
                                  {name}
                                </p>
                              </figcaption>
                            </div>
                          </figure>
                        </CarouselItem>
                      );
                    }
                  )}
                </CarouselContent>
                <CarouselPrevious className='-left-4 z-20 lg:-left-12' />
                <CarouselNext className='-right-4 z-20 lg:-right-12' />
              </Carousel>
              <div className="after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[7%] after:bg-gradient-to-l after:from-white after:content-[''] lg:after:-right-12 lg:after:w-[9%]"></div>
            </div>
          </div>
        </div>
        <hr />
      </section>
    </>
  );
};

export default Testimonials;
