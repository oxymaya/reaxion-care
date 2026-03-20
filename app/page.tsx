import { Header } from "@/components/reaxion/header"
import { HeroSection } from "@/components/reaxion/hero-section"
import { OverviewSection } from "@/components/reaxion/overview-section"
import { ChallengesSection } from "@/components/reaxion/challenges-section"
import { FeaturesSection } from "@/components/reaxion/features-section"
import { MeasurementSection } from "@/components/reaxion/measurement-section"
import { AdvantagesSection } from "@/components/reaxion/advantages-section"
import { AdminDashboardSection } from "@/components/reaxion/admin-dashboard-section"
import { SystemSection } from "@/components/reaxion/system-section"
import { ScenesSection } from "@/components/reaxion/scenes-section"
import { TestimonialsSection } from "@/components/reaxion/testimonials-section"
import { TargetAndComposition } from "@/components/reaxion/target-composition"
import { SpecsSection } from "@/components/reaxion/specs-section"
import { PricingSection } from "@/components/reaxion/pricing-section"
import { SafetySection } from "@/components/reaxion/safety-section"
import { DisclaimerSection } from "@/components/reaxion/disclaimer-section"
import { ContactSection } from "@/components/reaxion/contact-section"
import { InquiryFormSection } from "@/components/reaxion/inquiry-form-section"
import { Footer } from "@/components/reaxion/footer"

export default function ReaxionCarePage() {
  return (
    <main className="min-h-screen">
        <Header />
        <HeroSection />
        <OverviewSection />
        <ChallengesSection />
        <FeaturesSection />
        <MeasurementSection />
        <AdvantagesSection />
        <AdminDashboardSection />
        <SystemSection />
        <ScenesSection />
        <TestimonialsSection />
        <TargetAndComposition />
        <SpecsSection />
        <PricingSection />
        <SafetySection />
        <DisclaimerSection />
        <ContactSection />
        <InquiryFormSection />
      <Footer />
    </main>
  )
}
