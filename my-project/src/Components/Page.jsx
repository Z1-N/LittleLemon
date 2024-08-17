import AboutUs from "./AboutUs";
import Carousel from "./Carousel";
import ContactUs from "./ContactUs";
import MenuCards from "./MenuCards";


const Page = () => {
    return ( 
        <div>
        <Carousel />
        <MenuCards />
        <AboutUs />
        <ContactUs />
        </div>
     );
}
 
export default Page;