"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const blogPosts = [
  {
    id: 2,
    title: "5 Common Tax Mistakes Small Businesses Make",
    date: "July 28, 2024",
    excerpt: "Avoid these costly errors during tax season. Our expert tips will help you stay compliant and maximize your deductions.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Navigating International Compliance: A Guide for Startups",
    date: "July 10, 2024",
    excerpt: "Expanding globally? Understand the complexities of international financial regulations and how to navigate them successfully.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Why Your Business Needs a Virtual CFO",
    date: "June 22, 2024",
    excerpt: "Discover the benefits of hiring a virtual Chief Financial Officer and how it can drive strategic growth for your company.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Understanding Cash Flow: The Lifeblood of Your Business",
    date: "June 5, 2024",
    excerpt: "A deep dive into managing and optimizing your cash flow for long-term financial health and stability.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 6,
    title: "The Rise of ESG Reporting and What It Means for You",
    date: "May 18, 2024",
    excerpt: "Environmental, Social, and Governance (ESG) reporting is becoming crucial. Learn why it matters and how to get started.",
    imageUrl: "/placeholder.svg",
  },
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full py-16 md:py-24 bg-background text-foreground">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <header className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Insights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends in finance, accounting, and compliance.
          </p>
        </header>

        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="w-full pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-105">
              <img src={post.imageUrl} alt={post.title} className="h-48 w-full object-cover" />
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </main>
      </div>
    </div>
  );
};

export default BlogPage;