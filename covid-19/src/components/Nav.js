import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav({ links }) {
  const resultHTML = [];
  links.forEach((e) => {
    resultHTML.push(
      <li className="nav-item active">
        <Link to={e} className="nav__item ">
          {e}
        </Link>
      </li>
    );
  });

  return (
    <div>
      {" "}
      <header className="header navbar-expand-lg ">
        <div className="container">
          <div className="nav-wrap ">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" to="#"></Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className=" my-2 my-lg-0">
                  <ul className="navbar-nav mr-auto">
                    {resultHTML}
                    <li>
                      <form>
                        <Link
                          to="/deneme"
                          type="submit"
                          className=" nav__button"
                        >
                          Contact
                        </Link>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Nav;
