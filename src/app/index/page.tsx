import Navigation from "@/app/sections/Navigation";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Services from "@/app/sections/Services";
import Portfolio from "@/app/sections/Portfolio";
import TechStack from "@/app/sections/TechStack";
// import Testimonials from "@/components/Testimonials";
// import Contact from "@/components/Contact";
import Footer from "@/app/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-amber-50">
        <Navigation />
        <Hero />
        <About />
        <Services />
      <Portfolio />
      <TechStack />
      {/*<Testimonials />
      <Contact /> */}
      <Footer />
    </div>
  );
};

export default Index;
