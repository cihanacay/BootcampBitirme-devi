import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Section4_Top() {
  const [section4, setSection4] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/All")
      .then(function ({ data }) {
        setSection4(data[0].symptompsPage[0]);
      })
      .catch(function (error) {
        console.log("Hata!", error);
      });
  }, []);

  return (
    <div>
      <span> {section4.title}</span>
      <h2 className="section4__title">{section4.subtitle}</h2>
      <p className="section4__desc"> {section4.description}</p>
    </div>
  );
}
export default Section4_Top;
