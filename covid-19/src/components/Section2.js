import React from "react";
import Section2Left from "./Section2_Left";
import Section2Right from "./Section2_Right";

function Section2() {
  return (
    <>
      <section className="section2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <figure className="section2__group">
                <Section2Left />
              </figure>
            </div>

            <div className="col-12 col-lg-7">
              <div className="section2__padding">
                <Section2Right />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Section2;
