// import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Home from "./pages/home/Home";
// import Categories from "./pages/categories/Categories";
// import ProductDetail from "./pages/productDetail/ProductDetail";
// import Footer from "./components/footer/Footer";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Categories />} />
//         <Route path="/products/:productId" element={<ProductDetail />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;

// // Lec_2
// import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Home from "./pages/home/Home";
// import Categories from "./pages/categories/Categories";
// import ProductDetail from "./pages/productDetail/ProductDetail";
// import Footer from "./components/footer/Footer";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/category/:categoryId?" element={<Categories />} />
//           <Route path="/products/:productId" element={<ProductDetail />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

// // Lec_5
// import { useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Home from "./pages/home/Home";
// import Categories from "./pages/collectons/Collection";
// import ProductDetail from "./pages/productDetail/ProductDetail";
// import Footer from "./components/footer/Footer";
// import { useDispatch } from "react-redux";
// import { fetchCategories } from "./redux/categorySlice";

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, []);

//   return (
//     <div className="App">
//       <Navbar />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/category/:categoryId?" element={<Categories />} />
//           <Route path="/products/:productId" element={<ProductDetail />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

// Lec_6
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Categories from "./pages/collectons/Collection";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Footer from "./components/footer/Footer";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/categorySlice";
import Payments from "./components/payments/PAyments";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId?" element={<Categories />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/payments/:status" element={<Payments />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
