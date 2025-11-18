import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection";
import TalentsSection from "../components/TalentSection";
import ProvenResults from "../components/ProvenResults";
import FlexibleEngagementModels from "../components/FlexibleModel";
import SkillsShowcase from "../components/SkillsShowcase";
import SecurityCompliance from "../components/SecurityCompliance";
import ReadyToTransform from "../components/ReadyToTransform";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TalentsSection />
      <ProvenResults />
      <FlexibleEngagementModels />
      <SkillsShowcase />
      <SecurityCompliance />
      <ReadyToTransform />
      <Footer />
      
    </div>
  );
}