import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "70f57a19a79093",
      pass: "ff4db0de10e09e",
    },
  });

  try {
    await transport.sendMail({
      from: "nil.somudra51@gmail.com",
      to: to,
      subject: subject,
      text: text,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};

export default sendEmail;
