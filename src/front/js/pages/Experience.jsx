import React from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div className="container">
      {/* <img className='col-12 black-rock' src='https://www.enkewa.com/wp-content/uploads/2022/01/Black-Rock-Cabecera--scaled.jpg'/> */}
{/* ------------------------------------------PAGE TITLE------------------------------------------------------- */}

      <div className="page-header">
        <div className="head-image">
          <img
            className="col-12 m-0 black-rock"
            src="https://www.enkewa.com/wp-content/uploads/2022/01/Black-Rock-Cabecera--scaled.jpg"
            alt="Freedom Blog"
          />
        </div>
        <div className="text-on-image">
          <h2 className="page-title">EXPERIENCE</h2>
          <span className="page-subtitle">
            we offer a variety of activities
          </span>
        </div>
      </div>

      <div className="row row-cols-2 g-3 mt-5"> {/* --this div wraps the 2 colums layout-- */}

{/* ------------------------------------------DESCRIPTION------------------------------------------------------- */}

        <div className="col-6">
          <div className="card m-3 border-light">
            <h2 className="description-title">FEEL THE ADVENTURE</h2>
            <div className="description-content">
              <p>
                At Enkewa Camp we offer a variety of activities. Besides
                tracking the big 5, enjoying masai mara birdlife and its unique
                and diverse landscapes, we can also access the waterfalls. A
                hot-air balloon can also be organized and for those interested
                in the local Masai culture we could visit a traditional Masai
                village guided by one of our staff members as well as a visit to
                the local market or the community projects we support.
              </p>
              <p>
                Bush breakfast/lunches as well as sundowners are also part of
                our itineraries.
              </p>
              <p>
                Enkewa Camp is children friendly and different programs for
                children can be arranged.
              </p>
            </div>
          </div>
        </div>

{/* ------------------------------------------PHOTO CARROUSEL------------------------------------------------------- */}

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
                        src="https://www.enkewa.com/wp-content/uploads/2021/11/2-2.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        width="525px"
                        height="350px"
                        src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/ab/39.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        width="525px"
                        height="350px"
                        src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/ab/40.jpg"
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
      </div> {/* --Here ends the Wrapper for the 2 colums layout-- */}

{/* -----------------------------------PICTURE LINKS ----------------------------------------------- */}      

      <div className="row row-cols-4 g-3 mt-5">
        <div>
          <Link to="/Maasai">
            <h4 className="text-center">
              <br />
              MAASAI CULTURAL VISITS
            </h4>
            <img
              className="col-12"
              src="https://www.enkewa.com/wp-content/uploads/2022/01/An%CC%83adir-en-Cultura-Masai.jpg"
              alt="example"
            />
            <p className="text-center">Approach the reality</p>
          </Link>
        </div>

        <div>
          <Link to="/Sundowners">
            <h4 className="text-center">
              <br />
              SUNDOWNERS
            </h4>
            <img
              className="col-12"
              src="https://www.enkewa.com/wp-content/uploads/2022/01/DSC_8654-web-scaled.jpg"
              alt="example"
            />
            <p className="text-center">Enjoy the Sun</p>
          </Link>
        </div>

        <div>
          <Link to="/PhotoSafari">
            <h4 className="text-center">PROFESSIONAL SAFARI PHOTOGRAPHIC</h4>
            <img
              className="col-12"
              src="https://www.enkewa.com/wp-content/uploads/2021/11/safari-23424.jpg"
              alt="example"
            />
            <p className="text-center">Capture the moment</p>
          </Link>
        </div>

        <div>
          <Link to="/BalloonSafari">
            <h4 className="text-center">
              <br />
              BALLOON
            </h4>
            <img
              className="col-12"
              src="https://www.enkewa.com/wp-content/uploads/2022/01/DSC_6931-scaled.jpg"
              alt="example"
            />
            <p className="text-center">Get the best view</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
