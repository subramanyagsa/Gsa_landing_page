import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
  },
  {
    id: '2',
    title: 'Understanding Your Cash Flow Statement',
    date: 'October 15, 2023',
    excerpt: 'A deep dive into one of the most important financial documents for any business owner. Master your cash flow.',
    imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Tax Planning Strategies for Q4',
    date: 'September 30, 2023',
    excerpt: 'The end of the year is the perfect time to optimize your tax strategy. Here are actionable tips for Q4.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059ee41f?q=80&w=1973&auto=format&fit=crop',
  },
];

const BlogPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <Header />
      <main className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights and advice on accounting, finance, and business growth from our team of experts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
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
      <Footer />
    </div>
  );
};

export default BlogPage;