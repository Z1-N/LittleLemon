import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useEffect ,useRef } from 'react';


const Checkout = () => {
    const topRef = useRef(null);
    useEffect(() => {
        if (topRef.current) {
            window.scrollTo(0,0)
        }
    }, []);
    const location = useLocation();
    const { confirmation } = location.state || {};

    // Generate a random order ID
    const orderId = Math.floor(Math.random() * 1000000);

    return (
        <div ref={topRef} className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 mt-10">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
                {confirmation ? (
                    <div className='bg-white w-full h-full p-5 rounded-md'>
                        <h1 className="text-3xl font-bold text-green-500 mb-4">Order Placed!</h1>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiL2w6jyGh099435wOYU8n2Z1manEQTtX1fQ&s" alt="Order Placed" className="w-50 h-50 mx-auto rounded-full mb-4" />
                        <p className="text-lg mb-4">Your order with ID <span className="font-bold">#{orderId}</span> has been placed successfully.</p>
                    </div>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold text-red-500 mb-4">Order Failed!</h1>
                        <img src="https://img.freepik.com/premium-vector/3d-realistic-red-cross-checkmark-sign-vector-illustration_156780-158.jpg" className='h-4/6 w-4/6 mx-auto -mt-4' alt="X" />
                        <p className="text-lg mb-4">Unfortunately, your order could not be processed. Please try again.</p>
                    </>
                )}
                <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Checkout;