"use client";

import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react";
import {siCodeforces, siHuggingface, siLeetcode} from 'simple-icons';
export function HomeSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Greeting */}
        <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-widest uppercase animate-in fade-in slide-in-from-bottom-4 duration-700">
          Welcome to Nityanand's portfolio
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          <span className="text-balance">Crafting Digital</span>
          <br />
          <span className="text-primary">Experiences</span>
        </h1>

        {/* Description */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          A Btech student in Vit doing random things
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
          <a
            href="https://github.com/lsnnt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/lsnnt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Linkedin className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">LinkedIn</span>
          </a>
          <a href="https://leetcode.com/u/governer/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-current"
          >
            <path d={siLeetcode.path} />
          </svg>
            <span className="hidden sm:inline text-sm">Leetcode</span>
          </a>
          <a href="https://codeforces.com/profile/lsnnt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-current"
          >
            <path d={siCodeforces.path} />
          </svg>
          <span className="hidden sm:inline text-sm">Codeforces</span>
          </a>
          <a href="https://huggingface.co/lsnnt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-current"
          >
            <path d={siHuggingface.path} />
          </svg>
          <span className="hidden sm:inline text-sm">HuggingFace</span>
          </a>
          <a
            href="https://instagram.com/_lsnnt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Instagram className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">Instagram</span>
          </a>
          <a
            href="mailto:tnityanand523@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Mail className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">Email</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToProjects}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500"
          aria-label="Scroll to projects"
        >
          <span className="text-xs font-mono tracking-wider uppercase">
            View Work
          </span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </div>
  );
}
