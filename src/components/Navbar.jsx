// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// function Navbar() {
//   const { cart } = useContext(CartContext);

//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/cart">
//         Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
//       </Link>
//     </nav>
//   );
// }

// export default Navbar;



import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <h2 className="logo">ShopEasy</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </div>
    </nav>
  );
}

export default Navbar;