import "../App.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Section2_Right() {
  const [section2, setSection2] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/All")
      .then(function ({ data }) {
        setSection2(data[0].indexPage[0]);
      })
      .catch(function (error) {
        console.log("Hata! ", error);
      });
  }, []);
  return (
    <div>
      <span>{section2.title2}</span>
      <h1 className="section2__title">{section2.subtitle2}</h1>
      <p className="section2__desc"> {section2.description2}</p>
      <Link to="/what is corona" className="section2__button">
        Learn More{" "}
      </Link>
    </div>
  );
}
export default Section2_Right;
