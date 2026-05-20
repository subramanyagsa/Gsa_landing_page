"use client";

import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/AuthProvider';

const Login = () => {
  const { session } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/admin/blog');
    }
  }, [session, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md p-8 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl shadow-2xl">
        <div className="text-center mb-8">
          <img src="/logo2.png" alt="Logo" className="h-10 mx-auto mb-4 dark:filter dark:invert" />
          <h1 className="text-2xl font-bold tracking-tight">Admin Login</h1>
          <p className="text-muted-foreground mt-2 text-sm">Manage your blog insights</p>
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{ 
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: 'hsl(var(--primary))',
                  brandAccent: 'hsl(var(--primary))',
                }
              }
            }
          }}
          providers={['google']}
          redirectTo={window.location.origin + '/admin/blog'}
          theme="dark"
        />
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>Restricted access for authorized personnel only.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;