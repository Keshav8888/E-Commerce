import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, updateQuantity, removeFromCart } =
    useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>
          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹ {total.toFixed(2)}</h3>
      <button>Checkout</button>
    </div>
  );
}

export default Cart;