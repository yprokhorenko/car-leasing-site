import preloader from "../../assets/preloader.svg";
import React from "react";

let Preloader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={preloader} style={{ width: "100px", height: "100px" }} />
    </div>
  );
};

export default Preloader;
