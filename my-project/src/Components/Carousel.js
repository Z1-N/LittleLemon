import React, { useState , useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


function Carousel() {
  const slides = [
    {
      url: 'https://www.westernliving.ca/wp-content/uploads/AHID-KAMA-High-Res-005-1282x727.jpg',
      description: 'Indulge in the rich and diverse flavors of the Mediterranean. Our menu features authentic dishes crafted with the finest ingredients, from savory falafel to succulent lamb kebabs. Savor the essence of the Mediterranean with every bite.',
      title : 'Experience the Taste of Tradition'
    },
    {
      url: 'https://static.toiimg.com/photo/84895387.cms',
      description: 'We believe in the power of fresh, wholesome ingredients. Our dishes are prepared using locally sourced produce, lean proteins, and heart-healthy olive oil. Enjoy a dining experience thats as healthy as it is delicious.',
      title : 'Nourish Your Body and Soul'
    },
    {
      url: 'https://www.mumbailive.com/images/media/images/images_1562569840671_Delicous_Lebanese_Cuisine_at_the_event.jpg',
      description: 'Dine in Style and Comfort Our restaurant offers a warm and inviting atmosphere perfect for any occasion. Whether its a family gathering, a romantic dinner, or a casual lunch with friends, Mediterranean Delights is the ideal spot to create lasting memories.',
      title : 'Elegant Ambiance for Every Occasion'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='md:max-w-[1400px] mt-5 md:h-[680px] max-w-[640px] h-[480px] w-full py-16 px-4 relative group '>
      <div className='absolute  z-10 text-white font-sans  font-semibold md:text-5xl text-3xl text-balance indent-4 mx-4 break-words   overflow-hidden leading-relaxed md:top-1/3 top-28 '>{slides[currentIndex].title}</div>
      <div className='absolute  z-10 text-white font-sans   md:text-3xl sm:text-lg text-balance indent-4 mx-4 break-words  overflow-hidden leading-relaxed md:bottom-1/3 bottom-1/4 '>{slides[currentIndex].description}</div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 text-white text-center text-4xl font-serif font-bold relative z-0 brightness-50'
      ></div>
      
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute z-20 top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute z-20 top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled className={`${slideIndex === currentIndex ? 'text-yellow-300' : 'text-white'}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;