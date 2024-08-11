import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import MenuCards from "./Components/MenuCards";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App bg-[#495E57] w-full">
      <Navbar/>
      <Carousel/>
      <MenuCards/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
