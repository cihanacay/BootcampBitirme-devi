import React from "react";
import LogoHeader from "./LogoHeader";
import "../App.css";
function SectionFooter() {
  return (
    <>
      <div class="container">
        <div>
          <div className="footer__nav--position">
            <LogoHeader />
            <div>
              <nav className="footer__nav">
                <li>
                  <a href="/" class="nav__item ">
                    Overview
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="/find-a-doctor" class="nav__item">
                    Contagion
                  </a>
                </li>
                <li>
                  <a href="/apps" class="nav__item">
                    Symptoms
                  </a>
                </li>
                <li>
                  <a href="/testimonials" class="nav__item">
                    Prevention
                  </a>
                </li>
              </nav>
            </div>
            <div class="iconns">
              <a href="/face">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="/you">
                {" "}
                <i class="fab fa-youtube"></i>
              </a>
              <a href="/vue">
                <i class="fab fa-vuejs"></i>
              </a>
              <a href="/twi">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div>
          <p class="uppertitle">2020 @ All rights reserved by pixelspark.co</p>
        </div>
      </div>
    </>
  );
}
export default SectionFooter;
