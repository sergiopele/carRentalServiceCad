import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import FeaturedVehicles from './components/FeaturedVehicles';
import BookingFlow from './components/BookingFlow';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <FeaturedVehicles />
      <BookingFlow />
      <Locations />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;