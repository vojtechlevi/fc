import { useCart } from "../utils/cartContext";

export default function CartPage() {
  const { cartItems, total, removeFromCart } = useCart();

  return (
    <>
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
                      <h3 className="font-bold text-sm md:text-base">
                        {item.name}
                      </h3>
                      <p>{item.description}</p>
                      <p className="text-xs text-gray-500">
                        {item.unit} x {item.quantity}
                      </p>
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
    </>
  );
}
