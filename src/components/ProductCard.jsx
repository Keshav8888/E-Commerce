// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../context/CartContext";

// function ProductCard({ product }) {
//   const { addToCart } = useContext(CartContext);

//   return (
//     <div className="card">
//       <img src={product.image} alt={product.title} width="150" />
//       <h3>{product.title}</h3>
//       <p>₹ {product.price}</p>

//       <Link to={`/product/${product.id}`}>View</Link>
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//     </div>
//   );
// }

// export default ProductCard;



import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title.substring(0, 40)}...</h3>

      <p className="price">₹ {product.price}</p>

      <div className="card-buttons">
        <Link to={`/product/${product.id}`} className="view-btn">
          View
        </Link>

        <button
          className="cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;