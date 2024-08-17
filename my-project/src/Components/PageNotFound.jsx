import React from 'react';
import { useNavigate } from 'react-router-dom';
const Error404Page = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="text-2xl text-gray-600">Oops! Page not found.</p>
            <button onClick={() => navigate("/")} className="px-4 py-2 mt-4 text-lg font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
                Go back to Home
            </button>
        </div>
    );
};

export default Error404Page;