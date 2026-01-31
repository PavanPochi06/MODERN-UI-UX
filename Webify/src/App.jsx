import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Feature from "./components/Features";

function App() {
  return(
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Feature />
      <Pricing /> 
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App
