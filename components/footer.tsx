"use client";

import { Github, Linkedin, Twitter, Heart, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/lsnnt", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/lsnnt", label: "LinkedIn" },
  {icon:Instagram,href:"https://instagram.com/_lsnnt",label:"Instagram"}
  // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative z-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-xl font-semibold text-foreground mb-2">
              Portfolio
            </p>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
