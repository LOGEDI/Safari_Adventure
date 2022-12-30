import React from "react";
import { Link } from "react-router-dom";

const Camp = () => {
  return (
    <div className="container">
      {}

      <div className="page-header">
        <div className="head-image">
          <img
            className="col-12 m-0 black-rock"
            src="https://pix10.agoda.net/hotelImages/110/11034571/11034571_20010821200086892405.jpg?ca=9&ce=1&s=1024x768"
            alt=""
          />
        </div>
        <div className="text-on-image">
          <h2 className="page-title">THE CAMP</h2>
          <span className="page-subtitle">
            Enkewa Camp, an owner-run eco camp
          </span>
        </div>
      </div>

      <div className="row row-cols-2 g-3 mt-5">
        <div className="col-6">
          <div className="card m-3 border-light">
            <h2 className="description-title">FEEL AT HOME</h2>
            <div className="description-content">
              <p>
                Enkewa Camp is a small, exclusive, luxury and all-inclusive
                tented camp in the heart of the least explored area of the
                Maasai Mara. Enkewa Camp, an owner-run camp, is based on an
                eco-sustainable concept with a knowledgeable, experienced and
                professional team formed by local Maasai.
              </p>
              <p>
                The Camp has a capacity of 7 tents, one Mess tent and a Lounge
                area. The tents are comfortable and spacious with views over the
                Savannah.
              </p>
              <p>
                Our priority is that our clients feel at home away from home and
                enjoy a unique and authentic wildlife experience far from the
                transited areas.
              </p>

              <button type="button" class="btn btn-warning btn-lg">
                <Link to="/signup">BOOK WITH US</Link>
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
                        src="https://st.hzcdn.com/simgs/pictures/family-rooms/cozy-house-in-the-woods-nathan-taylor-for-obelisk-home-img~b9414ddd0dfbbdef_4-2099-1-5e7cd4d.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        width="525px"
                        height="350px"
                      src="https://media-cdn.tripadvisor.com/media/photo-m/1280/19/d2/25/4b/cozy-house.jpg"            
                    className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        width="525px"
                        height="350px"
                        src="https://www.ikea.com/images/a-living-room-with-sofa-and-chaise-longue-upholstered-in-red-cd170d5ef74819ae0bd9ae044fe7fc1c.jpeg"
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

export default Camp;