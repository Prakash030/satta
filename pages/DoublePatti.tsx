import React from 'react'
import "../styles.css";
import { useState } from "react";

const DoublePatti = () => {

  const ank0 = [118,226,244,299,334,488,550,668,677];
  const ank1 = [100,119,155,227,335,344,399,588,669];
  const ank2 = [110,200,228,255,336,499,660,688,778];
  const ank3 = [120,139,148,157,229,237,300,337,355];
  const ank4 = [130,149,158,167,239,248,257,338,400];
  const ank5 = [140,159,168,230,249,258,267,348,357];
  const ank6 = [150,169,178,240,259,268,349,358,367];
  const ank7 = [160,179,250,269,278,340,359,368,458];
  const ank8 = [170,189,260,279,350,369,378,459,567];
  const ank9 = [180,234,270,289,340,379,450,469,478];
 
 

 

  const buttons = [
    { id: 1, name: "Reset" },
    { id: 2, name: "Submit" },
  ];


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
          Panna of Ank 0{" "}
        </p>
        <div
          className="AnkCardList"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {ank0.map((number) => (
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
          Panna of Ank 1{" "}
        </p>
        <div
          className="AnkCardList"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {ank1.map((number) => (
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
          Panna of Ank 2{" "}
        </p>
        <div
          className="AnkCardList"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {ank2.map((number) => (
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
          Panna of Ank 3{" "}
        </p>
        <div
          className="AnkCardList"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {ank3.map((number) => (
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
          Panna of Ank 4{" "}
        </p>
        <div
          className="AnkCardList"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {ank4.map((number) => (
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
          Panna of Ank 5{" "}
        </p>
        <div
          className="AnkCardList"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {ank5.map((number) => (
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
          Panna of Ank 6{" "}
        </p>
        <div
          className="AnkCardList"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {ank6.map((number) => (
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
          Panna of Ank 7{" "}
        </p>
        <div
          className="AnkCardList"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {ank7.map((number) => (
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
          Panna of Ank 8{" "}
        </p>
        <div
          className="AnkCardList"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {ank8.map((number) => (
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
          Panna of Ank 9{" "}
        </p>
        <div
          className="AnkCardList"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {ank9.map((number) => (
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

export default DoublePatti
