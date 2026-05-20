"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Edit3, LogOut, Loader2 } from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast';
import { useAuth } from '@/components/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AdminBlog = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image_url: '',
    category: '',
    author_name: ''
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) showError('Failed to fetch posts');
    else setPosts(data || []);
    setLoading(false);
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const postData = {
      ...formData,
      author_id: user?.id
    };

    let error;
    if (editingId) {
      const { error: err } = await supabase
        .from('blogs')
        .update(postData)
        .eq('id', editingId);
      error = err;
    } else {
      const { error: err } = await supabase
        .from('blogs')
        .insert([postData]);
      error = err;
    }

    if (error) {
      showError(error.message);
    } else {
      showSuccess(editingId ? 'Post updated!' : 'Post published!');
      setFormData({ title: '', excerpt: '', content: '', image_url: '', category: '', author_name: '' });
      setEditingId(null);
      fetchPosts();
    }
    setSubmitting(false);
  };

  const handleEdit = (post: any) => {
    setEditingId(post.id);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      image_url: post.image_url,
      category: post.category,
      author_name: post.author_name
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);

    if (error) showError('Failed to delete post');
    else {
      showSuccess('Post deleted');
      fetchPosts();
    }
  };

  if (loading) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin h-8 w-8 text-primary" /></div>;

  return (
    <div className="container py-24 max-w-5xl mx-auto px-4">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">Blog Dashboard</h1>
        <Button variant="ghost" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" /> Sign Out
        </Button>
      </div>

      <Card className="mb-12 border-white/10 bg-black/30 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>{editingId ? 'Edit Post' : 'Create New Post'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                placeholder="Title" 
                value={formData.title} 
                onChange={e => setFormData({...formData, title: e.target.value})} 
                required 
              />
              <Input 
                placeholder="Category" 
                value={formData.category} 
                onChange={e => setFormData({...formData, category: e.target.value})} 
              />
            </div>
            <Input 
              placeholder="Image URL" 
              value={formData.image_url} 
              onChange={e => setFormData({...formData, image_url: e.target.value})} 
            />
            <Input 
              placeholder="Author Name" 
              value={formData.author_name} 
              onChange={e => setFormData({...formData, author_name: e.target.value})} 
            />
            <Textarea 
              placeholder="Excerpt (short summary)" 
              value={formData.excerpt} 
              onChange={e => setFormData({...formData, excerpt: e.target.value})} 
            />
            <Textarea 
              placeholder="Content (HTML or Text)" 
              className="min-h-[200px]"
              value={formData.content} 
              onChange={e => setFormData({...formData, content: e.target.value})} 
              required 
            />
            <div className="flex gap-2">
              <Button type="submit" disabled={submitting}>
                {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {editingId ? 'Update Post' : 'Publish Post'}
              </Button>
              {editingId && (
                <Button type="button" variant="ghost" onClick={() => {
                  setEditingId(null);
                  setFormData({ title: '', excerpt: '', content: '', image_url: '', category: '', author_name: '' });
                }}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        <h2 className="text-xl font-semibold mb-2">Existing Posts</h2>
        {posts.map(post => (
          <div key={post.id} className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-black/20 hover:bg-black/40 transition-colors">
            <div>
              <h3 className="font-medium">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{new Date(post.created_at).toLocaleDateString()}</p>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" onClick={() => handleEdit(post)}>
                <Edit3 className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-destructive hover:text-destructive" onClick={() => handleDelete(post.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlog;