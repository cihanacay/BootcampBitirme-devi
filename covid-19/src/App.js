import "./App.css";
import {
  Header,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  SectionFooter,
  MainPage,
} from "./components/AllComponentImport";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/All")
      .then(function ({ data }) {
        setLinks(data[0].headerLinks);
      })
      .catch(function (error) {
        console.log("Hata!!!");
      }, []);
  });
  return (
    <Router>
      <>
        <header>
          <Header links={links} />
        </header>
        {
          <Switch>
            <Route exact path="/Overview">
              <Section1 />
            </Route>
            <Route exact path="/Contagion">
              <Section2 />
            </Route>
            <Route exact path="/section3">
              <Section3 />
            </Route>
            <Route exact path="/Symptoms">
              <Section4 />
            </Route>
            <Route exact path="/Prevention">
              <Section5 />
            </Route>
            <Route exact path="/section6">
              <Section6 />
            </Route>
            <Route exact path="/sectionfooter">
              <SectionFooter />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        }
      </>
    </Router>
  );
}

export default App;
