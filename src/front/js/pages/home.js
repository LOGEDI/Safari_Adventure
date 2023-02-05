import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import hero1 from "../../img/balloon-hero.jpg";
import hero2 from "../../img/Experience-hero.jpg";
import hero3 from "../../img/maasai-hero2.jpg";
import carousel1 from "../../img/experience-1.jpg";
import carousel2 from "../../img/experience-2.jpg";
import carousel3 from "../../img/experience-3.jpg";
import "../../styles/index.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="pagesBackground">
      <div className="main-content">
        <div className="container ">
          {/* ----------------------------PAGE TITLE CAROUSEL TYPE 2------------------------------------------------- */}

          <Carousel slide={false}>
            <Carousel.Item>
              <img className="d-block w-100" src={hero1} alt="First slide" />
              <Carousel.Caption className="carousel2Caption">
                <h5 className="carousel2CaptionH5">SAFARI ADVENTURE</h5>
                <p className="carousel2CaptionP d-none d-md-block">
                  The Ultimate African Safari Experience
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hero2} alt="Second slide" />

              <Carousel.Caption className="carousel2Caption">
                <h5 className="carousel2CaptionH5">SAFARI ADVENTURE</h5>
                <p className="carousel2CaptionP  d-none d-md-block">
                  We offer a variety of activities.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hero3} alt="Third slide" />

              <Carousel.Caption className="carousel2Caption">
                <h5 className="carousel2CaptionH5">SAFARI ADVENTURE</h5>
                <p className="carousel2CaptionP  d-none d-md-block">
                  Guided by the best professional Maasai guides and spotters.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* -----------------------------------PICTURE LINKS ----------------------------------------------- */}

        <div className="experiencePagePicLinks container-fluid">
          <div >
            <div className="row g-3 mt-3 justify-content-center">
              <div className="col-xl-3 col-md-6 col-10 order-xl-1 mb-5 mb-xl-0">
                <Link to="/Experience">
                  <figure className="snip0016">
                    <img
                      src="https://www.enkewa.com/wp-content/uploads/2022/01/An%CC%83adir-en-Cultura-Masai.jpg"
                      alt="sample41"
                    />
                    <figcaption>
                      <h2>
                        Camp <span>Masai Mara</span> oasis
                      </h2>
                      <p>Visit our unique eco camp and meet our team</p>
                    </figcaption>
                  </figure>
                </Link>
              </div>

              <div className="col-xl-3 col-md-6 col-10 order-xl-2 mb-5 mb-xl-0">
              <Link to="/Safari">
                <figure className="snip0016">
                  <img
                    src="https://www.enkewa.com/wp-content/uploads/2022/01/DSC_8654-web-scaled.jpg"
                    alt="sample41"
                  />
                  <figcaption>
                    <h2>
                      feel <span>Safari ADVENTURE</span>
                    </h2>
                    <p>Best safari experience in an unspoiled enviroment</p>
                  </figcaption>
                </figure>
              </Link>
              </div>
              
              <div className="col-xl-3 col-md-6 col-10 order-xl-3 mb-5 mb-xl-0">
              <Link to="/Camp">
                <figure className="snip0016">
                  <img
                    src="https://www.enkewa.com/wp-content/uploads/2021/11/safari-23424.jpg"
                    alt="sample41"
                  />
                  <figcaption>
                    <h2>
                      be <span>Safari Adventure</span>{" "}
                    </h2>
                    <p>We offer a variety of activities, check our proposal</p>
                  </figcaption>
                </figure>
              </Link>
              </div>

              <div className="col-xl-3 col-md-6 col-10 order-xl-4 mb-5 mb-xl-0">
              <Link to="/TravelPlan">
                <figure className="snip0016">
                  <img
                    src="https://www.enkewa.com/wp-content/uploads/2022/01/DSC_8654-web-scaled.jpg"
                    alt="sample41"
                  />
                  <figcaption>
                    <h2>
                      join <span>Safari ADVENTURE</span>
                    </h2>
                    <p>Check our Safari Packages or request a unique one.</p>
                  </figcaption>
                </figure>
              </Link>
              </div>

            </div>
          </div>
        </div>

        <div className="container-fluid mt-3">
          <div className="row ">
            <div className="col-xl-6 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile ">
                <div className="pageDescriptionContainerRigth  pt-md-4 pb-0 pb-md-4">
                  <h2 className="description-title">OUR CAMP IN MAASAI MARA</h2>
                  <div className="description-content">
                    <p className="description-content">
                    Our privileged location inside the National Reserve together
                  with our philosophy of tracking and searching for our own
                  wildlife sightings far from the transited areas, makes the
                  Safari Adventure experience amongst the best in the Masai
                  Mara. We are located in superb big5 country with access to 4
                  different lion prides within minutes from camp as well as the
                  best leopard territory inside the reserve. The Black rhino
                  density in our area is the highest in the entire Maasai
                  Mara-Serengeti Eco-System.  
                    </p>
                    <p className="description-content">
                    For centuries the Maasai tribe has
                  learned to coexist with its surroundings and its wildlife and
                  our experienced and skilled Maasai spotters –trackers- will
                  read all signs in order to find the best opportunities to
                  observe the wildlife of the African Savannah.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>

            {/*---------------------------------------------------- Carousel--------------------------------------------------- */}

            <div className="col-xl-6 order-xl-1">
              <div className="card ">
                
                  <div className=" border-0   pb-0 ">
                    <div className="carouselContainerLeft">
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={carousel1}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={carousel2}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={carousel3}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-3">
          <div className="row">

             <div className="col-xl-6 order-xl-1">
              <div className="card ">
                
                  <div className=" border-0   pb-0 ">
                    <div className="carouselContainerLeft">
                      <Carousel className="carouselComents">
                        <Carousel.Item>
                        <h1 className="text-center carouselH1 mt-5">
                          Fantastic experience
                        </h1>
                        <h3 className="text-center carouselH3 m-3">
                          “We stayed 4 days at Safari Adventure and we had a
                          really good time there. Nelson and his team do their
                          best to achieve that and they perform outstanding. The
                          guides are very expert and the landscape is amazing...
                          ”
                        </h3>
                        <p className="text-center carouselH3">JOAO1956</p>
                        </Carousel.Item>
                        <Carousel.Item>
                        <h1 className="text-center carouselH1 mt-5">A privilege!!!</h1>
                        <h3 className="text-center carouselH3  m-3">
                          "This has been my third time in Enkewa. I couldn't
                          imagine to be surprise from the very first moment as
                          if it was my first trip. That is the magic of Nelson
                          and his Safary Adventure family!!! Always surprising,
                          making an adventure of every minute...."
                        </h3>
                        <p className="text-center carouselH3">DIAZ-CASANOVA</p>
                        </Carousel.Item>
                        <Carousel.Item>
                        <h1 className="text-center carouselH1  mt-5">Photo Safari</h1>
                        <h3 className="text-center carouselH3  m-3">
                          "We booked a tree night stay with Nelson and his team,
                          with the main purpose of photography. Nelson arranged
                          everything for us, regarding transport and hotels out
                          of Masai Mara. His team are great, so friendly and
                          helpful, they did a good job spotting the..."
                        </h3>
                        <p className="text-center carouselH3">SIV H</p>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                
              </div>
            </div>

            {/*---------------------------------------------------- Carousel--------------------------------------------------- */}

            <div className="col-xl-6 order-xl-2">
              <div className="card ">
                <div className="">
                  <div className=" border-0   pb-0 ">
                    <div className="carouselContainerRigth">
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={carousel1}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={carousel2}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={carousel3}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      

        {/*---------------------------------------------------- footer for spacing--------------------------------------------------- */}
        <footer className="footerDestinations"> </footer>
      </div>
    </div>
  );
};
