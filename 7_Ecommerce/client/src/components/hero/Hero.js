// import React from "react";
// import "./Hero.scss";

// function Hero() {
//   return (
//     <div className="Hero">
//       <div className="hero-content center">
//         <h2 className="heading">Exclusive Print an Artwork</h2>
//         <p className="subheading">
//           Exclusive Art Pieces, for the Exculsive You.
//         </p>
//         <button className="cta btn-primary">Explore more</button>
//       </div>
//     </div>
//   );
// }

// export default Hero;

// Lec_2
import React from "react";
import "./Hero.scss";
import { useNavigate } from "react-router";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="Hero">
      <div className="hero-content center">
        <h2 className="heading">Exclusive Print an Artwork</h2>
        <p className="subheading">
          Exclusive Art Pieces, for the Exculsive You.
        </p>
        <button
          onClick={() => navigate("/category")}
          className="cta btn-primary"
        >
          Explore more
        </button>
      </div>
    </div>
  );
}

export default Hero;
