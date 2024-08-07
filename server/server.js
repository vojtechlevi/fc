const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/send-order", async (req, res) => {
  const { name, email, order } = req.body;

  console.log("Received order:", { name, email, order });

  const msg = {
    to: "leviekstrom@fruktcentralen.se", // Ändra till din faktiska e-postadress
    from: "leviekstrom@fruktcentralen.se", // Ange den godkända avsändaradressen på SendGrid
    subject: `Ny beställning från ${name}`,
    text: `Namn: ${name}\nE-post: ${email}\nBeställning:\n${order}`,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully.");
    res.status(200).json({ message: "Beställningen har skickats!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      message: "Det uppstod ett problem vid skickandet av beställningen.",
    });
  }
});

app.listen(port, () => {
  console.log(`Servern kör på http://localhost:${port}`);
});
