import PageSlider from "@/components/PageSlider";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <PageSlider>
      {[
        <HeroSection key="hero" />,
        <AboutSection key="about" />,
        <SkillsSection key="skills" />,
        <ProjectsSection key="projects" />,
        <ExperienceSection key="experience" />,
        <ContactSection key="contact" />,
      ]}
    </PageSlider>
  );
}
