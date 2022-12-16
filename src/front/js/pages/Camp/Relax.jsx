import React from "react";
import { Link } from "react-router-dom";
// need to make text go over image this will be done when it is merged
// need to add footer


const Relax = () => {
  return (
    <div className="container">
      {}

      <div className="page-header">
        <div className="head-image">
          <img
            className="col-12 m-0 black-rock"
            src="https://www.hammocks.co.uk/images/slides/beach_hammock.webp"
            alt=""
          />
        </div>
        <div className="text-on-image">
          <h2 className="page-title">RELAX</h2>
          <span className="page-subtitle">
            Surrounded by stillness and calmness
          </span>
        </div>
      </div>

      <div className="row row-cols-2 g-3 mt-5">
        <div className="col-6">
          <div className="card m-3 border-light">
            <h2 className="description-title">RELAX</h2>
            <div className="description-content">
              <p>
                Surrounded by the stillness and calmness of our oasis, our aim
                is that our clients enjoy an authentic and exclusive experience
                away from the crowds. The reduced number of tents allows us to
                offer quality and gives character to the camp. The lounge and
                library provide the environment for a comfortable and relaxing
                stay.
              </p>
              <p>
                A small river flows around the camp, creating the most relaxing
                sounds throughout the day. In addition, a strategic location of
                the tents according to a geobiological analysis guarantees the
                perfect balance between relaxation and nature.
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
                        src="https://media.vrbo.com/lodging/19000000/18980000/18973100/18973078/bf33a71f.f10.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        width="525px"
                        height="350px"
                        src="https://www.oceandriveresort.com/wp-content/uploads/2022/03/JH3BUb-900x550.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        width="525px"
                        height="350px"
                        src="https://i.insider.com/60b65de0bee0fc0019d5aa4a?width=1136&format=jpeg"
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

export default Relax;
