import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Story from "./Components/Story";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      data: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getdata() {
    $.ajax({
      url: "./data.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getdata();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.data.main} />
        <Story data={this.state.data.resume} />
        <About data={this.state.data.main} />
        <Portfolio data={this.state.data.portfolio} /> 
        <Contact />
        <Footer data={this.state.data.main} /> 
      </div>
    );
  }
}

export default App;
