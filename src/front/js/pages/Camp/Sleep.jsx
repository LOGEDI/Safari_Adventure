import React from "react";
import { Link } from "react-router-dom";
// need to make text go over image this will be done when it is merged
// need to add footer-

const Sleep = () => {
  return (
    <div className="container">
      {}

      <div className="page-header">
        <div className="head-image">
          <img
            className="col-12 m-0"
            src="https://www.strohboid.com/uploads/media/tabs_carousel/04/354-glamping-at-night.jpg?v=2-0"
            alt=""
          />
        </div>
        <div className="text-on-image">
          <h2 className="page-title">SLEEP</h2>
          <span className="page-subtitle">
            Luxury tents, fully insect-proof
          </span>
        </div>
      </div>

      <div className="row row-cols-2 g-3 mt-5">
        <div className="col-6">
          <div className="card m-3 border-light">
            <h2 className="description-title">SLEEP</h2>
            <div className="description-content">
              <p>
                Our luxury tents are all fully insect-proof, with en-suite
                bathrooms and a flushing toilet, running cold water and hot
                safari showers. A strategic placing of the tents has been
                carefully chosen according to a geobiology analysis (magnetic
                fields and radiations) which will contribute to a better sleep.
                As per our eco-friendly ethos we exclusively use solar energy –
                provided 24 hours- so we can avoid use of generators or pumps
                that might interfere with our guests’ rest.
              </p>
              <p>
                <ul>
                  <li>1 Family Tent</li>
                  <li>7 Double Tents</li>
                </ul>
              </p>
              <button type="button" class="btn btn-warning btn-lg">
                <Link to="/signup">
                  BOOK WITH US
                </Link>
            </button>
            </div>
          </div>
        </div>

        <div className="col-6 justify-content-center">
          <div className="card m-3 border-light">
            <div className="carouselContainer container-fluid home">
              <div
                id="carouselExampleFade"
                className=" carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className=" carousel-inner">
                  <div className="container-fluid carouselContent2">
                    <div className="carousel-item active">
                      <img
                        width="525px"
                        height="350px"
                        src="https://mlzk4igdxhvb.i.optimole.com/cb:_VQe~67918/w:400/h:400/q:mauto/rt:fill/g:ce/f:avif/https://pascalbeds.co.uk/oaxethyh/2020/04/kendal-wingback-bed.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        width="525px"
                        height="350px"
                        src="https://st.hzcdn.com/fimgs/pictures/bedrooms/simple-elegance-adams-beasley-associates-img~4b81a9cf033c1776_0319-1-ac48ad4-w360-h360-b0-p0.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        width="525px"
                        height="350px"
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  

      <div></div>
    </div>
  );
};

export default Sleep;
