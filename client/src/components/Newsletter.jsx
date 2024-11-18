import React, { useState } from "react";
import { RiLoader5Fill } from "react-icons/ri";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setMessage("");

    try {
      const response = await fetch(
        "https://fc-dlr5.onrender.com/api/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Något gick fel");

      setStatus("success");
      setMessage("Tack för din prenumeration!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container h-screen snap-end justify-center flex items-center mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="lg:h-1/2 relative grid items-center gap-10 py-[15%] px-[6%]  md:p-[6%] lg:grid-cols-2 overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1609869882537-6a860e45a0d6?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          srcset=""
          className="absolute w-full h-full aspect-square object-cover object-center -z-10 rounded-lg translate-x-24"
        />
        <div className="absolute bg-black w-full h-full aspect-square object-cover object-center -z-20 rounded-lg"></div>
        <div>
          <h3 className="text-2xl font-semibold text-white">
            Prenumerera på vårt nyhetsbrev
          </h3>
          <p className="mt-5 text-lg text-neutral-200">
            Håll dig uppdaterad med de senaste nyheterna, inspirationen och
            erbjudandena – direkt i din inkorg.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="gap-3 md:flex">
            <input
              type="email"
              value={email}
              className="peer block w-full rounded-md border border-gray-300 bg-black py-3 pl-7 pr-12 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white peer-invalid:text-pink-600 dark:border-zinc-500 dark:bg-zinc-900 dark:focus:ring-white sm:text-sm"
              placeholder="Din Mailadress"
              autoComplete="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />

            <button
              disabled={loading}
              type="submit"
              className="mt-5 w-full rounded-md bg-white py-3 px-5 text-black hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-opacity-60 md:mt-0 md:w-auto"
            >
              {loading ? (
                <div className="flex w-full items-center justify-center">
                  <RiLoader5Fill className="w-8 animate-spin" />
                </div>
              ) : (
                "Prenumerera"
              )}
            </button>
          </div>

          {message && (
            <p
              className={`mt-2 ${
                status === "success"
                  ? "text-green-400 dark:text-green-400"
                  : "text-pink-500 dark:text-pink-500"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;