import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import GallerySection from "@/components/sections/GallerySection";
import AboutSection from "@/components/sections/AboutSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import AreasSection from "@/components/sections/AreasSection";
import ContactSection from "@/components/sections/ContactSection";
import StatsBanner from "@/components/sections/StatsBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBanner />
        <ServicesSection />
        <WhyUsSection />
        <GallerySection />
        <AboutSection />
        <ReviewsSection />
        <AreasSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
