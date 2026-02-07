import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface SubscriptionNotificationRequest {
  email: string;
  organization: string;
  role?: string;
  reportType: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { email, organization, role, reportType }: SubscriptionNotificationRequest = await req.json();

    console.log("Received subscription notification request:", { email, organization, role, reportType });

    // Validate required fields
    if (!email || !organization) {
      console.error("Missing required fields");
      throw new Error("Missing required fields: email and organization are required");
    }

    // Get admin notification email from environment or use default
    const adminEmail = Deno.env.get("ADMIN_NOTIFICATION_EMAIL") || "team@vibe-intelligence.com";
    const fromEmail = Deno.env.get("FROM_EMAIL") || "notifications@vibe-intelligence.com";

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: `Vibe Intelligence <${fromEmail}>`,
      to: [adminEmail],
      subject: `New Report Subscription: ${reportType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a1a1a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Report Subscription
          </h1>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #3b82f6; margin-top: 0;">Subscriber Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td>
                <td style="padding: 8px 0; color: #1a1a1a;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Organization:</td>
                <td style="padding: 8px 0; color: #1a1a1a;">${organization}</td>
              </tr>
              ${role ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Role:</td>
                <td style="padding: 8px 0; color: #1a1a1a;">${role}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Report:</td>
                <td style="padding: 8px 0; color: #1a1a1a;">${reportType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Subscribed At:</td>
                <td style="padding: 8px 0; color: #1a1a1a;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>
          
          <p style="color: #64748b; font-size: 14px;">
            This notification was sent automatically when a new user subscribed to download the report.
          </p>
        </div>
      `,
    });

    console.log("Admin notification email sent successfully:", adminEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Notification sent successfully",
        adminEmailId: adminEmailResponse.data?.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error in send-subscription-notification function:", errorMessage);
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
