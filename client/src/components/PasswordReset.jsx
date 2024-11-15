import React, { useState } from "react";
import supabase from "../utils/supabaseClient";

const PasswordReset = ({ showPasswordReset, setShowPasswordReset }) => {
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
    <div className="absolute top-0 left-0 w-full z-10 h-full flex flex-col items-center justify-center">
      <form
        onSubmit={handlePasswordReset}
        className="h-[500px] bg-white/50 backdrop-blur-[2px] w-2/3 lg:w-1/4 rounded-lg flex flex-col gap-8 px-12 justify-center border"
      >
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Ange din e-postadress"
          onChange={(e) => setEmail(e.target.value)}
          className=" appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-b-2"
        />
        <div className="h-[50px]">
          {resetMessage && (
            <p className="text-center text-red-500">{resetMessage}</p>
          )}
          {errorMessage && (
            <p className="text-center text-red-500">{errorMessage}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Skicka återställningslänk
        </button>
        <button
          onClick={() => setShowPasswordReset(!showPasswordReset)}
          type="submit"
          className="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logga in
        </button>
      </form>
    </div>
  );
};

export default PasswordReset;
