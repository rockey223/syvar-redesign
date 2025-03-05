import nodemailer from "nodemailer";

export async function POST(req) {

  
  try {
    const { name, email, budget, message, challenges } = await req.json();


    if (!name || !email || !message || !budget || !challenges) {
      return new Response(
        JSON.stringify({ message: "All required fields must be filled." }),
        { status: 400 }
      );
    }

    // Create a reusable transporter object
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.COMPANY_EMAIL,
      subject: `New Contact Us Message from ${name}`,
      text: `
        📌 **New Contact Inquiry**
        
        **Name:** ${name}
        **Email:** ${email}
        **Budget:** ${budget}
        **Challenges:** ${
          Array.isArray(challenges) ? challenges.join(", ") : challenges
        }
        
        **Message:**
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to send email. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
