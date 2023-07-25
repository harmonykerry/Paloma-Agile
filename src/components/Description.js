import React from "react";

const Description = () => {
  const words = [
    "HEAR",
    "LATEST",
    "TOUR",
    "SEE",
    "SHOP",
    "WATCH",
    "PERSONAL",
    "AID",
  ];

  return (
    <div className="Description">
      {words.map((word, index) => (
        <p
          key={index}
          style={{ marginBottom: "1rem", color: "rgba(255, 255, 255, 0.7)" }}
        >
          {word}
        </p>
      ))}
    </div>
  );
};

export default Description;
