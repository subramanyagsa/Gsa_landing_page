"use client";

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();
      
      if (!error) setPost(data);
      setLoading(false);
    };

    if (id) fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!post) {
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
          {post.image_url && (
            <img src={post.image_url} alt={post.title} className="w-full rounded-lg mb-8 max-h-[400px] object-cover" />
          )}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
            <p className="text-muted-foreground mt-2">
              {post.author_name ? `By ${post.author_name} on ` : ''} 
              {new Date(post.created_at).toLocaleDateString()}
            </p>
          </div>
          <div 
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </div>
    </main>
  );
};

export default BlogPostPage;