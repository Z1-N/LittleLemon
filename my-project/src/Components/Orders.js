import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { useState } from 'react';
import { useCart } from '../Context/CartContext';
import Button from './Button';
import { useNavigate } from 'react-router-dom';


    const Orders = () => {
        
        const { cartList , addItem  , updateCart , deleteItem , decrementQuantity , getCartCount} = useCart();
        const [customerOrders, setCustomerOrders] = useState(cartList);
        const navigate = useNavigate();

       const handleIncrement = (orders) => {
        updateCart(orders.id ,orders.quantity ); // Update the cart context
        addItem(orders); // Update the cart context
        setCustomerOrders(prevOrders => {
            return prevOrders.map(order => {
                if (order.id === orders.id) {
                    return { ...order, quantity: order.quantity + 1 };
                }
                return order;
            });
        });
    };
    

    const handleDecrement = (order) => {
        updateCart(order.id , order.quantity);
        decrementQuantity(order.id)
        setCustomerOrders(prevOrders => {
            const updatedOrders = prevOrders.map(o => {
                if (o.id === order.id && o.quantity > 1) {
                    return { ...o, quantity: o.quantity - 1 };
                }
                return o;
            });
            if (order.quantity === 1) {
                deleteItem(order.id); // Update the cart context
                return updatedOrders.filter(o => o.id !== order.id);
            }
                 // Update the cart context with the entire updated orders array
            return updatedOrders;
        });
    };


    const handleTrash = (order) => {
        updateCart(order.id , order.quantity)
        setCustomerOrders(prevOrders => {
            deleteItem(order.id); // Update the cart context
            return prevOrders.filter(o => o.id !== order.id);
        });

    };

        return (
            <div className="bg-[#495E57] p-4">
                <h2 className="md:text-3xl text-2xl  font-bold text-white mt-28 mb-4">My Orders</h2>
                <hr className='mb-10 -mt-3 w-1/5 text-grey-200'></hr>
                {customerOrders.length === 0 ? (
                    <div className="text-center text-xl my-40">
                        <p className='text-white'>Your Order List is empty.</p>
                        <div className="mr-8 mt-4">
                            <Button link={"/#Menu"}>
                                Go to Menu
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-3 bg-slate-900 rounded-lg p-5">
                        <div className="col-span-1 gap-y-3">
                        {customerOrders.map((order) => (
                            <div className='my-3'>
                            <div key={order.id} className="bg-white rounded-lg shadow-md p-4">
                                <div className='grid grid-cols-2'>
                                    <div className='container'>
                                <p className="text-lg font-bold mb-2">{order.name}</p>
                                <p className="text-gray-500 font-bold ">${order.price}</p>
                                    </div>
                                <img src={order.imageSrc} alt={order.imageAlt} className=" aspect-[120/119] h-[96px] rounded-md justify-self-end" />
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center bg-gray-100 rounded-md px-2">
                                        <FaMinus onClick={() => handleDecrement(order)} className="text-red-500 cursor-pointer" />
                                        <p className="mx-2">{order.quantity}</p>
                                        <FaPlus onClick={() => handleIncrement(order)} className="text-green-500 cursor-pointer" />
                                    </div>
                                    <button onClick={() => handleTrash(order)} className="text-red-500 cursor-pointer" >Remove <FaTrash className='inline ml-2'/></button> 
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                        <div className="mt-4 bg-white rounded-md col-span-1 flex flex-col h-fit p-3">
                            <h3 className="md:text-3xl text-lg font-bold  w-fit rounded-md ">Order Summary</h3>
                            <div className="flex justify-between mt-4">
                                <p className="text-lg font-semibold">Items</p>
                            </div>
                            <div className="flex flex-col gap-3 bg-gray-100 shadow-md p-3 rounded-md">
                                {customerOrders.map((order) => (
                                    <div key={order.id} className="flex justify-between ">
                                        <p>{order.name}</p>
                                        <p className='font-semibold mr-1'>x {order.quantity}</p>
                                    </div>
                                ))}
                                <div className='flex justify-between'>
                                <p className=''>Total:</p>
                                <p className="mr-1 font-semibold">{customerOrders.reduce((acc, order) => acc + order.quantity, 0)}</p>
                                </div>
                            </div>
                            
                            <div className="flex justify-between mt-4">
                                <p className="text-lg font-semibold">Total:</p>
                                <p className="text-lg font-semibold">${(customerOrders.reduce((acc, order) => acc + order.price * order.quantity, 0)).toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <p className="text-lg font-semibold">VAT Tax:</p>
                                <p className="text-lg font-semibold">${((customerOrders.reduce((acc, order) => acc + order.price * order.quantity, 0))*0.05).toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <p className="text-lg font-semibold">Delivery:</p>
                                <p className="text-lg font-semibold">${getCartCount() > 3 ? "5.00" : "0.00"} </p>
                            </div>
                            <hr className='my-4'></hr>
                            <div className="flex justify-between mt-4">
                                <p className="text-lg font-semibold">Grand Total:</p>
                                <p className="text-lg font-semibold">${((customerOrders.reduce((acc, order) => acc + order.price * order.quantity, 0) + (getCartCount() > 3 ? 5.00 : 0.00) +(customerOrders.reduce((acc, order) => acc + order.price * order.quantity, 0))*0.05)).toFixed(2)}</p>
                            </div>

                            <div className='mt-auto'>
                             <button
                                onClick={() => navigate('/Checkout')}
                                class="flex items-center mt-5 bg-red-500 gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-red-700"
                                type="button">
                                Place The Order
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        );
    };

export default Orders;