import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import CoreBankingSection from "@/components/sections/CoreBankingSection";
import CKYCSection from "@/components/sections/CKYCSection";
import PaperlessCTASection from "@/components/sections/PaperlessCTASection";
import TickerSection from "@/components/sections/TickerSection";
import DigitalBankingSection from "@/components/sections/DigitalBankingSection";
import InsightsSection from "@/components/sections/InsightsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SolutionsSection />
        <CoreBankingSection />
        <CKYCSection />
        <PaperlessCTASection dark />
        <TickerSection />
        <DigitalBankingSection />
        <InsightsSection />
        <CaseStudiesSection />
        <PaperlessCTASection dark variant="flat" />
      </main>
      <Footer />
    </>
  );
}
