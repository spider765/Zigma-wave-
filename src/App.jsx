import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Why from "./components/Why";
import Blog from "./components/Blog";
import Contact from "./components/Contact"; 
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Product from "./components/Product";
import Clients from "./components/Clients";
import Quotes from "./components/Quotes";
import FAQ from "./components/FAQ";





export default function App() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <Stats />
      <Services />
      <Product />
      <Why />
      <Clients />
      <FAQ />
      <Blog />
      <Quotes />
      <Contact /> 
      <Footer />
      
     
    </>
  );
}