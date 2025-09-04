import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Mock data for blog posts
const blogPosts = [
  {
    id: '1',
    title: '5 Common Financial Mistakes Startups Make',
    date: 'October 26, 2023',
    excerpt: 'Learn about the critical financial errors that can derail a new business and how to avoid them from the start.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop',
    category: 'Startups',
  },
  {
    id: '2',
    title: 'Understanding Your Cash Flow Statement',
    date: 'October 15, 2023',
    excerpt: 'A deep dive into one of the most important financial documents for any business owner. Master your cash flow.',
    imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop',
    category: 'Finance Fundamentals',
  },
  {
    id: '3',
    title: 'Tax Planning Strategies for Q4',
    date: 'September 30, 2023',
    excerpt: 'The end of the year is the perfect time to optimize your tax strategy. Here are actionable tips for Q4.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059ee41f?q=80&w=1973&auto=format&fit=crop',
    category: 'Tax Strategy',
  },
  {
    id: '4',
    title: 'How to Choose the Right Accounting Software',
    date: 'September 12, 2023',
    excerpt: 'From QuickBooks to Xero, we break down the pros and cons of the most popular accounting tools for small businesses.',
    imageUrl: 'https://images.unsplash.com/photo-1554224154-260328c04740?q=80&w=2070&auto=format&fit=crop',
    category: 'Startups',
  },
  {
    id: '5',
    title: 'Maximizing Deductions for Your Home Office',
    date: 'August 25, 2023',
    excerpt: 'Working from home? Don\'t miss out on these key tax deductions that can save you a significant amount of money.',
    imageUrl: 'https://images.unsplash.com/photo-1487528278747-0402b27b49e9?q=80&w=2070&auto=format&fit=crop',
    category: 'Tax Strategy',
  },
];

const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <main className="py-16 md:py-24">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights and advice on accounting, finance, and business growth from our team of experts.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <CardFooter>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link to={`/blog/${post.id}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;