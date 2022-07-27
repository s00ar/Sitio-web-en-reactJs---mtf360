import React, { Component } from "react";
import Fade from "react-reveal";
import profile from "../Assets/about-image.png";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                src={profile}
                alt="mtf360io pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About us</h2>

              <p>MTF360 was worn five years ago when my wife and I realized that some companies weren't getting the amount of sales and general success they should have. We were seeing innovative companies go under even though they were reinvesting their earnings in new more modern equipment than their competitors. This set up a spark in my mind and I ventured to find the main reason and to try and help this entrepreneurs and businessmen succeed in a modern world.</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>MTF360</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="mailto:info@metamorfosis360.com" className="button">
                      <i className="fa fa-phone"></i>Contact Us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
