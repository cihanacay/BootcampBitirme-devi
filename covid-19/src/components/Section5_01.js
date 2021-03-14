import "../App.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Maskgirl_1 from "./../images/Maskgirl_1.svg";
function Section5_01() {
  const [section5, setSection5] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/All")
      .then(function ({ data }) {
        setSection5(data[0].preventionPage[0]);
      })
      .catch(function (error) {
        console.log("Hata!", error);
      });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-7">
          <Link to="/sifirbir" className="maskeresim__button1 ">
            {" "}
            {section5.id}
          </Link>
          <div className="maskeresim__left">
            <h2 className="maskeresim__title1">{section5.title}</h2>
            <p className="maskeresim__desc1">{section5.description}</p>
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <img src={Maskgirl_1} alt="user" />
        </div>
      </div>
    </div>
  );
}
export default Section5_01;
