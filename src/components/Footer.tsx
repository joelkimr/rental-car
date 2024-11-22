import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Services',
      links: [
        'Car Rentals',
        'Insurance Options',
        'Corporate Rentals',
        'Special Offers',
        'FAQs',
      ],
    },
    {
      title: 'Resources',
      links: [
        'Help Center',
        'Privacy Policy',
        'Terms of Service',
        'Accessibility',
        'Vehicle Guides',
      ],
    },
    {
      title: 'Company',
      links: [
        'About',
        'Contact Us',
        'Blog',
        'Partners',
        'Customers',
        'Careers',
        'Press',
      ],
    },
    {
      title: 'Social',
      links: ['Youtube', 'Twitter', 'Instagram', 'Facebook'],
    },
  ];

  return (
    <>
      <section className='bg-black'>
        <div className='w-9/12 mx-auto flex md:flex-row flex-col justify-between mt-20 pt-20 pb-12 space-x-20 text-white'>
          <div className='md:w-1/3 w-full'>
            <h2 className=' text-white md:text-2xl text-xl'>
              <span className='md:text-4xl text-6xl font-extrabold text-primary'>
                CAR
              </span>{' '}
              Rental
            </h2>
            <p className='mt-4 mb-4 md:text-sm text-2xl text-neutral-500'>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
            <p className='md:text-sm text-2xl text-neutral-500 mt-16'>
              + (07) 234 567 89
            </p>
            <p className='md:text-sm text-2xl text-neutral-500'>
              carrental.io47@gmail.com
            </p>
          </div>
          <div className='col-span-full grid grid-cols-12 gap-x-9 gap-y-11 md:col-span-9'>
            {footerLinks.map((section) => (
              <ul
                key={section.title}
                className='col-span-6 flex flex-col gap-3 md:col-span-3 lg:gap-3'
              >
                <div className='pb-1.5'>
                  <h2 className='whitespace-nowrap text-balance font-semibold leading-none text-neutral-950'>
                    {section.title}
                  </h2>
                </div>
                {section.links.map((link) => (
                  <li
                    key={link}
                    className='text-neutral-600 hover:text-white/90 ease-in-out duration-300'
                  >
                    <button className='h-auto text-balance rounded-none p-0 text-[13px] font-normal leading-none sm:text-[13px]'>
                      <a href='#'>{link}</a>
                    </button>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
