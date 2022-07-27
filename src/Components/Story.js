import React, { Component } from "react";
import Slide from "react-reveal";
import Story01 from "../Assets/blind.png";
import Story02 from "../Assets/publicist.png";
import Story03 from "../Assets/blind-closeup.png";
import Story04 from "../Assets/publicist-closeup.png";
import Fade from "react-reveal";

class Story extends Component {

  render() {


    return (
      <section id="resume">
        <div className="row top-space bottom-space">
        <p className="eleven columns">
        In order to fully explain the impact of a cohesive and integrated approach to the development of a software system, I would like to share with you the following story:</p></div>
      <Fade top>
        <div className="row">
          <div className="twelve columns ">

            <div className="image--container">
            <h1>There was a blind on a street corner, with a sign that said:</h1>
            </div>
          </div>
        </div>
            </Fade>
      <Fade bottom>
        <div className="row">
          <div className="seven columns header-col">

            <div className="image--container">
              <img src={Story01} alt="mtf360io pic" />
            </div>
          </div>
          <div className="five columns main-col">
            <div className="row item">
              <div className="twelve columns">
              <br />
                <h2 className="centered-text black-text">
                        “I am blind, please help.”
                  </h2>              

              </div>
            </div>
          </div>
        </div>
            </Fade>
      <Slide left duration={1600}>
        <div className="row top-space">
            <div className="five columns">
              <div className="image--container">
                <img src={Story02} alt="mtf360io pic" />
              </div>
            </div>
          <div className="seven columns header-col">
            <br />
              <h1 className="centered-text">A publicist that was walking by took a few coins from his pocket and dropped them into the hat. He then took the sign,turned it around, and wrote some words. He put the sign back so that everyone who walked by would see the new message.</h1>
          </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row top-space">
            <div className="six columns">
              <div className="image--container">
                <img src={Story03} alt="mtf360io pic" />
              </div>
            </div>
              
            <div className="six columns">
              <h1 className="centered-text">That afternoon the publicist came to see how things were.
                <br />The blind man recognized his footsteps and out of curiosity asked:<br />
              </h1>
              <h2 className="centered-text black-text top-space">
                “Were you the one who changed my sign this morning?
                <br />"What did you write?”
              </h2>
            </div>
          </div>
        </Slide>

        <Fade bottom>
          <div className="row top-space bottom-space">
            <div className="twelve column">
              <div className="image--container">
                <img src={Story04} alt="mtf360io pic" />
              </div>
              <h1 className="centered-text">The publicist said:</h1>
              <br /> 
              <h2 className="centered-text black-text">“I only wrote the truth.”
                <br />I wrote: “Today is a gorgeous first day of spring but I cannot see it.”
              </h2>
            </div>
          </div>
        </Fade>
        
        <div className="row top-space">
          <h2 className="twelve columns centered-text black-text">Moral of the Story:</h2><br />
          <h2 className="twelve columns centered-text black-text big-text">Be creative
          <br />&
          <br />Think differently!</h2>
        </div>
      </section>
    );
  }
}

export default Story;
