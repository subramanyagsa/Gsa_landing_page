"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Loader2, Settings } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthProvider";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { session } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!error) setPosts(data || []);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full py-24 md:py-32 bg-background text-foreground min-h-screen">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <header className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Insights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends in finance, accounting, and compliance.
          </p>
          
          {session && (
            <div className="pt-4">
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <Link to="/admin/blog" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Manage Posts
                </Link>
              </Button>
            </div>
          )}
        </header>

        <div className="mb-12 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="w-full pl-10 rounded-full border-white/10 bg-black/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <>
            {filteredPosts.length > 0 ? (
              <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Link to={`/blog/${post.id}`} key={post.id} className="flex">
                    <Card className="flex flex-col overflow-hidden border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-105 w-full group">
                      {post.image_url && (
                        <div className="relative h-48 w-full overflow-hidden">
                          <img 
                            src={post.image_url} 
                            alt={post.title} 
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          {new Date(post.created_at).toLocaleDateString()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground line-clamp-3 text-sm">{post.excerpt}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </main>
            ) : (
              <div className="text-center py-20 bg-black/20 rounded-2xl border border-white/5">
                <p className="text-muted-foreground">No posts found matching your search.</p>
                {session && (
                  <Button asChild variant="link" className="mt-2">
                    <Link to="/admin/blog">Create your first post</Link>
                  </Button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPage;