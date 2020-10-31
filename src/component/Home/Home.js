import React from "react";
import "./Home.css";
import logo from "../../images/logos/logo.png";
import img1 from "../../images/logos/Frame.png";
import img2 from "../../images/logos/slack.png";
import img3 from "../../images/logos/google.png";
import img4 from "../../images/logos/uber.png";
import img5 from "../../images/logos/netflix.png";
import img6 from "../../images/logos/airbnb.png";
import img7 from "../../images/icons/service1.png";
import img8 from "../../images/icons/service2.png";
import img9 from "../../images/icons/service3.png";
import img10 from "../../images/customer-1.png";
import img11 from "../../images/customer-2.png";
import img12 from "../../images/customer-3.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container TopHeader">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand d-flex align-items-center" href="#">
            <img className="logo" src={logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse nav justify-content-end navLink"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item d-flex align-items-center">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item d-flex align-items-center">
                <a class="nav-link" href="#">
                  Our Portfolio
                </a>
              </li>
              <li class="nav-item d-flex align-items-center">
                <a class="nav-link" href="#">
                  Our Team
                </a>
              </li>
              <li class="nav-item d-flex align-items-center">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <button type="button" class="btn btn-dark">
                    <Link to="/Login">Login</Link>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <div className="secondHead">
          <div className="row">
            <div className="col-md-4">
              <h1>let's grow your brand to the next level</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                placeat mollitia, ex cum esse doloremque.
              </p>
              <button type="button" class="btn btn-dark">
                HIRE US
              </button>
            </div>
            <div className="col-md-8">
              <img
                className="rounded float-right"
                src={img1}
                width="550"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div class="row row-cols-5">
          <div class="col">
            <img src={img2} width="100" alt="" />
          </div>
          <div class="col">
            <img src={img3} width="100" alt="" />
          </div>
          <div class="col">
            <img src={img4} width="100" alt="" />
          </div>
          <div class="col">
            <img src={img5} width="100" alt="" />
          </div>
          <div class="col">
            <img src={img6} width="100" alt="" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <h2 className="text-center">
          Provide Awsome <span className="special">Service</span>
        </h2>
        <br />
        <br />
        <div class="row">
          <div class="col-6 col-md-4 box">
            <img src={img7} width="100" alt="" />
            <h3>web and Mobile Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, saepe.
            </p>
          </div>
          <div class="col-6 col-md-4 box">
            <img src={img8} width="100" alt="" />
            <h3>Graphics Design</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, incidunt.
            </p>
          </div>
          <div class="col-6 col-md-4 box">
            <img src={img9} width="100" alt="" />
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              laboriosam.
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="box2">
          <br />
          <br />
          <h3 className="text-center">
            Here are same of <span className="special">our word</span>
          </h3>
          <br />
        </div>
        <br />
        <br />
        <h3 className="text-center">
          Clients <span className="special">Feedback</span>
        </h3>
        <br />
        <br />
        <div class="row">
          <div class="col-6 col-md-4 box">
            <img src={img10} width="100" alt="" />
            <h3>Nash Patrik</h3>
            <h6>CEO, Manpol</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, saepe.
            </p>
          </div>
          <div class="col-6 col-md-4 box">
            <img src={img11} width="100" alt="" />
            <h3>Miriam Barron</h3>
            <h6>CEO, Manpol</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, incidunt.
            </p>
          </div>
          <div class="col-6 col-md-4 box">
            <img src={img12} width="100" alt="" />
            <h3>Bria Malone</h3>
            <h6>CEO, Manpol</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              laboriosam.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="footer">
          <div class="row">
            <div class="col-sm-5">
              <h2>let us handle your project, professionally.</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Soluta, ad saepe esse quasi fugit rem sapiente eos modi
                consequuntur nostrum!
              </p>
            </div>
            <div class="col-sm-7">
              <input
                className="inputBox"
                type="email"
                name=""
                id=""
                placeholder="Email"
              />
              <br />
              <input
                className="inputBox"
                type="text"
                name=""
                id=""
                placeholder="Your name/ Company's name"
              />
              <br />
              <input
                className="inputBox1"
                type="text"
                name=""
                id=""
                placeholder="Your Messages"
              />
              <button type="button" className="btn btn-dark">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
