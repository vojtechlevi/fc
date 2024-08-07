import React, { useState } from "react";

function OrderForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [order, setOrder] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://fc-dlr5.onrender.com/send-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, order }),
    });

    if (!response.ok) {
      // Om svaret inte är ok, kasta ett fel
      setMessage("Det uppstod ett problem vid skickandet av beställningen.");
      return;
    }

    const result = await response.json();
    setMessage(result.message);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Namn:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="text-black"
          />
        </label>
        <br />
        <label>
          E-post:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-black"
          />
        </label>
        <br />
        <label>
          Beställning:
          <textarea
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            required
            className="text-black"
          ></textarea>
        </label>
        <br />
        <button type="submit">Skicka beställning</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default OrderForm;
