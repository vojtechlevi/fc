const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-order", async (req, res) => {
  const { name, email, order } = req.body;

  console.log("Received order:", { name, email, order });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // use TLS
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: email,
    to: "order@fruktcentralen.se", // Ändra till din faktiska e-postadress
    subject: `Ny beställning från ${name}`,
    text: `Namn: ${name}\nE-post: ${email}\nBeställning:\n${order}`,
  };

  try {
    await transporter.sendMail(mailOptions);
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
