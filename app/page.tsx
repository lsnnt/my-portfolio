"use client";

import { useState, useCallback } from "react";
import { Navigation } from "@/components/navigation";
import { Section } from "@/components/section";
import { HomeSection } from "@/components/sections/home-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

const sections = [
  { id: "home", background: "/images/bg-home.jpg", component: HomeSection },
  { id: "projects", background: "/images/bg-projects.jpg", component: ProjectsSection },
  { id: "blog", background: "/images/bg-blog.jpg", component: BlogSection },
  { id: "contact", background: "/images/bg-contact.jpg", component: ContactSection },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionInView = useCallback((id: string) => {
    setActiveSection(id);
  }, []);

  return (
    <main className="relative">
      <Navigation activeSection={activeSection} />
      
      {sections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          backgroundImage={section.background}
          onInView={handleSectionInView}
        >
          <section.component />
        </Section>
      ))}
      
      <Footer />
    </main>
  );
}
