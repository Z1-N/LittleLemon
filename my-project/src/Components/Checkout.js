import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    // Generate a random order ID
    const orderId = Math.floor(Math.random() * 1000000);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold text-green-500 mb-4">Order Placed!</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiL2w6jyGh099435wOYU8n2Z1manEQTtX1fQ&s" alt="Order Placed" className="w-50 h-50 mx-auto rounded-full  mb-4" />
                <p className="text-lg mb-4">Your order with ID <span className="font-bold">#{orderId}</span> has been placed successfully.</p>
                <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Checkout;