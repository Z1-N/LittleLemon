import React from 'react';
import chef  from '../Media/chef.jpg';
const AboutUs = () => {
    return (
        <div className='mt-20 mb-10 bg-slate-900 py-5 ' id='AboutUs'>
            <p className='text-white md:text-7xl text-5xl font-sans font-extrabold text-center'>About Us</p>
            <div className="grid grid-cols-2 gap-4 m-6 mt-10">
                <div>
                    <img className='rounded-3xl h-full w-full' src={chef} alt="About Us" />
                </div>
                <div>
                    <h2 className='font-sans  font-extrabold text-2xl md:text-4xl text-yellow-300 italic'>Our history</h2>
                    <p className='font-sans hidden md:block font-bold text-pretty md:text-base leading-relaxed mt-4 text-white truncate'>Little Lemon started in the heart of Dublin in 1987, founded by friends passionate about Mediterranean cuisine. They wanted to create a place where Chicagoans could enjoy authentic Mediterranean flavors from Greece, Italy, Turkey, and Lebanon.

Named for the fresh, zesty essence of the Mediterranean, Little Lemon uses the freshest ingredients and traditional methods. Our savory lamb kebabs, creamy hummus, and delicate baklava celebrate true Mediterranean flavors.

Our cozy atmosphere quickly made us a local favorite. From a humble eatery, we’ve grown into a beloved Chicago institution known for warm hospitality and memorable dining.

Today, Little Lemon thrives, staying true to its roots while embracing new culinary innovations. Join us and experience why Little Lemon is a cherished Chicago destination.</p>
    <p className='font-serif block text-xs md:hidden font-bold text-pretty leading-relaxed mt-2 text-white truncate'>Founded in 1987, Little Lemon brings authentic Mediterranean flavors to Chicago. Named for its fresh, zesty essence, we use the finest ingredients and traditional methods. Our cozy atmosphere and delicious dishes quickly made us a local favorite. Join us to experience why Little Lemon is a beloved Chicago destination.</p>
            </div>
            </div>
        </div>
    );
};

export default AboutUs;
