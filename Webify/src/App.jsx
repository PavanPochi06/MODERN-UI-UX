import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Feature from "./components/Features";
import { useState, useEffect } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return(
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Feature />
      <Pricing /> 
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App
