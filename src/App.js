import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faBars);

class App extends Component {
  constructor() {
    super();
    this.state = {
      toggleMenu: false
    };
  }

  handleToggle = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  };

  render() {
    return (
      <div className="App">
        <div id="top-half">
          {!this.state.toggleMenu ? (
            <header id="header-container">
              <div id="nav-bar">
                <p id="logo">Start Bootstrap</p>
                <nav id="nav-links">
                  <a>SERVICES</a>
                  <a>PORTFOLIO</a>
                  <a>ABOUT</a>
                  <a>TEAM</a>
                  <a>CONTACT</a>
                </nav>
                <FontAwesomeIcon
                  icon="bars"
                  id="hamburger"
                  onClick={this.handleToggle}
                />
              </div>
            </header>
          ) : (
            <>
              <header id="header-container">
                <div id="nav-bar">
                  <p id="logo">Start Bootstrap</p>
                  {/* <nav id="nav-links">
                <a>SERVICES</a>
                <a>PORTFOLIO</a>
                <a>ABOUT</a>
                <a>TEAM</a>
                <a>CONTACT</a>
              </nav> */}
                  <FontAwesomeIcon
                    icon="bars"
                    id="hamburger"
                    onClick={this.handleToggle}
                  />
                </div>
              </header>
              <nav id="side-menu">
                <a>SERVICES</a>
                <br />
                <a>PORTFOLIO</a>
                <br />
                <a>ABOUT</a>
                <br />
                <a>TEAM</a>
                <br />
                <a>CONTACT</a>
              </nav>
            </>
          )}
          <div id="intro">
            <div id="intro-container">
              <p id="intro-text">Welcome To Our Studio!</p>
              <p id="intro-message">IT'S NICE TO MEET YOU</p>
              <button id="more-button">TELL ME MORE</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
