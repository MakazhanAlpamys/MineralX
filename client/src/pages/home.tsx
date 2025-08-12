import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import MissionVision from "@/components/mission-vision";
import DigitalTrends from "@/components/digital-trends";
import KeyObjectives from "@/components/key-objectives";
import MemberCompanies from "@/components/member-companies";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-mining-dark text-white">
      <Navigation />
      <HeroSection />
      <MissionVision />
      <DigitalTrends />
      <KeyObjectives />
      <MemberCompanies />
      <ContactSection />
      <Footer />
    </div>
  );
}
