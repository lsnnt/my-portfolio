"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  // {
  //   title: "Chotadhobi-cli",
  //   excerpt:
  //     "Reverse Engineered Chotadhobi App used in VIT for laundary services exposing its backend apis",
  //   date: "2026-04-15",
  //   readTime: "5 min read",
  //   slug: "/blog/scalable-apps",
  // },
  {
    title: "Getting Train Data from inside the train",
    excerpt:
      "What was my thinking and approach to get the data from vande bharat train",
    date: "2026-01-16",
    readTime: "2 min read",
    slug: "https://lsnnt.hashnode.dev/how-i-got-the-data-of-train-c2cf5237a7ed",
  },
  {
    title: "How i created my own custom DDns Script",
    excerpt:
      "What was my setup so that my mail can be delivered to my mac",
    date: "2026-01-16",
    readTime: "2 min read",
    slug: "https://lsnnt.hashnode.dev/how-i-created-my-own-custom-ddns-script-df3d5402658f",
  },
  // {
  //   title: "Optimizing Performance in Next.js",
  //   excerpt:
  //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   date: "2026-02-22",
  //   readTime: "10 min read",
  //   slug: "/blog/nextjs-performance",
  // },
];

export function BlogSection() {
  return (
    <div className="flex flex-col justify-center min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Insights
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Latest Articles
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Thoughts on
            design, development, and building for the web.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <Card
              key={post.title}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </CardDescription>
                <a
                  href={post.slug}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium group/link"
                >
                  <span>Read article</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="https://lsnnt.hashnode.dev/"
            target="_blank"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <span>View all articles</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
