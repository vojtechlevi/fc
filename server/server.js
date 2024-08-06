const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

/* Connect test */

const net = require("net");
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;

app.get("/test-smtp", (req, res) => {
  const socket = net.createConnection(smtpPort, smtpHost, () => {
    res.status(200).send("Connection successful");
    socket.end();
  });

  socket.on("error", (err) => {
    res.status(500).send("Connection failed: " + err.message);
  });
});

/* test */

app.post("/send-order", async (req, res) => {
  const { name, email, order } = req.body;

  console.log("Received order:", { name, email, order });

  let transporter;
  try {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // use TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      requireTLS: true, // Use STARTTLS
      tls: {
        ciphers: "SSLv3", // Ensure compatibility with different servers
        rejectUnauthorized: false,
      },
      logger: true,
      debug: true,
    });
  } catch (error) {
    console.error("Error creating transport:", error);
    return res
      .status(500)
      .json({ message: "Failed to create email transport." });
  }

  const mailOptions = {
    from: email,
    to: "order@fruktcentralen.se", // change to your actual email address
    subject: `Ny beställning från ${name}`,
    text: `Namn: ${name}\nBeställning:\n${order}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
    res.status(200).json({ message: "Beställningen har skickats!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      message: `Det uppstod ett problem vid skickandet av beställningen: ${error.message}`,
    });
  }
});

app.listen(port, () => {
  console.log(`Servern kör på http://localhost:${port}`);
});
