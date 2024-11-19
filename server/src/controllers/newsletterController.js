// src/controllers/newsletterController.js
const sgMail = require("../config/sendgrid");
const client = require("@sendgrid/client");

// Sätt API nyckeln för client också
client.setApiKey(process.env.SENDGRID_API_KEY);

const sanitizeHtml = require('sanitize-html');

const subscribe = async (req, res, next) => {


  try {
    const { email } = req.body;

    const sanitizedEmail = sanitizeHtml(email);

    if (!email) {
      return res.status(400).json({ message: "Email är obligatoriskt." });
    }

    // 1. Lägg till kontakten i SendGrid
    const data = {
      list_ids: [process.env.SENDGRID_MAILING_ID],
      contacts: [
        {
          email: sanitizedEmail,
        },
      ],
    };

    const request = {
      url: `https://api.sendgrid.com/v3/marketing/contacts`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const [response, body] = await client.request(request);
      console.log("SendGrid response:", response.statusCode, body);
    } catch (error) {
      console.error(
        "SendGrid Contact API Error:",
        error?.response?.body || error.message
      );
      throw new Error("Kunde inte lägga till prenumerant i listan");
    }

    const adminMsg = {
      to: process.env.FC_ADMIN_MAIL,
      from: process.env.FC_SENDER_MAIL,
      subject: "Ny Prenumerant på nyhetsbrevet",
      html: `
        <div>
          <h2>Nyhetsprenumerant</h2>
          <p>Email: ${sanitizedEmail}</p>
        </div>
      `,
    };

    await sgMail.send(adminMsg);

    res.status(200).json({ message: "Prenumeration lyckades!" });
  } catch (error) {
    console.error("Error:", error);
    next(error);
  }
};

module.exports = {
  subscribe,
};
