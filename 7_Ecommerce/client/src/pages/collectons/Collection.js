// import React from 'react'

// function Collection() {
//   return (
//     <div>Collection</div>
//   )
// }

// export default Collection

// // Lec_2
// import React, { useEffect, useState } from "react";
// import "./Collection.scss";
// import Product from "../../components/product/Product";
// import { useNavigate, useParams } from "react-router";

// function Collection() {
//   const navigate = useNavigate();
//   const params = useParams();
//   const [categoryId, setCategoryId] = useState("");

//   const categoryList = [
//     {
//       id: "comics",
//       value: "Comics",
//     },
//     {
//       id: "tv-shows",
//       value: "TV Shows",
//     },
//     {
//       id: "sports",
//       value: "Sports",
//     },
//   ];

//   useEffect(() => {
//     setCategoryId(params.categoryId);
//     //api call
//   }, [params]);

//   function updateCategory(e) {
//     // console.log("checked", e.target.value);
//     navigate(`/category/${e.target.value}`);
//   }
//   return (
//     <div className="Collection">
//       <div className="container">
//         <div className="header">
//           <div className="info">
//             <h2>Explore All Print and Artwork</h2>
//             <p>India's largest collection of wall posters for your brand.</p>
//           </div>
//           <div className="sort-by">
//             <div className="sort-by-container">
//               <p className="sort-by-text">Sort By</p>
//               <select className="select-sort-by" name="sort-by" id="sort-by">
//                 <option value="relavance">Relavance</option>
//                 <option value="newest-first">Newest First </option>
//                 <option value="price-lth">Price - Low to High</option>
//               </select>
//             </div>
//           </div>
//         </div>
//         <div className="content">
//           <div className="filter-box">
//             <div className="category-filter">
//               <h3>Category</h3>

//               {categoryList.map((item) => (
//                 <div key={item.id} className="filter-radio">
//                   <input
//                     name="category"
//                     type="radio"
//                     value={item.id}
//                     id={item.id}
//                     onChange={updateCategory}
//                     checked={item.id==categoryId}
//                   />
//                   <label htmlFor={item.id}>{item.value}</label>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="products-box">
//             <Product />
//             <Product />
//             <Product />
//             <Product />
//             <Product />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Collection;

// Lec_5
import React, { useEffect, useState } from "react";
import "./Collection.scss";
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { axiosClient } from "../../utils/axiosClient";

function Collection() {
  const navigate = useNavigate();
  const params = useParams();
  const [categoryId, setCategoryId] = useState("");
  const categories = useSelector((state) => state.categoryReducer.categories);
  const [products, setProducts] = useState([]);
  const sortOptions = [
    {
      value: "Price - Low To High",
      sort: "price",
    },
    {
      value: "Newest first",
      sort: "createdAt",
    },
  ];
  const [sortBy, setSortBy] = useState(sortOptions[0].sort);

  async function fetchProducts() {
    const url = params.categoryId
      ? `/products?populate=image&filters[category][key][$eq]=${params.categoryId}&sort=${sortBy}`
      : `/products?populate=image&sort=${sortBy}`;
    const response = await axiosClient.get(url);
    setProducts(response.data.data);
  }

  useEffect(() => {
    setCategoryId(params.categoryId);
    fetchProducts();
  }, [params, sortBy]);

  function updateCategory(e) {
    // console.log("checked", e.target.value);
    navigate(`/category/${e.target.value}`);
  }

  // function handleSortChange(e) {
  //   const sortKey = e.target.value;
  //   // console.log(sortKey);
  //   setSortBy(sortKey);
  // }

  return (
    <div className="Collection">
      <div className="container">
        <div className="header">
          <div className="info">
            <h2>Explore All Print and Artwork</h2>
            <p>India's largest collection of wall posters for your brand.</p>
          </div>
          <div className="sort-by">
            <div className="sort-by-container">
              <p className="sort-by-text">Sort By</p>
              <select
                className="select-sort-by"
                name="sort-by"
                id="sort-by"
                // onChange={handleSortChange}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((item) => (
                  <option key={item.sort} value={item.sort}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>

              {categories.map((item) => (
                <div key={item.id} className="filter-radio">
                  <input
                    name="category"
                    type="radio"
                    value={item.attributes.key}
                    id={item.id}
                    onChange={updateCategory}
                    checked={item.attributes.key === categoryId}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="products-box">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
