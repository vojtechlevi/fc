import React, { useState } from "react";
import supabase from "../utils/supabaseClient";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handlePasswordReset(e) {
    e.preventDefault();
    setErrorMessage("");
    setResetMessage("");
    if (!email) {
      setErrorMessage("Vänligen ange din e-postadress.");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      setErrorMessage("Något gick fel. Vänligen försök igen.");
    } else {
      setResetMessage(
        "Ett e-postmeddelande för att återställa lösenordet har skickats."
      );
    }
  }

  return (
    <div>
      <form
        onSubmit={handlePasswordReset}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Återställ lösenord
        </label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Ange din e-postadress"
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Skicka återställningslänk
        </button>
      </form>
      {resetMessage && <p>{resetMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default PasswordReset;
