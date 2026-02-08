import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactBanner from "../components/ContactBanner";
import FeaturesBanner from "../components/FeaturesBanner";
import ConsultationBanner from "../components/ConsultationBanner";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesBanner />
      <AboutSection />
      <ConsultationBanner />
      <ServiceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  );
}
