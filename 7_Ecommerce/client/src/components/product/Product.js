// import React from "react";
// import './Product.scss'
// import dummyImg from '../../assets/naruto.jpeg'

// function Product() {
//   return (
//     <div className="Product">
//       <div className="product-container">
//         <div className="product-img">
//           <div className="img-container">
//             <img src={dummyImg} alt="Naruto" id="img" />
//           </div>
//         </div>
//         <div className="product-info">
//           <p className="title">Delux wall hanger, 23x23 Solid Color</p>
//           <p className="price">₹ 549</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Product;

// // Lec_2
// import React from "react";
// import './Product.scss'
// import dummyImg from '../../assets/naruto.jpeg'

// function Product() {
//   return (
//     <div className="Product">
//       <div className="product-container">
//         <div className="product-img">
//           <div className="img-container">
//             <img src={dummyImg} alt="Naruto" id="img" />
//           </div>
//         </div>
//         <div className="product-info">
//           <p className="title">Delux wall hanger, 23x23 Solid Color</p>
//           <p className="price">₹ 549</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Product;

// // Lec_3
// import React from "react";
// import "./Product.scss";
// import dummyImg from "../../assets/naruto.jpeg";
// import { useNavigate } from "react-router";

// function Product() {
//   const navigate = useNavigate();
//   return (
//     <div className="Product" onClick={()=>navigate('/products/vburbvirb')}>
//       <div className="product-container">
//         <div className="product-img">
//           <div className="img-container">
//             <img src={dummyImg} alt="Naruto" id="img" />
//           </div>
//         </div>
//         <div className="product-info">
//           <p className="title">Delux wall hanger, 23x23 Solid Color</p>
//           <p className="price">₹ 549</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Product;

// Lec_4
import React from "react";
import "./Product.scss";
import { useNavigate } from "react-router";

function Product({ product }) {
  const navigate = useNavigate();
  return (
    <div
      className="Product"
      onClick={() => navigate(`/products/${product?.attributes?.key}`)}
    >
      <div className="product-container">
        <div className="product-img">
          <div className="img-container">
            <img
              src={product?.attributes?.image?.data?.attributes?.url}
              alt={product?.attributes?.title}
              id="img"
            />
          </div>
        </div>
        <div className="product-info">
          <p className="title">{product?.attributes?.title}</p>
          <p className="price">₹ {product?.attributes?.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
