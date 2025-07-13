import nodemailer from "nodemailer";

// Function to send an email
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
      to,
      subject,
      text
    });
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};

export default sendEmail;

// This file contains a utility function to send emails using nodemailer.
// It can be used for sending verification emails, password recovery links, etc.
 const resendEmail = async ({to, subject, text}) => {
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
      to,
      subject,
      text
    });
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};

export { sendEmail, resendEmail };



