import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../img/carousel1-Experience-pic1.jpg";
import carousel2 from "../../img/carousel1-Experience-pic2.jpg";
import carousel3 from "../../img/carousel1-Experience-pic3.jpg";

const TravelPlan = () => {
  return (
    <div className="main-content">
      <div className="container-fluid mt-3">
        <div className="row">

          <div className="col-xl-6 order-xl-2 mb-5 mb-xl-0">
            <div className="card card-profile ">
              <div className="pageDescriptionContainerRigth  pt-md-4 pb-0 pb-md-4">
                <h2 className="description-title">FEEL THE ADVENTURE</h2>
                <div className="description-content">
                  <p className="description-content">
                    At Safari Adventure we offer a variety of activities.
                    Besides tracking the big 5, enjoying masai mara birdlife and
                    its unique and diverse landscapes, we can also access the
                    waterfalls. A hot-air balloon can also be organized and for
                    those interested in the local Masai culture we could visit a
                    traditional Masai village guided by one of our staff members
                    as well as a visit to the local market or the community
                    projects we support.
                  </p>
                  <p className="description-content">
                    Bush breakfast/lunches as well as sundowners are also part
                    of our itineraries.
                  </p>
                  <p className="description-content">
                    Safari Adventure is children friendly and different programs
                    for children can be arranged.
                  </p>
                </div>
              </div>
            </div>
          </div>

<div className="col-xl-6 order-xl-1">
  <div className="card ">
    <div className=" border-0   pb-0 ">
<div className="carouselContainerLeft">



 <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="First slide" />
          
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel2} alt="Second slide" />

          
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel3} alt="Third slide" />

         
        </Carousel.Item>
      </Carousel>




</div>
    </div>
  </div>
</div>




        </div>
      </div>
     


















      {/* <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
};

export default TravelPlan;
