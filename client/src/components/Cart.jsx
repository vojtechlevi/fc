import { useCart } from "../utils/cartContext";

export default function CartPage() {
  const {
    cartItems,
    total,
    removeFromCart,
    updateCartItemQuantity,
    updateCartItemUnit,
  } = useCart();

  const handleQuantityChange = (productId, unit, quantity) => {
    if (quantity < 1) return;
    updateCartItemQuantity(productId, unit, parseInt(quantity, 10));
  };

  const handleUnitChange = (productId, oldUnit, newUnit) => {
    updateCartItemUnit(productId, oldUnit, newUnit);
  };

  console.log(cartItems);

  return (
    <div className="min-h-screen bg-gray-100 text-black p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Varukorg</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Din varukorg är tom.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
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
                    className="w-16 h-16 object-cover mr-4"
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
                    {(item.price * item.quantity).toFixed(2)} kr
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
            <button className="bg-green-500 text-sm text-white px-4 py-2 rounded hover:bg-green-600">
              Skicka beställning
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
