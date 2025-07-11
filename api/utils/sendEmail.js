import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "nil.somudra51@gmail.com",
      pass: "qpjookphsxcgiwxj",
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
