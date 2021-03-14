import React from "react";
import Section4Top from "./Section4_Top";
import Section4Bottom from "./Section4_Bottom";

function Section4() {
  return (
    <>
      <section className="section4">
        <div className="container">
          <div className="section4__center">
            <Section4Top />
          </div>
          <div className="section4__image">
            <Section4Bottom />
          </div>
        </div>
      </section>
    </>
  );
}
export default Section4;
