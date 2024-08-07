// server.js or the relevant server file
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendgridMail = require("@sendgrid/mail");

require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Set SendGrid API key
const apiKey = process.env.SENDGRID_API_KEY;
sendgridMail.setApiKey(apiKey);

app.post("/send-order", async (req, res) => {
  const { name, email, order } = req.body;

  // Email content
  const msg = {
    to: "leviekstrom@fruktcentralen.se", // Recipient's email address
    from: "leviekstrom@fruktcentralen.se", // Verified sender's email address
    subject: `New Order from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nOrder:\n${order}`,
  };

  try {
    // Send email
    await sendgridMail.send(msg);
    res.status(200).json({ message: "Order has been sent!" });
  } catch (error) {
    console.error(
      "Error sending email:",
      error.response ? error.response.body : error
    );
    res.status(500).json({
      message: `There was a problem sending the order: ${error.message}`,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
