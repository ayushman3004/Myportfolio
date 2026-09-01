import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ProjectsSlider from "@/components/ProjectsSlider";
import CertificationWall from "@/components/CertificationWall";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-cream-50">
      {/* Floating Header */}
      <Navbar />

      {/* 1. Hero / Introduction Section */}
      <Hero />

      {/* 2. Skills Section */}
      <Skills />

      {/* 3. Experience (Internship) Section */}
      <Experience />

      {/* 4. Projects Showcase (Gallery Slider) */}
      <ProjectsSlider />

      {/* 5. Certifications (Scroll-Locked Wallframe) */}
      <CertificationWall />

      {/* 6. Achievements Section */}
      <Achievements />

      {/* 7. Education Section */}
      <Education />

      {/* 8. Contact / Footer Section */}
      <Footer />
    </main>
  );
}
