// src/controllers/newsletterController.js
const sgMail = require("../config/sendgrid");
const client = require("@sendgrid/client");

// Sätt API nyckeln för client också
client.setApiKey(process.env.SENDGRID_API_KEY);

const subscribe = async (req, res, next) => {
  console.log("API Key:", process.env.SENDGRID_API_KEY);
  console.log("List ID:", process.env.SENDGRID_MAILING_ID);

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email är obligatoriskt." });
    }

    // 1. Lägg till kontakten i SendGrid
    const data = {
      list_ids: [process.env.SENDGRID_MAILING_ID],
      contacts: [
        {
          email: email,
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

    // 2. Skicka bekräftelsemail
    const subscriberMsg = {
      to: email,
      from: "leviekstrom@fruktcentralen.se",
      subject: "Tack för din prenumeration!",
      html: `
        <div>
          <h2>Tack för din prenumeration!</h2>
          <p>Vi ser fram emot att hålla dig uppdaterad med våra senaste nyheter och artiklar.</p>
        </div>
      `,
    };

    const adminMsg = {
      to: "leviekstrom@fruktcentralen.se",
      from: "leviekstrom@fruktcentralen.se",
      subject: "Ny Newsletter Prenumerant",
      html: `
        <div>
          <h2>Ny Newsletter Prenumerant</h2>
          <p>Email: ${email}</p>
        </div>
      `,
    };

    await Promise.all([sgMail.send(subscriberMsg), sgMail.send(adminMsg)]);

    res.status(200).json({ message: "Prenumeration lyckades!" });
  } catch (error) {
    console.error("Error:", error);
    next(error);
  }
};

module.exports = {
  subscribe,
};
