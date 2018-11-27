import React from 'react';
import Header from './Header';
import Order from "./Order";
import Inventory from "./Inventory"; 

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    // how to update state
    // 1. take a copy of existing state using setState api
    // you take a copy because you don't want to modify original state directly
    // this is known as a mutation (can cause performance issues etc)

    const fishes= { ...this.state.fishes }; //... is an object spread and takes a copy
    // 2. add our new to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. set the new fishes object to state
    this.setState({ fishes });
  };
  render() {
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish = {this.addFish} />
      </div>
    )
  }
}

export default App; 