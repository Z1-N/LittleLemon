import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const BookingDetails = () => {
  const location = useLocation();
  const { booking } = location.state || {};
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div ref={topRef} className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white p-8 my-20 rounded-lg shadow-lg">
        {booking ? (
          <>
            <h1 className='text-2xl font-bold mb-6 text-center text-green-400'>Thank You!!<br />Booking Confirmed</h1>
            <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" alt="Done" className='aspect-1' />
            <p className='text-center'><strong>Name:</strong> {booking.name}</p>
            <p className='text-center'><strong>Phone:</strong> {booking.phone}</p>
            <p className='text-center'><strong>Email:</strong> {booking.email}</p>
            <p className='text-center'><strong>Date And Time:</strong> {new Date(booking.appointment).toLocaleString()}</p>
            <p className='text-center'><strong>Guests:</strong> {booking.guests}</p>
          </>
        ) : (
          <h1 className='text-2xl font-bold mb-6 text-center text-red-500'>Please Book A Table</h1>
        )}
      </div>
    </div>
  );
};

export default BookingDetails;