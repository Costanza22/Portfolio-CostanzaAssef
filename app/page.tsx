import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { VolunteerSection } from "@/components/VolunteerSection";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <VolunteerSection />
        <EducationSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}
