-- Fix the security definer view issue by recreating it without SECURITY DEFINER
DROP VIEW IF EXISTS public.public_profiles;

-- Create a regular view (not security definer) for public profile info
CREATE VIEW public.public_profiles AS
SELECT 
  id,
  display_name,
  avatar_url
FROM public.profiles
WHERE display_name IS NOT NULL;

-- Enable RLS on the view
ALTER VIEW public.public_profiles SET (security_barrier = true);

-- Create RLS policy for the view to make it publicly readable
CREATE POLICY "Public profiles are viewable by everyone" 
ON public.profiles 
FOR SELECT 
USING (display_name IS NOT NULL);

-- Fix the function search path issue
ALTER FUNCTION public.update_updated_at_column() SET search_path = public;