import React from "react";
import { Link } from "react-router-dom";

const Camp = () => {
  return (
    <div className="container">
      <div className="carousel2">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
        rel="stylesheet"
      />

      <div
        className="carousel slide"
        data-bs-ride="carousel"
        id="carouselExampleIndicators"
      >
        <div className="carousel-indicators">
          <button
            aria-label="Slide 1"
            className="active"
            data-bs-slide-to={0}
            data-bs-target="#carouselExampleIndicators"
            type="button"
          />{" "}
          <button
            aria-label="Slide 2"
            data-bs-slide-to={1}
            data-bs-target="#carouselExampleIndicators"
            type="button"
          />{" "}
          <button
            aria-label="Slide 3"
            data-bs-slide-to={2}
            data-bs-target="#carouselExampleIndicators"
            type="button"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              alt="..."
              className="d-block w-100"
              src="https://i.postimg.cc/LsTXqTNZ/1.jpg"
            />
            <div className="carousel-caption">
              <h5
                className="animated bounceInRight"
                style={{ animationDelay: "1s" }}
              >
                Web Design
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: "2s" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
              <p
                className="animated bounceInRight"
                style={{ animationDelay: "3s" }}
              >
                <a href="#">Learn More</a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              alt="..."
              className="d-block w-100"
              src="https://i.postimg.cc/C1rx7Kyh/2.jpg"
            />
            <div className="carousel-caption">
              <h5
                className="animated bounceInRight"
                style={{ animationDelay: "1s" }}
              >
                Graphics Design
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: "2s" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
              <p
                className="animated bounceInRight"
                style={{ animationDelay: "3s" }}
              >
                <a href="#">Learn More</a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              alt="..."
              className="d-block w-100"
              src="https://i.postimg.cc/c4nL7ZFW/3.jpg"
            />
            <div className="carousel-caption">
              <h5
                className="animated bounceInRight"
                style={{ animationDelay: "1s" }}
              >
                Photography
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: "2s" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
              <p
                className="animated bounceInRight"
                style={{ animationDelay: "3s" }}
              >
                <a href="#">Learn More</a>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          data-bs-slide="prev"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        >
          <span aria-hidden="true" className="carousel-control-prev-icon" />{" "}
          <span className="visually-hidden">Previous</span>
        </button>{" "}
        <button
          className="carousel-control-next"
          data-bs-slide="next"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        >
          <span aria-hidden="true" className="carousel-control-next-icon" />{" "}
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    
      <div>

        <figure className="snip0016">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample41.jpg" alt="sample41" />
          <figcaption>
            <h2>I think <span>nighttime</span> is dark</h2>
            <p>So you can imagine your fears with less distraction.</p>
            <a href="#" />
          </figcaption>			
        </figure>
       
      </div>



    
    </div>
  );
};

export default Camp;
