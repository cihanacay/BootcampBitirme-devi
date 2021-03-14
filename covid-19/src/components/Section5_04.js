import "../App.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Maskgirl_4 from "./../images/Maskgirl_4.svg";
function Should_04() {
  const [section5, setSection5] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/All")
      .then(function ({ data }) {
        setSection5(data[0].preventionPage[3]);
      })
      .catch(function (error) {
        console.log("Hata!", error);
      });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-7">
          <Link to="/sifirdort" className="maskeresim__button1 ">
            {section5.id}
          </Link>
          <div className="maskeresim__left">
            <h2 className="maskeresim__title1">{section5.title}</h2>
            <p className="maskeresim__desc1">{section5.description}</p>
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <img src={Maskgirl_4} alt="Maskgirl_3" />
        </div>
      </div>
    </div>
  );
}
export default Should_04;
