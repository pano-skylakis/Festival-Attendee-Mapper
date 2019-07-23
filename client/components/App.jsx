import React from "react";

import Dashboard from './Dashboard'
import UserLanding from './UserLanding'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDesktop: false
    }
  }


  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }


  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }
  

  updatePredicate = () => {
    this.setState({ isDesktop: window.innerWidth > 1023 })
  }

  render() {

    const isDesktop = this.state.isDesktop;

    return (
      <div>
        <Dashboard />
      </div>
    )
  } 
}

export default App
