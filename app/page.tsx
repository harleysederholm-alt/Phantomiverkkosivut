import HeroSection from "@/components/layout/HeroSection";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import JourneyController from "@/components/ui/JourneyController";
import SceneLoader from "@/components/3d/SceneLoader";

import FeaturesSection from "@/components/layout/FeaturesSection";
import TechSpecsSection from "@/components/layout/TechSpecsSection";
import UseCasesSection from "@/components/layout/UseCasesSection";
import ComparisonSection from "@/components/layout/ComparisonSection";
import SecurityAuditSection from "@/components/layout/SecurityAuditSection";
import ThreatModelSection from "@/components/layout/ThreatModelSection";
import NetworkStatsSection from "@/components/layout/NetworkStatsSection";
import RoadmapSection from "@/components/layout/RoadmapSection";
import FAQSection from "@/components/layout/FAQSection";
import PressQuotesSection from "@/components/layout/PressQuotesSection";
import MissionSection from "@/components/layout/MissionSection";
import DeploymentSection from "@/components/layout/DeploymentSection";

// New Premium Content Sections
import OpenSourceSection from "@/components/layout/OpenSourceSection";
import ProtocolSpecSection from "@/components/layout/ProtocolSpecSection";
import NodeGuideSection from "@/components/layout/NodeGuideSection";
import DeveloperAPISection from "@/components/layout/DeveloperAPISection";
import HallOfFameSection from "@/components/layout/HallOfFameSection";
import ChangelogSection from "@/components/layout/ChangelogSection";
import GlobalReachSection from "@/components/layout/GlobalReachSection";
import UserTestimonialsSection from "@/components/layout/UserTestimonialsSection";
import FooterSection from "@/components/layout/FooterSection";

export default function Home() {
  return (
    <div className="relative w-full text-foreground bg-black">
      {/* 3D Scene Layer - Fixed Background */}
      <div className="fixed inset-0 z-0 top-0 left-0 w-full h-full">
        <SceneLoader />
      </div>

      {/* Global Dark Overlay for Text Readability */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content Layer - Scrollable */}
      <JourneyController>
        <main className="relative z-10 w-full flex flex-col">
          <LanguageSwitcher />
          <HeroSection />
          <FeaturesSection />
          <TechSpecsSection />
          <ComparisonSection />
          <UseCasesSection />
          <SecurityAuditSection />
          <ThreatModelSection />
          <NetworkStatsSection />

          {/* New Premium Sections */}
          <OpenSourceSection />
          <ProtocolSpecSection />
          <NodeGuideSection />
          <DeveloperAPISection />
          <HallOfFameSection />
          <GlobalReachSection />
          <UserTestimonialsSection />

          <RoadmapSection />
          <FAQSection />
          <PressQuotesSection />
          <MissionSection />
          <DeploymentSection />
          <ChangelogSection />

          {/* Footer */}
          <FooterSection />
        </main>
      </JourneyController>
    </div>
  );
}
