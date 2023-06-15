import React, { useState, useEffect } from "react";
import { FiChevronsUp } from "react-icons/fi";

export const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1500) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <div
          style={{
            position: "fixed",
            zIndex: 26,
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            backgroundColor: "#151515",
            cursor: "pointer",

          }}
        >
          <FiChevronsUp
            style={{
              height: "100%",
              width: "100%",
              fontSize: "50px",
              color: "white",
            }}
            onClick={scrollUp}
          />
        </div>
      )}
    </div>
  );
};
