import React from "react";
import "./footer.css"; // Assuming the CSS is saved in App.css
import Ellipse_54 from "../../asserts/footer imgs/Ellipse_54.png";
import Ellipse_55 from "../../asserts/footer imgs/Ellipse_55.png";
import Ellipse_56 from "../../asserts/footer imgs/Ellipse_56.png";
import Ellipse_57 from "../../asserts/footer imgs/Ellipse_57.png";
import Group_215 from "../../asserts/footer imgs/Group_215.png";
import Group_212 from "../../asserts/footer imgs/Group_212.png";
import Group from "../../asserts/footer imgs/Group.png";
import arrow_right from "../../asserts/footer imgs/arrow_right.png";
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer_container">
        <Row1Comp1 />
        <Row1Comp2 />
      </div>
      <br />
      <br />
      <div className="footer_container">
        <Row2Comp1 />
        <Row2Comp2 />
        <Row2Comp3 />
        <Row2Comp4 />
      </div>
      <div className="footer_container" style={{ justifyContent: "space-between", paddingLeft: "7%", paddingRight: "8.5%" }}>
        <Row3Comp1 />
        <Row3Comp2 />
      </div>
    </div>
  );
};

const Row1Comp1 = () => {
  return (
    <div id="row1comp1">
      <h1>People are Saying<br />About DoWhith</h1>
      <p className="grey">
        Everything you need to accept to payment and grow<br />
        your money of manage anywhere on planet
      </p>
      <br />
      <br />
      <img src={Group_212} alt="Group 212" />
      <br />
      <br />
      <p className="grey">
        I am very helped by this E-wallet application , my<br />
        days are very easy to use this application and its very<br />
        helpful in my life , even I can pay a short time 😍
      </p>
      <p className="grey">_ Aria Zinanrio</p>
      <br />
      <img src={Ellipse_54} alt="Ellipse 54" />
      <img src={Ellipse_55} alt="Ellipse 55" />
      <img src={Ellipse_56} alt="Ellipse 56" />
      <img src= {Ellipse_57}alt="Ellipse 57" />
      <img src={Group_215} alt="Group 215" />
    </div>
  );
};

const Row1Comp2 = () => {
  return (
    <div id="row1comp2">
      <center>
        <img src={Group} alt="Group" width="72.06px" height="86p" />
        <h3 style={{ fontSize: "1.5rem", fontFamily: "Arial, Helvetica, sans-serif" }}>Get Started</h3>
      </center>
      <p>Email</p>
      <input type="text" placeholder="Enter your email" className="white" style={{ width: "99%", height: "30px" }} />
      <br />
      <p>Message</p>
      <textarea rows="4" placeholder="What are you say?" className="white" style={{ width: "99%" }} />
      <br />
      <button id="demo-button">Request Demo</button>
      <p style={{ marginLeft: "70%", marginBottom: "2%" }}>
        <a href="/" style={{ color: "white", cursor: "pointer" }}>OR Start Free Trial</a>
      </p>
    </div>
  );
};

const Row2Comp1 = () => {
  return (
    <div id="row2comp1">
      <h1 style={{ color: "#54BD95", fontSize: "2.5rem" }}>Biccas</h1>
      <p className="grey">Get started now try our product</p>
      <fieldset>
        <input type="text" placeholder="Enter your email here" className="eButton" />
        <button id="Lbutton">
          <img src={arrow_right} alt="Arrow right" />
        </button>
      </fieldset>
    </div>
  );
};

const Row2Comp2 = () => {
  return (
    <div id="row2comp2">
      <ul>
        <li style={{ color: "white" }}>Support</li>
        <li><a href="/">Help centre</a></li>
        <li><a href="/">Account information</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact us</a></li>
      </ul>
    </div>
  );
};

const Row2Comp3 = () => {
  return (
    <div id="row2comp3">
      <ul>
        <li style={{ color: "white" }}>Help and Solution</li>
        <li><a href="/">Talk to support</a></li>
        <li><a href="/">Support docs</a></li>
        <li><a href="/">System status</a></li>
        <li><a href="/">Covid response</a></li>
      </ul>
    </div>
  );
};

const Row2Comp4 = () => {
  return (
    <div id="row2comp4">
      <ul>
        <li style={{ color: "white" }}>Product</li>
        <li><a href="/">Update</a></li>
        <li><a href="/">Security</a></li>
        <li><a href="/">Beta test</a></li>
        <li><a href="/">Pricing product</a></li>
      </ul>
    </div>
  );
};

const Row3Comp1 = () => {
  return (
    <div id="row3comp1">
      <p>© 2022 Biccas Inc. Copyright and rights reserved</p>
    </div>
  );
};

const Row3Comp2 = () => {
  return (
    <div id="row3comp2">
      <p>Terms and Conditions - Privacy Policy</p>
    </div>
  );
};

export default Footer;