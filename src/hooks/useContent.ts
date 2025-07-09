import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Service {
  id: string;
  title: string;
  description: string;
  short_description?: string;
  category: string;
  price_from?: number;
  features?: string[];
  icon_name?: string;
  image_url?: string;
  is_featured: boolean;
}

interface Testimonial {
  id: string;
  client_name: string;
  client_company?: string;
  client_position?: string;
  content: string;
  rating?: number;
  avatar_url?: string;
  is_featured: boolean;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image_url?: string;
  author_id?: string;
  is_featured: boolean;
  tags?: string[];
  created_at: string;
  published_at?: string;
}

export const useServices = (featured?: boolean) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        let query = supabase.from('services').select('*').eq('is_active', true);
        
        if (featured) {
          query = query.eq('is_featured', true);
        }
        
        const { data, error: fetchError } = await query;
        
        if (fetchError) throw fetchError;
        setServices(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [featured]);

  return { services, loading, error };
};

export const useTestimonials = (featured?: boolean) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        let query = supabase.from('testimonials').select('*').eq('is_active', true);
        
        if (featured) {
          query = query.eq('is_featured', true);
        }
        
        const { data, error: fetchError } = await query;
        
        if (fetchError) throw fetchError;
        setTestimonials(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [featured]);

  return { testimonials, loading, error };
};

export const useBlogPosts = (featured?: boolean) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        let query = supabase.from('blog_posts').select('*').eq('is_published', true);
        
        if (featured) {
          query = query.eq('is_featured', true);
        }
        
        const { data, error: fetchError } = await query.order('created_at', { ascending: false });
        
        if (fetchError) throw fetchError;
        setBlogPosts(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [featured]);

  return { blogPosts, loading, error };
};

export const useServicesByCategory = (category: 'web-development' | 'technical-support' | 'business-consultancy') => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('services')
          .select('*')
          .eq('category', category)
          .eq('is_active', true);
        
        if (fetchError) throw fetchError;
        setServices(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [category]);

  return { services, loading, error };
};

export const useBlogPost = (slug: string) => {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .eq('is_published', true)
          .single();
        
        if (fetchError) throw fetchError;
        setBlogPost(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  return { blogPost, loading, error };
};