import React from 'react';
const products = [
    {
        id: 1,
        imageAlt: "Alfredo Pasta",
        imageSrc: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFsZnJlZG8lMjBwYXN0YXxlbnwwfHwwfHx8MA%3D%3D",
        name: "Alfredo Pasta",
        color: "Red",
        price: "$10.99",
        href: "path/to/product1"
    },
    {
        id: 2,
        imageAlt: "Italian Pizza",
        imageSrc: "https://plus.unsplash.com/premium_photo-1690056321997-0f2dd5638ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SXRhbGlhbiUyMFBpenphfGVufDB8fDB8fHww",
        name: "Italian Pizza",
        color: "Blue",
        price: "$12.99",
        href: "path/to/product2"
    },
    {
        id: 3,
        imageAlt: "Mediteranean Salad",
        imageSrc: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1lZGl0ZXJhbmVhbiUyMFNhbGFkfGVufDB8fDB8fHww",
        name: "Mediteranean Salad",
        color: "Green",
        price: "$8.99",
        href: "path/to/product3"
    },
    {
        id: 4,
        imageAlt: "Fresh Mussles",
        imageSrc: "https://plus.unsplash.com/premium_photo-1707227205170-4ab011433b9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnJlc2glMjBNdXNzbGVzJTIwU291cHxlbnwwfHwwfHx8MA%3D%3D",
        name: "Fresh Mussles",
        color: "Yellow",
        price: "$14.99",
        href: "path/to/product4"
    },
    {
        id: 5,
        imageAlt: "Cheese Soup with Prawns",
        imageSrc: "https://plus.unsplash.com/premium_photo-1668143364104-b8fe599d835e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hlZXNlJTIwU291cCUyMHdpdGglMjBQcmF3bnN8ZW58MHx8MHx8fDA%3D",
        name: "Cheese Soup with Prawns",
        color: "Purple",
        price: "$9.99",
        href: "path/to/product5"
    },
    {
        id: 6,
        imageAlt: "Cesar Salad",
        imageSrc: "https://images.unsplash.com/photo-1704224991701-146f8edae1ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2VzYXIlMjBTYWxhZHxlbnwwfHwwfHx8MA%3D%3D",
        name: "Cesar Salad",
        color: "Orange",
        price: "$11.99",
        href: "path/to/product6"
    },
      {
            id: 7,
            imageAlt: "Grilled Chicken",
            imageSrc: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEdyaWxsZWQlMjBDaGlja2VufGVufDB8fDB8fHww",
            name: "Grilled Chicken",
            color: "Brown",
            price: "$13.99",
            href: "path/to/product7"
        },
        {
            id: 8,
            imageAlt: "Vegetable Stir Fry",
            imageSrc: "https://images.unsplash.com/photo-1543826173-1beeb97525d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VmVnZXRhYmxlJTIwU3RpciUyMEZyeXxlbnwwfHwwfHx8MA%3D%3D",
            name: "Vegetable Stir Fry",
            color: "Green",
            price: "$9.99",
            href: "path/to/product8"
        }
];

const MenuCards = () => {
    return (
        <div className='w-full bg-slate-900 md:py-10 py-3' id='Menu'>
        <h1 className='mx-4 p-3 text-5xl md:text-7xl font-sans  text-center font-extrabold italic text-white'>Our Menu</h1>
        <div className="mt-6 md:my-3 grid  grid-cols-2 md:mx-auto gap-y-5 mx-3 md:grid-cols-1 gap-x-6 md:gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
         {products.map((product) => (
            <div key={product.id} className="group mx-3 relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-xs md:text-base mx-1 text-white font-bold font-sans">
                    <a href={product.href}>
                      <h3 aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-white">{product.price}</p>
              </div>
              <button className=' text-center transition transform hover:-translate-y-1 duration-300 ease-linear motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-white  md:my-2 bg-[#F4CE14] text-xs md:text-base font-bold w-full md:absolute'>Add to Cart</button>
        </div>))}
        </div>
        </div>
    );
};

export default MenuCards;