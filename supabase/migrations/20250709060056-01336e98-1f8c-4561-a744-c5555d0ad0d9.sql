-- Create enum for service categories
CREATE TYPE public.service_category AS ENUM ('web-development', 'technical-support', 'business-consultancy');

-- Create services table
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  short_description TEXT,
  category service_category NOT NULL,
  price_from DECIMAL(10,2),
  features TEXT[],
  icon_name TEXT,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image_url TEXT,
  author_id UUID REFERENCES auth.users(id),
  is_published BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  tags TEXT[],
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_company TEXT,
  client_position TEXT,
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  avatar_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  service_interest service_category,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'completed', 'archived')),
  is_read BOOLEAN DEFAULT false,
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user profiles table for admin functionality
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin', 'editor')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for services (public read, admin write)
CREATE POLICY "Services are viewable by everyone" 
ON public.services FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage services" 
ON public.services FOR ALL 
USING (EXISTS (
  SELECT 1 FROM public.profiles 
  WHERE user_id = auth.uid() AND role IN ('admin', 'editor')
));

-- Create policies for blog posts (public read published, admin write)
CREATE POLICY "Published blog posts are viewable by everyone" 
ON public.blog_posts FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can manage blog posts" 
ON public.blog_posts FOR ALL 
USING (EXISTS (
  SELECT 1 FROM public.profiles 
  WHERE user_id = auth.uid() AND role IN ('admin', 'editor')
));

-- Create policies for testimonials (public read active, admin write)
CREATE POLICY "Active testimonials are viewable by everyone" 
ON public.testimonials FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage testimonials" 
ON public.testimonials FOR ALL 
USING (EXISTS (
  SELECT 1 FROM public.profiles 
  WHERE user_id = auth.uid() AND role IN ('admin', 'editor')
));

-- Create policies for contact submissions (admins only)
CREATE POLICY "Admins can view contact submissions" 
ON public.contact_submissions FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM public.profiles 
  WHERE user_id = auth.uid() AND role = 'admin'
));

CREATE POLICY "Anyone can create contact submissions" 
ON public.contact_submissions FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can update contact submissions" 
ON public.contact_submissions FOR UPDATE 
USING (EXISTS (
  SELECT 1 FROM public.profiles 
  WHERE user_id = auth.uid() AND role = 'admin'
));

-- Create policies for profiles
CREATE POLICY "Profiles are viewable by owner" 
ON public.profiles FOR SELECT 
USING (user_id = auth.uid());

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE 
USING (user_id = auth.uid());

CREATE POLICY "Users can insert their own profile" 
ON public.profiles FOR INSERT 
WITH CHECK (user_id = auth.uid());

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON public.services
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_testimonials_updated_at
  BEFORE UPDATE ON public.testimonials
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'display_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user profile creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert some sample data
INSERT INTO public.services (title, description, short_description, category, price_from, features, icon_name, is_featured) VALUES
('Custom Web Development', 'Full-stack web application development using modern technologies like React, Node.js, and cloud platforms.', 'Professional web development services', 'web-development', 2499.00, ARRAY['Custom Design', 'Responsive Layout', 'SEO Optimization', 'Performance Optimization', 'Security Implementation'], 'Code', true),
('24/7 Technical Support', 'Round-the-clock technical assistance for your digital infrastructure and applications.', '24/7 expert technical assistance', 'technical-support', 150.00, ARRAY['24/7 Availability', 'Remote Assistance', 'System Monitoring', 'Issue Resolution', 'Documentation'], 'HeadphonesIcon', true),
('Business Consultancy', 'Strategic business guidance to optimize your digital transformation and growth.', 'Expert business strategy guidance', 'business-consultancy', 200.00, ARRAY['Digital Strategy', 'Process Optimization', 'ROI Analysis', 'Market Research', 'Implementation Planning'], 'TrendingUp', true);

INSERT INTO public.testimonials (client_name, client_company, client_position, content, rating, is_featured) VALUES
('Sarah Johnson', 'TechStart Inc.', 'CEO', 'DigitalBridge transformed our online presence completely. Their team delivered beyond our expectations with a modern, fast, and user-friendly website.', 5, true),
('Michael Chen', 'InnovateCorp', 'CTO', 'Outstanding technical support and expertise. They helped us scale our infrastructure seamlessly and provided 24/7 support when we needed it most.', 5, true),
('Emily Rodriguez', 'GrowthLabs', 'Marketing Director', 'The business consultancy services were invaluable. They helped us identify key growth opportunities and provided actionable strategies.', 5, true);

INSERT INTO public.blog_posts (title, slug, excerpt, content, is_published, is_featured, tags, author_id) VALUES
('The Future of Web Development in 2024', 'future-web-development-2024', 'Explore the latest trends and technologies shaping web development.', 'In this comprehensive guide, we explore the emerging trends in web development...', true, true, ARRAY['web development', 'technology', 'trends'], (SELECT id FROM auth.users LIMIT 1)),
('Building Scalable Applications', 'building-scalable-applications', 'Learn best practices for creating applications that grow with your business.', 'Scalability is crucial for modern applications. Here are the key principles...', true, false, ARRAY['scalability', 'architecture', 'best practices'], (SELECT id FROM auth.users LIMIT 1));