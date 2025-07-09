import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!
    );

    const url = new URL(req.url);
    const contentType = url.searchParams.get("type");
    const featured = url.searchParams.get("featured") === "true";
    const limit = parseInt(url.searchParams.get("limit") || "10");

    let result;

    switch (contentType) {
      case "services":
        const servicesQuery = supabase
          .from("services")
          .select("*")
          .eq("is_active", true);
        
        if (featured) {
          servicesQuery.eq("is_featured", true);
        }
        
        result = await servicesQuery.limit(limit);
        break;

      case "testimonials":
        const testimonialsQuery = supabase
          .from("testimonials")
          .select("*")
          .eq("is_active", true);
        
        if (featured) {
          testimonialsQuery.eq("is_featured", true);
        }
        
        result = await testimonialsQuery.limit(limit);
        break;

      case "blog_posts":
        const blogQuery = supabase
          .from("blog_posts")
          .select("*")
          .eq("is_published", true);
        
        if (featured) {
          blogQuery.eq("is_featured", true);
        }
        
        result = await blogQuery
          .order("created_at", { ascending: false })
          .limit(limit);
        break;

      case "service_by_category":
        const category = url.searchParams.get("category");
        if (!category) {
          return new Response(
            JSON.stringify({ error: "Category parameter is required" }),
            { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }
        
        result = await supabase
          .from("services")
          .select("*")
          .eq("category", category)
          .eq("is_active", true);
        break;

      case "blog_by_slug":
        const slug = url.searchParams.get("slug");
        if (!slug) {
          return new Response(
            JSON.stringify({ error: "Slug parameter is required" }),
            { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }
        
        result = await supabase
          .from("blog_posts")
          .select("*")
          .eq("slug", slug)
          .eq("is_published", true)
          .single();
        break;

      default:
        return new Response(
          JSON.stringify({ error: "Invalid content type. Supported types: services, testimonials, blog_posts, service_by_category, blog_by_slug" }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
    }

    if (result.error) {
      console.error("Database error:", result.error);
      return new Response(
        JSON.stringify({ error: "Failed to fetch content" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    return new Response(
      JSON.stringify({ data: result.data, count: result.data?.length || 0 }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error in get-content function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);