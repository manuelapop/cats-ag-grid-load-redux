import React, { Component } from "react";
import logo from "./logo.svg";
import Cats from "./components/cats";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return <Cats cats={this.props.cats} />;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    cats: state.cats
  };
}

export default connect(mapStateToProps)(App);
