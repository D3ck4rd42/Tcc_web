import nodemailer from "nodemailer";

// Create reusable transporter object using SMTP transport
export const emailTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
}

/**
 * Send an email using the configured SMTP transporter
 */
export async function sendEmail(options: EmailOptions) {
  try {
    const info = await emailTransporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@tennisclubclairefontaine.fr",
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });

    console.log("Email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}
