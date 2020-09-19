import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Match from "./pages/Match/Match";

const TRACKING_ID = "UA-144735539-2";
ReactGA.initialize(TRACKING_ID);

const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const App = () => {
  // be sure to fire GA pageview on initial page load
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/match">
          <Match />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
