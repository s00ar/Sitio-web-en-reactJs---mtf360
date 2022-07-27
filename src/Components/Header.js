import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import logo from '../Assets/logo.png'; 
import logo2 from '../Assets/logo-2.png';

class Header extends Component {
  render() {
    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About us
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#story">
                Story
              </a>
            </li> */}

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact us
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <img src={logo} alt="mtf360-logo" />
            </Fade>
            <Fade bottom duration={1200}>
              
            <img src={logo2} alt="mtf360-moto"/>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
{/*               <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul> */}
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#contact">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
