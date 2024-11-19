const sgMail = require("../config/sendgrid");

const sendOrder = async (req, res, next) => {
  try {
    const { name, email, cartItems } = req.body;

    if (!cartItems?.length) {
      return res.status(400).json({ message: "Cart is empty or undefined." });
    }

    const formattedCartItems = cartItems
<<<<<<< HEAD
      .map((item) => `- ${item.name} (${item.unit}): ${item.quantity} kr`)
=======
      .map(
        (item) =>
          `- ${item.name} (${item.unit}): ${item.quantity}`
      )
>>>>>>> f0909db0bff5e566cfd431a9580cb2cb3a377b37
      .join("\n");

    // Mail till företaget
    const companyMsg = {
      to: process.env.FC_ORDER_MAIL,
      from: process.env.FC_SENDER_MAIL,
      subject: `Ny beställning från ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nBeställning:\n${formattedCartItems}`,
    };

    // Bekräftelsemail till kunden
    const customerMsg = {
      to: email,
      from: process.env.FC_SENDER_MAIL,
      templateId: "d-d709848908ac49b68c447a044756aba1",
      dynamicTemplateData: {
        name: name,
        orderDetails: cartItems.map((item) => ({
          itemName: item.name,
          unit: item.unit,
          priceUnit: item.priceUnit,
          quantity: item.quantity,
          price: item.price,
        })),
        // orderDate: new Date().toLocaleDateString('sv-SE'),
      },
    };

    // Skicka båda mailen
    await Promise.all([sgMail.send(companyMsg), sgMail.send(customerMsg)]);

    res
      .status(200)
      .json({
        message:
          "Order has been sent and confirmation email has been sent to customer!",
      });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sendOrder,
};
