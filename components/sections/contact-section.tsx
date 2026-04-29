"use client";

import { Mail, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nnt@lsnnt.in",
    href: "mailto:nnt@lsnnt.in",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Vit University, Vellore, TN",
    href: "https://www.google.com/maps/search/Vellore+Institute+of+Technology+%28VIT%29%2C+Vellore%2C+Tamil+Nadu",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/lsnnt", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/lsnnt/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/_lsnnt", label: "Instagram" },
];

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex flex-col justify-center min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {"Let's Work Together"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"> Have a
            project in mind or just want to say hello? I&apos;d love to hear from
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Connect with me
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-lg bg-secondary/50 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-foreground">
                  Available for work
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I&apos;m
                currently open to new opportunities and collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
