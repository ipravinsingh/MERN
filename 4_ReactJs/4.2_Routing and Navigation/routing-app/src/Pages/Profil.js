import React from "react";
import { useParams } from "react-router";

function Profil() {
  const parameters = useParams();
  return (
    <div>
      <h1>Profil of {parameters.userId}</h1>
    </div>
  );
}

export default Profil;
