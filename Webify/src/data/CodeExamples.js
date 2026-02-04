export const codeExamples = {
  "App.jsx": `
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
  `,
  "Hero.jsx": `
    import { ChevronDown, Sparkle } from "lucide-react";
    import { useEffect, useState } from "react";
    import { codeExamples, floatingCards } from "../data/CodeExamples";
    import SyntaxHighlighter from "react-syntax-highlighter";
    import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

    export default function Hero() {
      const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
      const [activeTab, setActiveTab] = useState("App.jsx");

      useEffect(() => {
        function handleMouseMove(e) {
          setMousePosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener("mousemove", handleMouseMove);
      }, []);
  `,
  "Navbar.jsx": `
    import { Menu, X } from "lucide-react";
    import { useState } from "react";
    export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    return (
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
        {mobileMenuIsOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
            <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
              <a
                href="#features"
                onClick={() => setMobileMenuIsOpen(false)}
                className="block text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuIsOpen(false)}
                className="block text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuIsOpen(false)}
                className="block text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Testimonials
              </a>
            </div>
          </div>
        )}
      </nav>
    );
  }
  `,
};

export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "AI",
    title: "smart Compilation",
    content: "AI-powered code suggestions in real-time."
  },
  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "🎇",
    title: "Auto Animation",
    content: "Dynamic typing effects generated automatically."
  },
  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "🔍",
    title: "Smart Search",
    content: "Intelligent code search across your project."
  },
}