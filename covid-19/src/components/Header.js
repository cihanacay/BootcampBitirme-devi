import React from "react";
import Nav from "./Nav";
import LogoHeader from "./LogoHeader";

function Header({ links }) {
  return (
    <>
      <div className="container">
        <div className="Header-position">
          <div>
            <LogoHeader />
          </div>
          <div>
            <Nav links={links} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
