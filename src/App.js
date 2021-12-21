import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
import { Home } from "./Pages/Home";
import NoticiaSingle from "./Pages/NoticiaSingle";
import Bloglist from "./Pages/Bloglist";
import BlogGridPage from "./Pages/BlogGridPage";
import BlogSingle from "./Pages/BlogSingle";
import ScrollToTopRoute from "./ScrollToTopRoute";
import NotFound from "./Pages/404";

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={Home} />
          <ScrollToTopRoute path="/NoticiaSingle/:slug" component={NoticiaSingle} />      
          <ScrollToTopRoute path="/Bloglist" component={Bloglist} />
          <ScrollToTopRoute path="/BlogGridPage" component={BlogGridPage} />
          <ScrollToTopRoute path="/BlogSingle" component={BlogSingle} />      
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
