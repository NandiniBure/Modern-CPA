import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
