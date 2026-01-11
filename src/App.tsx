import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServicesSection } from "@/components/ServicesSection";
import { AreaSection } from "@/components/AreaSection";
import { ReservationForm } from "@/components/ReservationForm";
import { GallerySection } from "@/components/GallerySection";
import { FAQSection } from "@/components/FAQSection";
import { ContactMap } from "@/components/ContactMap";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        <Hero />

        <AboutUs />

        <WhyChooseUs />

        <ServicesSection />

        <AreaSection />

        <ReservationForm />

        <GallerySection />

        <FAQSection />

        <ContactMap />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
