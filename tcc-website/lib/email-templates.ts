/**
 * Email template for contact form submission notification to admin
 */
export function contactNotificationTemplate(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): { html: string; text: string } {
  const html = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouveau message de contact</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #2c5282;">Nouveau message de contact - TCC</h2>
      <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        ${data.phone ? `<p><strong>Téléphone:</strong> ${data.phone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <div style="background-color: white; padding: 15px; border-left: 4px solid #2c5282; margin-top: 10px;">
          ${data.message.replace(/\n/g, "<br>")}
        </div>
      </div>
      <p style="color: #718096; font-size: 14px; margin-top: 20px;">
        Ce message a été envoyé depuis le formulaire de contact du site Tennis Club Clairefontaine.
      </p>
    </body>
    </html>
  `;

  const text = `
    Nouveau message de contact - Tennis Club Clairefontaine

    Nom: ${data.name}
    Email: ${data.email}
    ${data.phone ? `Téléphone: ${data.phone}` : ""}

    Message:
    ${data.message}

    ---
    Ce message a été envoyé depuis le formulaire de contact du site Tennis Club Clairefontaine.
  `;

  return { html, text };
}

/**
 * Email template for contact form confirmation to user
 */
export function contactConfirmationTemplate(name: string): {
  html: string;
  text: string;
} {
  const html = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmation de votre message</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #2c5282;">Merci pour votre message !</h2>
      <p>Bonjour ${name},</p>
      <p>Nous avons bien reçu votre message et nous vous en remercions.</p>
      <p>Notre équipe reviendra vers vous dans les plus brefs délais.</p>
      <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0;"><strong>Tennis Club Clairefontaine</strong></p>
        <p style="margin: 5px 0;">Villeneuve-sur-Yonne</p>
      </div>
      <p style="color: #718096; font-size: 14px; margin-top: 20px;">
        Ceci est un email automatique, merci de ne pas y répondre.
      </p>
    </body>
    </html>
  `;

  const text = `
    Merci pour votre message !

    Bonjour ${name},

    Nous avons bien reçu votre message et nous vous en remercions.
    Notre équipe reviendra vers vous dans les plus brefs délais.

    Tennis Club Clairefontaine
    Villeneuve-sur-Yonne

    ---
    Ceci est un email automatique, merci de ne pas y répondre.
  `;

  return { html, text };
}
