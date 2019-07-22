import React from "react";
import moment from "moment";

const uuidv4 = require("uuid/v4");

import Dashboard from './Dashboard'
import UserLanding from './UserLanding'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDesktop: false
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1450 });
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div>
        {isDesktop ? (
          <Dashboard />
        ) : (
          <UserLanding />
        )}
      </div>
    )
  } 
}

export default App
