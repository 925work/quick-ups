import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home"
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    );
  }
}

export default App;
