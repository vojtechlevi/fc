const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/send-order", async (req, res) => {
  const { name, email, cartItems } = req.body;

  // Check if cartItems is defined and not empty
  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: "Cart is empty or undefined." });
  }

  // Format cart items for email content
  const formattedCartItems = cartItems
    .map(
      (item) =>
        `- ${item.name} (${item.unit}): ${item.quantity} x ${item.price} kr`
    )
    .join("\n");

  // Log the formatted cart items for debugging
  console.log("Formatted cart items:", formattedCartItems);

  // Email content
  const msg = {
    to: "leviekstrom@fruktcentralen.se", // Recipient's email address
    from: "leviekstrom@fruktcentralen.se", // Verified sender's email address
    subject: `New Order from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nOrder:\n${formattedCartItems}`,
  };

  try {
    // Send email
    await sgMail.send(msg);
    res.status(200).json({ message: "Order has been sent!" });
  } catch (error) {
    console.error(
      "Error sending email:",
      error.response ? error.response.body : error
    );
    res.status(500).json({ message: "Failed to send order." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
