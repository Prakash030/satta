import React from "react";
import "../styles.css";
import { useState } from "react";

const digits: number[] = [];

for (var i = 0; i <= 9; i++) {
  digits.push(i);
}

const buttons = [
  { id: 1, name: "Reset" },
  { id: 2, name: "Submit" },
];

const SingleAnk = () => {
  const [amountState, setAmountState] = useState(Number);

  console.log(amountState);

  const handleButtonClick = (number: number) => {
    // setIsDisabled(false);
    setAmountState(number);
    // You can set the values in the input boxes here if needed.
  };

  const handleSubmit = (name: string) => {
    if (name === "Reset") {
      // setIsDisabled(true);
      window.location.reload();
    }
    if (name === "Submit") {
      alert("Bet is placed !!!");
    }
  };

  return (
    <div>
      <div>
        <div style={{ marginTop: "20px" }}>
          <span
            style={{
              backgroundColor: "red",
              padding: "10px",
              borderRadius: "20%",
              marginLeft: "45%",
              fontWeight: "bold",
              fontSize: "30px",
              color: "white",
            }}
          >
            Single Ank
          </span>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span
              style={{
                backgroundColor: "gray",
                padding: "10px",
                borderRadius: "20%",
                width: "200px",
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              {"formattedTime"}
            </span>
            <span
              style={{
                backgroundColor: "gray",
                padding: "10px",
                borderRadius: "20%",
                width: "200px",
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              SRIDEVI
            </span>
          </div>
        </div>
      </div>
      <div
        className="hrStyle"
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          height: "2px",
          width: "100%",
          background: "#333",
        }}
      ></div>
      <div>
        <p
          style={{
            marginLeft: "45%",
            fontWeight: "bold",
            fontSize: "30px",
            marginBottom: "20px",
          }}
        >
          {" "}
          Select Digits{" "}
        </p>
        <div
          className="AnkCardList"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "10px",
          }}
        >
          {digits.map((number) => (
            <div
              key={number}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                {" "}
                {number}
              </p>
              <input
                type="text"
                style={{
                  backgroundColor: "#d0d6d1",
                  borderRadius: "10%",
                  width: "200px",
                  padding: "10px",
                }}
              ></input>
            </div>
          ))}
        </div>
      </div>
      <div
        className="hrStyle"
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          height: "2px",
          width: "100%",
          background: "#333",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        {/* flex-wrap: "wrap";
        justify-content: "space-around";
        margin-top: "50px"; */}
        {buttons.map((item) => {
          return (
            <button
              key={item.id}
              className="ankbuttonpair"
              onClick={() => handleSubmit(item.name)}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SingleAnk;
