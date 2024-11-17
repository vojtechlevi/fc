const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  if (err.response?.body) {
    console.error("SendGrid Error:", err.response.body);
  }

  res.status(500).json({
    message: "Ett fel uppstod. Försök igen senare.",
  });
};

module.exports = errorHandler;
