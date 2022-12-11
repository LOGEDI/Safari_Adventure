import React from "react";
import { Link } from "react-router-dom";

const BalloonSafari = () => {
  return (
    <div className="container">
      {/* <img className='col-12 black-rock' src='https://www.enkewa.com/wp-content/uploads/2022/01/Black-Rock-Cabecera--scaled.jpg'/> */}

      <div className="page-header">
        <div className="head-image">
          <img
            className="col-12 m-0 black-rock"
            src="https://www.enkewa.com/wp-content/uploads/2021/11/balloon-1.jpg"
            alt="Freedom Blog"
          />
        </div>
        <div className="text-on-image">
          <h2 className="page-title">BALLOON SAFARI</h2>
          <span className="page-subtitle">
            A once-in-a-lifetime magical experience
          </span>
        </div>
      </div>

      <div className="row row-cols-2 g-3 mt-5">
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
                        src="https://www.enkewa.com/wp-content/uploads/2022/01/DSC_6931-scaled.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        width="525px"
                        height="350px"
                        src="https://www.enkewa.com/wp-content/uploads/2021/11/ballon-safari.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        width="525px"
                        height="350px"
                        src="https://www.enkewa.com/wp-content/uploads/2021/11/masai-4.jpg"
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

        <div className="col-6">
          <div className="card m-3 border-light">
            <h2 className="description-title">FLOAT OVER THE MARA</h2>
            <div className="description-content">
              <p>
                A once-in-a-lifetime magical experience that will be permanently
                etched in your travel memories. Give yourself a treat and feel
                the immensity of the Mara at its best while smoothly flying
                above the Savannah and its wildlife.
              </p>
              <p>
                Float in the sky, drifting with the breeze of the wind,
                overlooking the plains, just in time to experience a
                breathtaking sunrise and see the reserve from a bird’s eye view
              </p>
            </div>

            <button type="button" class="btn btn-warning btn-lg">
              BOOK WITH US
            </button>
          </div>
        </div>
      </div>

      {/* <div className='row row-cols-4 g-3 mt-5'>
        <div >
          <Link to="/Maasai">
            <h4 className='text-center'><br/>MAASAI CULTURAL VISITS</h4>
            <img className='col-12'
              src="https://www.enkewa.com/wp-content/uploads/2022/01/An%CC%83adir-en-Cultura-Masai.jpg"
              alt="example"
            />
            <p className='text-center'>Approach the reality</p>
          </Link>
        </div>

        <div >
          <Link to="/Sundowners">
            <h4 className='text-center'><br/>SUNDOWNERS</h4>
            <img className='col-12'
              src="https://www.enkewa.com/wp-content/uploads/2022/01/DSC_8654-web-scaled.jpg"
              alt="example"
            />
            <p className='text-center'>Enjoy the Sun</p>
          </Link>
        </div>

        <div >
          <Link to="/PhotoSafari">
            <h4 className='text-center'>PROFESSIONAL SAFARI PHOTOGRAPHIC</h4>
            <img className='col-12'
              src="https://www.enkewa.com/wp-content/uploads/2021/11/safari-23424.jpg"
              alt="example"
            />
            <p className='text-center'>Capture the moment</p>
          </Link>
        </div>


        <div >
          <Link to="/BalloonSafari">
            <h4 className='text-center'><br/>BALLOON</h4>
            <img className='col-12'
              src="https://www.enkewa.com/wp-content/uploads/2022/01/DSC_6931-scaled.jpg"
              alt="example"
            />
            <p className='text-center'>Get the best view</p>
          </Link>
        </div>


    </div> */}
    </div>
  );
};

export default BalloonSafari;
