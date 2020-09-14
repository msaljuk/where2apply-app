import React from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Match from "./pages/Match/Match";

const trackingId = "UA-144735539-2";
ReactGA.initialize(trackingId);

const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
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
}

export default App;
