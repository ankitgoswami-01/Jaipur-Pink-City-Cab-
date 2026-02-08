import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      pickup,
      drop,
      passengers,
      cab,
      date,
      time,
      name,
      contact,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    
    const mailOptions = {
      from: `"Jaipur Pink City Cab 🚕" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "🚕 New Cab Booking – Jaipur Pink City Cab",
      html: `
        <div style="max-width:600px;margin:auto;font-family:Arial,sans-serif;border:1px solid #eee;border-radius:10px;overflow:hidden;">
          
          <!-- Header -->
          <div style="background:#ec4899;color:#fff;padding:16px;text-align:center;">
            <h1 style="margin:0;font-size:22px;">Jaipur Pink City Cab</h1>
            <p style="margin:4px 0 0;font-size:14px;">
              New Taxi Booking Request
            </p>
          </div>

          <!-- Body -->
          <div style="padding:20px;background:#fff;">
            <h2 style="color:#111;margin-bottom:16px;">🚖 Booking Details</h2>

            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr>
                <td style="padding:8px;border-bottom:1px solid #eee;"><b>Customer Name</b></td>
                <td style="padding:8px;border-bottom:1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px;border-bottom:1px solid #eee;"><b>Contact Number</b></td>
                <td style="padding:8px;border-bottom:1px solid #eee;">${contact}</td>
              </tr>
              <tr>
                <td style="padding:8px;border-bottom:1px solid #eee;"><b>Pickup Location</b></td>
                <td style="padding:8px;border-bottom:1px solid #eee;">${pickup}</td>
              </tr>
              <tr>
                <td style="padding:8px;border-bottom:1px solid #eee;"><b>Drop Location</b></td>
                <td style="padding:8px;border-bottom:1px solid #eee;">${drop}</td>
              </tr>
              <tr>
                <td style="padding:8px;border-bottom:1px solid #eee;"><b>Passengers</b></td>
                <td style="padding:8px;border-bottom:1px solid #eee;">${passengers}</td>
              </tr>
              <tr>
                <td style="padding:8px;border-bottom:1px solid #eee;"><b>Cab Type</b></td>
                <td style="padding:8px;border-bottom:1px solid #eee;">${cab}</td>
              </tr>
              <tr>
                <td style="padding:8px;border-bottom:1px solid #eee;"><b>Date</b></td>
                <td style="padding:8px;border-bottom:1px solid #eee;">${date}</td>
              </tr>
              <tr>
                <td style="padding:8px;"><b>Time</b></td>
                <td style="padding:8px;">${time}</td>
              </tr>
            </table>
          </div>

          <!-- Footer -->
          <div style="background:#f9fafb;padding:14px;text-align:center;font-size:12px;color:#555;">
            <p style="margin:0;">
              📍 Jaipur Pink City Cab Service<br/>
              Reliable • Comfortable • On-Time
            </p>
          </div>

        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email Error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Email failed" }),
      { status: 500 }
    );
  }
}
