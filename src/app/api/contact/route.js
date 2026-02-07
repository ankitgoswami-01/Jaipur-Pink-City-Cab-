import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

await transporter.sendMail({
  from: `"Jaipur Pink City Cab 🚕" <${process.env.EMAIL_USER}>`,
  to: process.env.RECEIVER_EMAIL,
  subject: subject || "New Contact Form Message",
  html: `
  <div style="font-family: Arial, Helvetica, sans-serif; background:#f6f6f6; padding:30px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">

      <!-- HEADER -->
      <div style="background:#EFA701; padding:20px; text-align:center;">
        <h1 style="margin:0; color:#000;">Jaipur Pink City Cab</h1>
        <p style="margin:6px 0 0; font-size:14px;">New Contact Form Message</p>
      </div>

      <!-- BODY -->
      <div style="padding:30px; color:#333;">
        <p style="font-size:16px; margin-bottom:20px;">
          You have received a new enquiry from your website:
        </p>

        <table style="width:100%; border-collapse:collapse; font-size:15px;">
          <tr>
            <td style="padding:10px; background:#f9f9f9; width:30%;"><b>Name</b></td>
            <td style="padding:10px;">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px; background:#f9f9f9;"><b>Email</b></td>
            <td style="padding:10px;">
              <a href="mailto:${email}" style="color:#EFA701; text-decoration:none;">
                ${email}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:10px; background:#f9f9f9;"><b>Subject</b></td>
            <td style="padding:10px;">${subject || "—"}</td>
          </tr>
        </table>

        <div style="margin-top:25px;">
          <p style="margin-bottom:8px;"><b>Message</b></p>
          <div style="background:#f9f9f9; padding:15px; border-radius:10px; line-height:1.6;">
            ${message}
          </div>
        </div>
      </div>

      <!-- FOOTER -->
      <div style="background:#000; padding:15px; text-align:center; font-size:13px; color:#fff;">
        © ${new Date().getFullYear()} Jaipur Pink City Cab  
        <br/>
        Reliable • Safe • Affordable
      </div>

    </div>
  </div>
  `,
});


    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Email failed" }),
      { status: 500 }
    );
  }
}
