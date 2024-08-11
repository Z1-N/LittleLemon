import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

const ContactUs = () => {
    return (
      <div className="my-20 bg-slate-900 py-5" id="ContactUs">
        <h1 className='md:text-7xl text-5xl font-bold font-sans text-center text-white italic'>Contact Us</h1>
<div className='grid md:grid-cols-2 gap-4 m-6 mt-10 grid-cols-1'>
  <div>
    <div className='grid grid-cols-1 gap-4 mt-4'>
      <div className='bg-white p-4 rounded-lg shadow-md flex'>
        <div className="basis-2/12">
          <FaPhoneAlt className='md:text-5xl text-3xl  ' />  
        </div>
        <div className="basis-10/12">
        <h2 className='text-xl font-bold'> Phone </h2>
        <p className='text-gray-600'>011-784-3366</p>
        </div>
      </div>
      <div className='bg-white p-4 rounded-lg shadow-md flex'>
        <div className="basis-2/12">
        <IoIosMail className='md:text-5xl text-3xl  bg-white'  />
        </div>
        <div className="basis-10/12">
        <h2 className='text-xl font-bold'>Email</h2>
        <p className='text-gray-600'>info@littlelemon.com</p>
        </div>
      </div>
    </div>
  <div>
    <div className='bg-white p-4 rounded-lg mt-4 shadow-md flex'>
      <div className="basis-2/12">
        <FaMapMarkedAlt className='md:text-5xl text-3xl ' />
      </div>
      <div className="basis-10/12">
      <h2 className='text-xl font-bold'>Address</h2>
      <p className='text-gray-600 text-sm'>Royal Hibernian Way, Duke Lane Upper, Dublin, D02 K772</p>
      </div>
    </div>
    <div className='bg-white p-4 rounded-lg shadow-md mt-4 flex'>
      <div className="basis-2/12">
        <MdAccessTimeFilled className='md:text-5xl text-3xl ' />
      </div>
      <div className="basis-10/12">
      <h2 className='text-xl font-bold'>Opening Hours </h2>
      <p className='text-gray-600'>Monday - Friday: 9AM - 12PM</p>
      <p className='text-gray-600'>Saturday: 10AM - 12PM</p>
      <p className='text-gray-600'>Sunday: Closed</p>
      </div>
    </div>
    </div>
  </div>
  <div className="flex border-2 rounded-lg mt-4">
  <iframe className="basis-full" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Little%20Lemon,%2019/20%20Royal%20Hibernian%20Way,%20Duke%20Lane%20Upper,%20Dublin%202%20Dublin%202,%20Dublin,%20D02%20K772,%20Ireland+(Little%20Lemon)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
  </div>
</div>
</div>
    );
};

export default ContactUs;