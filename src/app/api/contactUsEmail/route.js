import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, budget, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: "All required fields must be filled." }),
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "syvartechcontactsender@gmail.com",
        pass: "ojol gchm ihbh vkna",
      },
    });

    const mailOptions = {
      from: "syvartechcontactsender@gmail.com",
      to: "manandharsamyak7@gmail.com",
      subject: `New Contact Us Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to send email. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
