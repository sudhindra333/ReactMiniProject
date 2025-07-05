import React, { Component } from "react";
import PetNav from "./components/pet-nav";
import PictureBox from "./components/picture-box";
import About from "./components/about-box";
import Post from "./components/post";
import Footer from "./components/footer";

import "./App.css";

const App = () => {
  const component = new React.Component();

  component.render = () => {
    return (
      <div className="App">
        <PetNav />
        <div class="container">
          <div class="row">
            <PictureBox />
            <About />
          </div>
          <div class="row">
            <Post />
          </div>
          <Footer />
        </div>
      </div>
    );
  };
  return component;
};

export default App;
