import React, { Component } from 'react';
// import styled from 'styled-components';

// Components
import DashBoard  from './Component/DashBoard';
// import Login  from './Component/Login';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
    <>
      <DashBoard/>
      {/* <Login/> */}

    </>     
    );
  }
}

export default App;