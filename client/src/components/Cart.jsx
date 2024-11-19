import { useState, useContext } from "react";
import { useCart } from "../utils/cartContext";
import UserContext from "../utils/userContext";
import { Check } from "lucide-react";

export default function CartPage() {
  const { user, profile } = useContext(UserContext);
  const {
    cartItems,
    setCartItems,
    total,
    removeFromCart,
    updateCartItemQuantity,
    updateCartItemUnit,
  } = useCart();
  const [message, setMessage] = useState("");
  const [orderSent, setOrderSent] = useState(false);

  const name = profile.name;
  const email = user.email;

  const handleQuantityChange = (productId, unit, quantity) => {
    if (quantity < 1) return;
    updateCartItemQuantity(productId, unit, parseInt(quantity, 10));
  };

  const handleUnitChange = (productId, oldUnit, newUnit) => {
    updateCartItemUnit(productId, oldUnit, newUnit);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://fc-dlr5.onrender.com/api/send-order",
      {
        //https://fc-dlr5.onrender.com
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, cartItems }),
      }
    );

    if (!response.ok) {
      // Om svaret inte är ok, kasta ett fel
      setMessage("Det uppstod ett problem vid skickandet av beställningen.");
      return;
    }
    setCartItems([]);
    const result = await response.json();
    setMessage(result.message);
    setOrderSent(true);
  };

  if (orderSent) {
    return (
      <div className=" flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Tack för din beställning!
          </h2>

          <p className="text-gray-600 mb-6">
            Din order har mottagits och kommer att behandlas så snart som
            möjligt.
          </p>

          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <p className="text-sm text-gray-500">
              Orderdetaljer har skickats till:
              <br />
              <span className="font-medium">{email}</span>
            </p>
          </div>

          <button
            onClick={() => {
              setOrderSent(false);
              window.location.href = "/";
            }}
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Fortsätt handla
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="max-h-full overflow-scroll items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Varukorg</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Din varukorg är tom.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-h-[500px] overflow-scroll max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-4 border-b"
              >
                <div className="flex items-center">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-16 h-16 object-contain mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-sm md:text-base mb-2">
                      {item.name}
                    </h3>

                    <div className="flex gap-4">
                      <select
                        value={item.unit}
                        onChange={(e) =>
                          handleUnitChange(item.id, item.unit, e.target.value)
                        }
                        className="p-2 text-[10px] border text-black rounded outline-none"
                      >
                        <option key={item.unit} value={item.unit}>
                          {item.unit}
                        </option>
                      </select>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            item.unit,
                            e.target.value
                          )
                        }
                        className="pl-2 text-[10px] border text-black rounded outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-base md:text-lg font-semibold">
                    {(
                      item.price *
                      (item.unit === "kolli"
                        ? item.kolliweight * item.quantity
                        : item.quantity)
                    ).toFixed(2)}{" "}
                    kr
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm md:text-lg"
                  >
                    Ta bort
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <p className="text-base md:text-lg font-bold">
              Totalt: {total.toFixed(2)} kr
            </p>
            <button
              type="submit"
              className="bg-green-500 text-sm text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Skicka beställning
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
