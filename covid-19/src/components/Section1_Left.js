import "../App.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Section1_Left() {
  const [section1, setSection1] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/All")
      .then(function ({ data }) {
        setSection1(data[0].indexPage[0]);
      })
      .catch(function (error) {
        console.log("Hata!", error);
      });
  }, []);
  return (
    <div>
      <span>{section1.title}</span>
      <h1 className="section1__title">{section1.subtitle}</h1>
      <p className="section1__desc">{section1.description}</p>
      <Link to="/help" className="section1__button">
        Let Us Help{" "}
      </Link>
    </div>
  );
}
export default Section1_Left;
