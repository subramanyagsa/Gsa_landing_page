"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: '5 Common Financial Mistakes Startups Make',
    date: 'October 26, 2023',
    excerpt: 'Starting a business is an exhilarating journey, but it\'s also fraught with financial pitfalls. Learn how to avoid them.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Understanding Your Cash Flow Statement',
    date: 'October 15, 2023',
    excerpt: 'Profit is not the same as cash flow. A business can be profitable on paper but fail because it runs out of cash. Learn to understand this critical document.',
    imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Tax Planning Strategies for Q4',
    date: 'September 30, 2023',
    excerpt: 'Don\'t wait until the deadline. Proactive tax planning involves making strategic decisions throughout the year to minimize your tax liability.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059ee41f?q=80&w=1973&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'How to Choose the Right Accounting Software',
    date: 'September 12, 2023',
    excerpt: 'The right tool can save you time, reduce errors, and provide valuable insights into your financial health. Here\'s a breakdown of the top contenders.',
    imageUrl: 'https://images.unsplash.com/photo-1554224154-260328c04740?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Maximizing Deductions for Your Home Office',
    date: 'August 25, 2023',
    excerpt: 'If you work from home, you may be eligible for the home office deduction. Let\'s dive into what qualifies and how to calculate it.',
    imageUrl: 'https://images.unsplash.com/photo-1487528278747-0402b27b49e9?q=80&w=2070&auto=format&fit=crop',
  }
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
            <Link to={`/blog/${post.id}`} key={post.id} className="flex">
              <Card className="flex flex-col overflow-hidden border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-105 w-full">
                <img src={post.imageUrl} alt={post.title} className="h-48 w-full object-cover" />
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
};

export default BlogPage;