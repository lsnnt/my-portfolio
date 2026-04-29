"use client";

import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Chotadhobi-cli",
    description:
      "Reverse Engineered Chotadhobi App used in VIT for laundary services exposing its backend apis",
    tags: ["Reverse-Engineering", "Frida", "Burp-Suite", "Rooted AVD"],
    github: "https://github.com/lsnnt/chotadhobi-cli",
    demo: null,
  },
  {
    title: "News-Archive",
    description:
      "A news archive solution archiving all the latest news automatically via github ci/cd",
    tags: ["CI/CD", "Docker", "AWS S3", "Python"],
    github: "https://github.com/lsnnt/news-upload",
    demo: "https://www.scribd.com/user/688308679/Nityanand-Thakur",
  },
  {
    title: "DDns v6",
    description:
      "Automatically updates your cloudflare AAAA address to a specific ipv6 address which is yours for persistent mail delivery, website pointing etc",
    tags: ["Rust", "IP.se api"],
    github: "https://github.com/lsnnt/updateipv6addr",
    demo: null,
  },
];

export function ProjectsSection() {
  return (
    <div className="flex flex-col justify-center min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Here are
            some of my recent works that showcase my skills and passion.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/lsnnt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <span>View all projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
