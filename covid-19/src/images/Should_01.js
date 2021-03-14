import React from "react";
import "../App.css";

import Maskgirl_1 from "./../images/Maskgirl_1.svg";
function Should_01({ links }) {
  var resultHtml = [];
  links.forEach(({ preventionPage, id }) => {
    resultHtml.push(
      <div key={id}>
        <div className="row">
          <div className="col-12 col-lg-7">
            <div className="ingredients__left">
              <h2 className="ingredients__title1">{preventionPage[0].title}</h2>
              <p className="ingredients__desc1">
                {preventionPage[0].description}
              </p>
              <a
                href="/sifirbir"
                className="ingredients__button1 ingredients__button4"
              >
                {preventionPage[0].id}
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <img src={Maskgirl_1} alt="user" />
          </div>
        </div>
      </div>
    );
  });

  return <div>{resultHtml}</div>;
}
export default Should_01;
