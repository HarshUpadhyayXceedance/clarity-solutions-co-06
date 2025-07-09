import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  service_interest?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const submission: ContactSubmission = await req.json();

    console.log("Received contact submission:", submission);

    // Validate required fields
    if (!submission.name || !submission.email || !submission.message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Insert submission into database
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert({
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        company: submission.company,
        subject: submission.subject,
        message: submission.message,
        service_interest: submission.service_interest,
      })
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email using Resend (if API key is configured)
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        
        // Send notification to admin
        await resend.emails.send({
          from: "DigitalBridge <noreply@digitalbridge.com>",
          to: ["admin@digitalbridge.com"], // Replace with actual admin email
          subject: `New Contact Submission: ${submission.subject || 'General Inquiry'}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${submission.name}</p>
            <p><strong>Email:</strong> ${submission.email}</p>
            ${submission.phone ? `<p><strong>Phone:</strong> ${submission.phone}</p>` : ''}
            ${submission.company ? `<p><strong>Company:</strong> ${submission.company}</p>` : ''}
            ${submission.subject ? `<p><strong>Subject:</strong> ${submission.subject}</p>` : ''}
            ${submission.service_interest ? `<p><strong>Service Interest:</strong> ${submission.service_interest}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${submission.message}</p>
            <hr>
            <p><small>Submitted at: ${new Date().toISOString()}</small></p>
          `,
        });

        // Send confirmation to user
        await resend.emails.send({
          from: "DigitalBridge <noreply@digitalbridge.com>",
          to: [submission.email],
          subject: "Thank you for contacting DigitalBridge",
          html: `
            <h2>Thank you for reaching out!</h2>
            <p>Dear ${submission.name},</p>
            <p>We have received your message and will get back to you within 24 hours.</p>
            <p><strong>Your message:</strong></p>
            <p>${submission.message}</p>
            <br>
            <p>Best regards,<br>The DigitalBridge Team</p>
          `,
        });

        console.log("Notification emails sent successfully");
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the whole request if email fails
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Thank you! Your message has been received.",
        id: data.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error in submit-contact function:", error);
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