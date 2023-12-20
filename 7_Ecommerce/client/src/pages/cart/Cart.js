// // Lec_2
// import React from "react";
// import "./Cart.scss";

// function Cart({ onClose }) {
//   return (
//     <div className="Cart">
//       <div className="overlay" onClick={onClose}></div>
//       <div className="cart-content">
//       <div className="btn-primary">Close</div>
//       </div>
//     </div>
//   );
// }

// export default Cart;

// Lec_3
// import React from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import "./Cart.scss";
// import CartItem from "../../components/cartItem/CartItem";

// function Cart({ onClose }) {
//   return (
//     <div className="Cart">
//       <div className="overlay" onClick={onClose}></div>
//       <div className="cart-content">
//         <div className="header">
//           <h3>Shopping Cart</h3>
//           <div className="close-btn" onClick={onClose}>
//             <AiOutlineClose /> Close
//           </div>
//         </div>
//         <div className="carts-items">
//           <CartItem />
//           <CartItem />
//           <CartItem />
//         </div>

//         <div className="checkout-info">
//           <div className="total-amount">
//             <h3 className="total-message">Total:</h3>
//             <h3 className="total-value">₹ 4529</h3>
//           </div>
//           <div className="checkout btn-primary">Checkout now</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;

// // Lec_5
// import React from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import { BsCartX } from "react-icons/bs";
// import "./Cart.scss";
// import CartItem from "../../components/cartItem/CartItem";
// import { useSelector } from "react-redux";

// function Cart({ onClose }) {
//   const cart = useSelector((state) => state.cartReducer.cart);
//   let totalAmount = 0;
//   cart.forEach((item) => (totalAmount += item.quantity * item.price));
//   const isCartEmpty = cart.length === 0;

//   return (
//     <div className="Cart">
//       <div className="overlay" onClick={onClose}></div>
//       <div className="cart-content">
//         <div className="header">
//           <h3>Shopping Cart</h3>
//           <div className="close-btn" onClick={onClose}>
//             <AiOutlineClose /> Close
//           </div>
//         </div>
//         <div className="cart-items">
//           {cart.map((item) => (
//             <CartItem key={item.id} cart={item} />
//           ))}
//         </div>

//         {isCartEmpty && (
//           <div className="empty-cart-info">
//             <div className="icon">
//               <BsCartX />
//             </div>
//             <h4>Cart is Empty</h4>
//           </div>
//         )}

//         {!isCartEmpty && (
//           <div className="checkout-info">
//             <div className="total-amount">
//               <h3 className="total-message">Total:</h3>
//               <h3 className="total-value">₹ {totalAmount}</h3>
//             </div>
//             <div className="checkout btn-primary">Checkout now</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cart;

// Lec_6
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";
import "./Cart.scss";
import CartItem from "../../components/cartItem/CartItem";
import { useSelector } from "react-redux";
import { axiosClient } from "../../utils/axiosClient";

import { loadStripe } from "@stripe/stripe-js";
const strapiPromise = loadStripe(
  ` ${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`
);

function Cart({ onClose }) {
  const cart = useSelector((state) => state.cartReducer.cart);
  let totalAmount = 0;
  cart.forEach((item) => (totalAmount += item.quantity * item.price));
  const isCartEmpty = cart.length === 0;

  async function handelCheckout() {
    try {
      const response = await axiosClient.post("/orders", {
        products: cart,
      });
      // console.log("response", response);
      const stripe = await strapiPromise;
      await stripe.redirectToCheckout({
        sessionId: response.data.stripeId,
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="Cart">
      <div className="overlay" onClick={onClose}></div>
      <div className="cart-content">
        <div className="header">
          <h3>Shopping Cart</h3>
          <div className="close-btn" onClick={onClose}>
            <AiOutlineClose /> Close
          </div>
        </div>
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem key={item.id} cart={item} />
          ))}
        </div>

        {isCartEmpty && (
          <div className="empty-cart-info">
            <div className="icon">
              <BsCartX />
            </div>
            <h4>Cart is Empty</h4>
          </div>
        )}

        {!isCartEmpty && (
          <div className="checkout-info">
            <div className="total-amount">
              <h3 className="total-message">Total:</h3>
              <h3 className="total-value">₹ {totalAmount}</h3>
            </div>
            <div className="checkout btn-primary" onClick={handelCheckout}>
              Checkout now
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
