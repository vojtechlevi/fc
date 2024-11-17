const sgMail = require("../config/sendgrid");

const sendOrder = async (req, res, next) => {
  try {
    const { name, email, cartItems } = req.body;

    if (!cartItems?.length) {
      return res.status(400).json({ message: "Cart is empty or undefined." });
    }

    const formattedCartItems = cartItems
      .map(
        (item) =>
          `- ${item.name} (${item.unit}): ${item.quantity} x ${item.price} kr`
      )
      .join("\n");

    const msg = {
      to: "leviekstrom@fruktcentralen.se",
      from: "leviekstrom@fruktcentralen.se",
      subject: `New Order from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nOrder:\n${formattedCartItems}`,
    };

    await sgMail.send(msg);
    res.status(200).json({ message: "Order has been sent!" });
  } catch (error) {
    next(error); // Låt error middleware hantera felet
  }
};

module.exports = {
  sendOrder,
};
