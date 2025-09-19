import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { blogPostsMap } from '@/data/blogData';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = id ? blogPostsMap[parseInt(id, 10)] : undefined;

  if (!post) {
    // You might want to redirect to a 404 page here
    return (
      <div className="container py-16 md:py-24 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Button asChild variant="link" className="mt-4">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  return (
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
  );
};

export default BlogPostPage;