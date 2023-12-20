//Lec_2
// import React from "react";
// import "./ProductDetail.scss";
// import dummyImg from "../../assets/naruto.jpeg";

// function ProductDetail() {
//   return (
//     <div className="ProductDetail">
//       <div className="container">
//         <div className="product-layout">
//           <div className="product-img center">
//             <img src={dummyImg} alt="product img" />
//           </div>
//           <div className="product-info">
//             <h1 className="heading">This is the Title, wall poster</h1>
//             <h3 className="price">₹ 549</h3>
//             <p className="description">
//               A poster is a usually large sheet with images and text which aims
//               at conveying certain information and making it noticeable for the
//               target audience. Also, they can be presented small sizes, for
//               example, digital version or postcards.
//             </p>
//             <div className="cart-options">
//               <div className="quantity-selector">
//                 <span className="btn decrement">-</span>
//                 <span className="quantity">3</span>
//                 <span className="btn increment">+</span>
//               </div>
//               <button className="btn-primary add-to-cart">Add to Cart</button>
//             </div>
//             <div className="return-policy">
//               <ul>
//                 <li>
//                   A large sheet that is placed either on a public space to
//                   promote something or on a wall as decoration.
//                 </li>
//                 <li>
//                   Posters include both textual and graphic elements, although a
//                   poster may be either wholly graphical or wholly text.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;

// // Lec_3
// import React from "react";
// import "./ProductDetail.scss";
// import dummyImg from "../../assets/naruto.jpeg";
// import { useParams } from "react-router-dom";

// function ProductDetail() {
//   const params = useParams();
//   // console.log("params", params);

//   return (
//     <div className="ProductDetail">
//       <div className="container">
//         <div className="product-layout">
//           <div className="product-img center">
//             <img src={dummyImg} alt="product img" />
//           </div>

//           <div className="product-info">
//             <h1 className="heading">This is the Title, wall poster</h1>
//             <h3 className="price">₹ 549</h3>
//             <p className="description">
//               A poster is a usually large sheet with images and text which aims
//               at conveying certain information and making it noticeable for the
//               target audience. Also, they can be presented small sizes, for
//               example, digital version or postcards.
//             </p>
//             <div className="cart-options">
//               <div className="quantity-selector">
//                 <span className="btn decrement">-</span>
//                 <span className="quantity">3</span>
//                 <span className="btn increment">+</span>
//               </div>
//               <button className="btn-primary add-to-cart">Add to Cart</button>
//             </div>
//             <div className="return-policy">
//               <ul>
//                 <li>
//                   A large sheet that is placed either on a public space to
//                   promote something or on a wall as decoration.
//                 </li>
//                 <li>
//                   Posters include both textual and graphic elements, although a
//                   poster may be either wholly graphical or wholly text.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;

// // Lec_4
// import React, { useEffect, useState } from "react";
// import "./ProductDetail.scss";
// import dummyImg from "../../assets/naruto.jpeg";
// import { useParams } from "react-router-dom";
// import { axiosClient } from "../../utils/axiosClient";
// import Loader from "../../components/loader/Loader";

// function ProductDetail() {
//   const params = useParams();
//   const [product, setProduct] = useState(null);

//   async function fetchData() {
//     const productResponse = await axiosClient.get(
//       `/products?filters[key][$eq]=${params.productId}&populate=*`
//     );
//     console.log("product", productResponse);
//     if (productResponse.data.data.length > 0) {
//       setProduct(productResponse.data.data[0]);
//     }
//   }

//   useEffect(() => {
//     setProduct(null);
//     fetchData();
//   }, [params]);

//   if (!product) {
//     return <Loader />;
//   }

//   return (
//     <div className="ProductDetail">
//       <div className="container">
//         <div className="product-layout">
//           <div className="product-img center">
//             <img
//               src={product?.attributes.image.data.attributes.url}
//               alt="product img"
//             />
//           </div>

//           <div className="product-info">
//             <h1 className="heading">{product?.attributes.title}</h1>
//             <h3 className="price">₹ {product?.attributes.price}</h3>
//             <p className="description">{product?.attributes.desc}</p>
//             <div className="cart-options">
//               <div className="quantity-selector">
//                 <span className="btn decrement">-</span>
//                 <span className="quantity">3</span>
//                 <span className="btn increment">+</span>
//               </div>
//               <button className="btn-primary add-to-cart">Add to Cart</button>
//             </div>
//             <div className="return-policy">
//               <ul>
//                 <li>
//                   A large sheet that is placed either on a public space to
//                   promote something or on a wall as decoration.
//                 </li>
//                 <li>
//                   Posters include both textual and graphic elements, although a
//                   poster may be either wholly graphical or wholly text.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;

// Lec_5
import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";

function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer.cart);
  const quantity =
    cart.find((item) => item.key === params.productId)?.quantity || 0;

  async function fetchData() {
    const productResponse = await axiosClient.get(
      `/products?filters[key][$eq]=${params.productId}&populate=*`
    );
    if (productResponse.data.data.length > 0) {
      setProduct(productResponse.data.data[0]);
    }
  }

  useEffect(() => {
    setProduct(null);
    fetchData();
  }, [params]);

  if (!product) {
    return <Loader />;
  }

  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="product-layout">
          <div className="product-img center">
            <img
              src={product?.attributes.image.data.attributes.url}
              alt="product img"
            />
          </div>

          <div className="product-info">
            <h1 className="heading">{product?.attributes.title}</h1>
            <h3 className="price">₹ {product?.attributes.price}</h3>
            <p className="description">{product?.attributes.desc}</p>
            <div className="cart-options">
              <div className="quantity-selector">
                <span
                  className="btn decrement"
                  onClick={() => dispatch(removeFromCart(product))}
                >
                  -
                </span>
                <span className="quantity">{quantity}</span>
                <span
                  className="btn increment"
                  onClick={() => dispatch(addToCart(product))}
                >
                  +
                </span>
              </div>
              <button
                className="btn-primary add-to-cart"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
            </div>
            <div className="return-policy">
              <ul>
                <li>
                  A large sheet that is placed either on a public space to
                  promote something or on a wall as decoration.
                </li>
                <li>
                  Posters include both textual and graphic elements, although a
                  poster may be either wholly graphical or wholly text.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
