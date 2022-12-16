import React from "react";
import { Link } from "react-router-dom";
// need to make text go over image this will be done when it is merged
// need to add footer


const Eat = () => {
  return (
    <div className="container">
      {}

      <div className="page-header">
        <div className="head-image">
          <img
            className="col-12 m-0 black-rock"
            src="https://eurokera.com/wp-content/uploads/2019/06/professional_lifestyle_kitchen_crew_dressing_plates-copy-2.jpg"
            alt=""
          />
        </div>
        <div className="text-on-image">
          <h2 className="page-title">EAT</h2>
          <span className="page-subtitle">
            Homemade menus prepared with organic products
          </span>
        </div>
      </div>

      <div className="row row-cols-2 g-3 mt-5">
        <div className="col-6">
          <div className="card m-3 border-light">
            <h2 className="description-title">EAT</h2>
            <div className="description-content">
              <p>
                An unforgettable safari experience also requires great food. Our
                chefs are the ones that will make your culinary experience
                remarkable. Homemade menus prepared with organic products
                according to any diet requirements that our guests might have.
                No buffet is served.
              </p>
              <p>
                Our delicious picnic bush breakfasts and lunches in carefully
                selected sites will be part of your unforgettable safari
                memories.
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
                        src="https://www.deccanherald.com/sites/dh/files/articleimages/2020/06/12/iStock-1081560570-1591947820.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        width="525px"
                        height="350px"
                        src="https://previews.123rf.com/images/jovanmandic/jovanmandic1608/jovanmandic160800266/64951390-luxury-food-on-wedding-table-in-hotel-or-restaurant.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        width="525px"
                        height="350px"
                        src="https://previews.123rf.com/images/loisik/loisik1110/loisik111000054/10806368-luxury-food.jpg"
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
      <p class="text-center">
        “The food is really excellent. Not just for safari food, but I would say
        it is restaurant quality. It is fresh and prepared extremely well. We
        did not have a single bad meal.”
      </p>
<p class="text-center">“5 star service and food at Masai Mara”

</p>

      <div></div>
    </div>
  );
};

export default Eat;
