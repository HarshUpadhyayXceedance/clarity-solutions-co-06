-- Drop the existing overly permissive policy
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;

-- Create more secure policies

-- Policy 1: Users can view their own complete profile
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

-- Policy 2: Authenticated users can view basic public info of other users (display_name, avatar_url only)
-- This requires creating a view or handling in application layer, but for now we'll restrict to own profile only

-- Policy 3: Admins can view all profiles (for admin functionality)
CREATE POLICY "Admins can view all profiles" 
ON public.profiles 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.user_id = auth.uid() 
    AND p.role = 'admin'
  )
);

-- Alternative: If you need public display of user names (like for testimonials), 
-- create a separate public_profiles view with only display_name and avatar_url
CREATE VIEW public.public_profiles AS
SELECT 
  id,
  display_name,
  avatar_url
FROM public.profiles
WHERE display_name IS NOT NULL;

-- Make the view publicly readable
GRANT SELECT ON public.public_profiles TO anon, authenticated;