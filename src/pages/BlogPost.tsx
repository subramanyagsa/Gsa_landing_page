import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Mock data - in a real app, you'd fetch this
const blogPosts = {
  '1': {
    title: '5 Common Financial Mistakes Startups Make',
    date: 'October 26, 2023',
    author: 'Jane Doe, CPA',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop',
    content: `
      <p>Starting a business is an exhilarating journey, but it's also fraught with financial pitfalls. Many promising startups fail not because of a bad product, but due to poor financial management. Here are five of the most common mistakes we see and how to avoid them.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">1. Co-mingling Personal and Business Finances</h3>
      <p>It's tempting to use your personal bank account for business expenses, especially in the early days. However, this creates a bookkeeping nightmare and can lead to serious legal and tax complications. Open a separate business bank account from day one. This simple step makes tracking expenses, managing cash flow, and filing taxes infinitely easier.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">2. Not Tracking Expenses Properly</h3>
      <p>Every dollar counts. Failing to meticulously track your expenses means you're likely missing out on valuable tax deductions and have an inaccurate picture of your profitability. Use accounting software or even a detailed spreadsheet to categorize every single business expense. Keep digital copies of all receipts.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">3. Ignoring Cash Flow</h3>
      <p>Profit is not the same as cash flow. A business can be profitable on paper but fail because it runs out of cash. Create a cash flow forecast to predict your inflows and outflows over the next few months. This will help you anticipate shortfalls and make proactive decisions, like securing a line of credit before you desperately need it.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">4. DIY Bookkeeping for Too Long</h3>
      <p>While it's smart to be frugal, handling your own books can cost you more in the long run through missed deductions, compliance errors, and wasted time. As your business grows, the complexity of your finances increases. Know when to delegate. Hiring a professional bookkeeper or accounting service frees you to focus on what you do best: growing your business.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">5. Neglecting Tax Planning</h3>
      <p>Many founders only think about taxes when the filing deadline looms. This is a reactive approach that often results in a higher tax bill. Proactive tax planning involves making strategic decisions throughout the year to minimize your tax liability. This could include timing large purchases, choosing the right business structure, and taking advantage of tax credits.</p>
      <p class="mt-8">By avoiding these common mistakes, you'll build a strong financial foundation for your startup, setting it up for sustainable growth and long-term success.</p>
    `
  },
  '2': {
    title: 'Understanding Your Cash Flow Statement',
    date: 'October 15, 2023',
    author: 'John Smith, CA',
    imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop',
    content: `<p>Content for cash flow statement post...</p>`
  },
  '3': {
    title: 'Tax Planning Strategies for Q4',
    date: 'September 30, 2023',
    author: 'Jane Doe, CPA',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059ee41f?q=80&w=1973&auto=format&fit=crop',
    content: `<p>Content for tax planning post...</p>`
  }
};

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <Header />
      <main className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="ghost">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
          <article className="prose prose-invert lg:prose-xl mx-auto">
            <img src={post.imageUrl} alt={post.title} className="w-full rounded-lg mb-8" />
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
              <p className="text-muted-foreground mt-2">
                By {post.author} on {post.date}
              </p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;