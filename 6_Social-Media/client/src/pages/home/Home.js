// // Lec_2
// import React, { useEffect } from "react";
// import { axiosClient } from "../../utils/axiosClient";

// function Home() {
//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     const response = await axiosClient.get("/posts/all");
//     console.log("got the response", response);
//   }

//   return <div>Home</div>;
// }

// export default Home;

// // Lec_5
// import { Outlet } from "react-router-dom";
// import Navbar from "../../components/navbar/Navbar";

// function Home() {
//   return (
//     <>
//       <Navbar />
//       <div className="outlet" style={{ marginTop: "60px" }}>
//         <Outlet />
//       </div>
//     </>
//   );
// }

// export default Home;

// Lec_6
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getMyInfo } from "../../redux/slices/appConfigSlice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyInfo());
  }, []);
  return (
    <>
      <Navbar />
      <div className="outlet" style={{ marginTop: "60px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default Home;
