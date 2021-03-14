import React from "react";
import Section3Main from "./Section3_Desc";
import Section3Card from "./Section3_Card";

function Section3() {
  return (
    <>
      <section className="section3">
        <div className="container">
          <div className="section3__center"></div>
          <Section3Main />
          <Section3Card />
        </div>
      </section>
    </>
  );
}
export default Section3;
