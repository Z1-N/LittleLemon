import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BookingForm from "./Components/BookingForm";
import { Routes , Route} from "react-router-dom";
import Page from "./Components/Page";
import Orders from "./Components/Orders";
import PageNotFound from "./Components/PageNotFound";
import { CartProvider } from './Context/CartContext';
import Checkout from "./Components/Checkout";
import BookingDetails from "./Components/BookingDetails";

function App() {
  return (
    <CartProvider>
    <div className="App bg-[#495E57] w-full h-full ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Page/>} />
        <Route path="/Bookings" element={<BookingForm />} />
        <Route path="/booking-details" element={<BookingDetails />} />
        <Route path="/Orders" element={<Orders/>} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/Checkout" element={<Checkout/>}/>
      </Routes>
      <Footer />
    </div>
    </CartProvider>
  );
}

export default App;
