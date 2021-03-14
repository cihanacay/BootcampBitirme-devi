import React from "react";
import Section5Top from "./Section5_Top";
import Section501 from "./Section5_01";
import Section502 from "./Section5_02";
import Section503 from "./Section5_03";
import Section504 from "./Section5_04";
function Section5() {
  return (
    <>
      <section className="section5">
        <div className="container">
          <Section5Top />
          <div className="maskeresim">
            <div className="container">
              <Section501 />
              <Section502 />
              <Section503 />
              <Section504 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Section5;
