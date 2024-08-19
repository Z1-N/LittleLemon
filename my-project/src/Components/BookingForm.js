import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation schema
import { FaPhone, FaEnvelope, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { Input, DateTimePicker, Button } from 'react-rainbow-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const BookingForm = () => {
  const [submissionResult, setSubmissionResult] = useState(null);
  const navigate = useNavigate();
  const topRef = useRef(null);
    useEffect(() => {
        if (topRef.current) {
            window.scrollTo(0,0)
        }
    }, []);
  // Define the validation schema using Yup with custom validation for working hours
  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be digits only")
      .min(10, "Phone number must be at least 10 digits")
      .required('Phone number is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    appointment: Yup.date()
      .required('Appointment date and time is required')
      .test(
        'working-hours',
        'The selected day/time is outside of working hours (Mon-Fri: 9 AM - 12 PM, Sat: 10 AM - 12 PM, Sun: Closed)',
        (value) => {
          if (!value) return false; // If no date is selected, return false
          const selectedDate = new Date(value);
          const selectedDay = selectedDate.getDay();
          const selectedHour = selectedDate.getHours();

          // Check if the selected time is within working hours
          if (selectedDay === 0) {
            // Sunday: Closed
            return false;
          } else if (selectedDay >= 1 && selectedDay <= 5) {
            // Monday to Friday: 9 AM - 12 PM
            return selectedHour >= 9 && selectedHour < 24;
          } else if (selectedDay === 6) {
            // Saturday: 10 AM - 12 PM
            return selectedHour >= 10 && selectedHour < 24;
          }
          return false;
        }
      )
      .test(
        'future-date',
        'The selected date/time is in the past',
        (value) => {
          if (!value) return false; // If no date is selected, return false
          const selectedDate = new Date(value);
          const now = new Date();
          return selectedDate >= now;
        }
      ),
    guests: Yup.number()
      .min(1, 'At least 1 guest is required')
      .max(10, 'No more than 10 guests are allowed')
      .required('Number of guests is required'),
  });

  // Get the current date and the first and last day of the current month
  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const lastDayOfYear = new Date(now.getFullYear(), now.getMonth() + 12, 0);

  return (
    <div ref={topRef} className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white p-8 my-20 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Book a Table</h2>
        {submissionResult !== null && (
          <div className={`mb-4 p-4 rounded-lg ${submissionResult ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {submissionResult ? 'Form submitted successfully!' : 'We are Fully Booked! , Please try again.'}
          </div>
        )}
        <Formik
          initialValues={{ phone: '', email: '', appointment: '', guests: 1 }}
          validationSchema={validationSchema}  // Pass the validation schema
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              const isSuccess = Math.random() > 0.5;
              setSubmissionResult(isSuccess);
              setSubmitting(false);
              if (isSuccess) {
                navigate('/booking-details', { state: { booking: values } });
              }
            }, 400);
          }}
        >
          {({ isSubmitting, handleChange, setFieldValue, values }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                  <FaPhone className="inline mr-2 rotate-90 text-blue-500" /> Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                  value={values.phone}
                  onChange={handleChange}
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  <FaEnvelope className="inline mr-2 text-blue-500" /> Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="appointment" className="block text-gray-700 font-bold mb-2">
                  <FaCalendarAlt className="inline mr-2 text-blue-500" /> Reservation Date/Time
                </label>
                <DateTimePicker
                  id="appointment"
                  name="appointment"
                  className="w-full px-4 py-2  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                  value={values.appointment}
                  onChange={(value) => {
                    setFieldValue('appointment', value);
                  }}
                  locale="en-US"
                  minDate={firstDayOfMonth}
                  maxDate={lastDayOfYear}
                />
                <ErrorMessage name="appointment" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="guests" className="block text-gray-700 font-bold mb-2">
                  <FaUsers className="inline mr-2 text-blue-500" /> Number of Guests
                </label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  placeholder="Enter number of guests"
                  className="w-full px-4 py-2  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                  value={values.guests}
                  onChange={handleChange}
                />
                <ErrorMessage name="guests" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <Button
                type="submit"
                variant="brand"
                className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Booking...' : 'Book Now'}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BookingForm;