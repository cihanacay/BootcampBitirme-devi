import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Section_Desc() {
  const [section3, setSection3] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/All")
      .then(function ({ data }) {
        setSection3(data[0].contagionPage[0]);
      })
      .catch(function (error) {
        console.log("Hata!", error);
      });
  }, []);
  return (
    <div>
      <span> {section3.title}</span>
      <h1 className="section3__title">{section3.subtitle}</h1>
      <p className="section3__desc"> {section3.description}</p>
    </div>
  );
}
export default Section_Desc;
