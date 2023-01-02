import React from "react";

const PhotoGallery = () => {
  return (
    <div className="container">

<div className="page-header">
        <div className="head-image">
          <img
            className="col-12 m-0 black-rock"
            src="https://media-01.imu.nl/storage/ourplanetinmylens.com/6902/travel-photography-tips-from-award-winning-travel-photographer-kim-paffen-2560x1100-1.jpg"
            alt=""
          />
        </div>
        <div className="text-on-image">
          <h2 className="page-title">PHOTO GALLERY</h2>
          <span className="page-subtitle">
            Worthy photos from our best photographers!
          </span>
        </div>
      </div>

    <div className="col-12 justify-content-center">
      <div className="card m-3 border-light">
        <div className="carouselContainer container-fluid home">
          <div
            id="carouselExampleFade"
            className=" carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className=" carousel-inner">
              <div className="container-fluid carouselContent3">
                <div className="carousel-item active">
                  <img
                    width="1050px"
                    height="700px"
                    src="https://wallpaperaccess.com/full/1286211.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    width="1050px"
                    height="700px"
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FmYXJpfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    width="1050px"
                    height="700px"
                    src="https://digwallpapers.com/wallpapers/full/b/7/b/119379-2880x1500-safari-wallpaper-desktop-hd.jpg"
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


    <div className="row row-cols-2 g-3 mt-5">
      <div className="col-6">
          <div className="card m-3 border-light">
            <h2 className="description-title">BOOK AN EXPERIENCE</h2>
            <div className="description-content">
              <p>
                The Safary Adventure's invites you to participate in an unforgettable experience. Book now with one of our photographers and take home the best memories of our safary.
              </p>
              <p>
              <strong>Booking Contact:</strong> xxx-xxx-xxxx
              </p>

             
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
                        src="https://safariguideafrica.com/wp-content/uploads/2014/06/Private-Reserve1.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        width="525px"
                        height="350px"
                        src="https://safari.co.uk/assets/media/designs/uploads/posts/postrelation/1200x728/family-game-drive-two-elephants-chem-chem-concession-23504.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        width="525px"
                        height="350px"
                        src="https://res.cloudinary.com/enchanting/q_70,f_auto,w_2821,h_1881,c_fit/exodus-web/2021/12/cheetah-on-car-safari.jpg"
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

    </div>
  );
};

export default PhotoGallery;
