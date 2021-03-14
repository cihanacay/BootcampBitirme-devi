import React from "react";
import Section1Left from "./Section1_Left";
import Section1Right from "./Section1_Right";

function Section1() {
  return (
    <>
      <div className="section1">
        <div className="container">
          <div className="section1__all">
            <div className="row">
              <div className="col-12 col-lg-6 col">
                <div className="section1__left">
                  <Section1Left />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <figure>
                  <Section1Right />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section1;
