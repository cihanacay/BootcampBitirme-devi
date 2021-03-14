import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Mask from "./../images/Mask.svg";
import hand from "./../images/hand.jpg";
import drink from "./../images/drink.svg";

function Section3_Card() {
  const [section3card, setSection3card] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/All")
      .then(function ({ data }) {
        setSection3card(data[0].contagionPage[0].cards);
      })
      .catch(function (error) {
        console.log("Hata!", error);
      });
  }, []);
  const resultHTML = [];
  section3card.forEach((e, i) => {
    resultHTML.push(
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <figure>
              <img src={Mask} alt="hand"></img>
            </figure>
            <h2 className="card__title">{e.title}</h2>
            <p className="card__desc">{e.description}</p>
          </div>
        </div>
      </div>
    );
  });
  return <div>{resultHTML} </div>;
}
export default Section3_Card;
