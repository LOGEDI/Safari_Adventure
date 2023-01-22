import React from "react";
import { Link } from "react-router-dom";
import destinationHero from "../../img/ngorongoro.jpg";
import addis from "../../img/addiscity_thumb.jpg";
import amboseli from "../../img/amboseli_thumb.jpg";
import axum from "../../img/axum_thumb.jpg";
import bahir from "../../img/bahirdar_thumb.jpg";
import batwa from "../../img/batwatribe_thumb.jpg";
import gondar from "../../img/gondar_thumb.jpg";
import bwindi from "../../img/uganda_thumb.jpg";
import hawzen from "../../img/hawzen_thumb.jpg";
import iby from "../../img/iby-iwacu_thumb.jpg";
import kigali from "../../img/kigali_thumb.jpg";
import lalibela from "../../img/Lalibela_thumb.jpg";
import maasai from "../../img/maasaimara_thumb.jpg";
import nairobi from "../../img/nairobi_thumb.jpg";
import nakuru from "../../img/lakenakuru_thumb.jpg";
import ngorongoro from "../../img/ngorongoro_thumb.jpg";
import samburu from "../../img/samburu_thumb.jpg";
import serengeti from "../../img/serengeti_thumb.jpg";
import tarangire from "../../img/tarangire_thumb.jpg";
import rwanda from "../../img/rwanda_thumb.jpg";
import destinationBackground from "../../img/destinations_background.jpg";
import locationicon from "../../img/location-icon.png";
import separator from "../../img/heading-separator.png";

import carousel1 from "../../img/carousel1-balloon-pic1.jpg";
import carousel2 from "../../img/carousel1-balloon-pic2.jpg";
import carousel3 from "../../img/carousel1-balloon-pic3.jpg";

const AboutUs = () => {
  return (
    <div className="pagesBackground">
        <div className="main-content" >
            <div
              className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
              style={{
                backgroundImage: `url(${destinationHero})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >

              
              <div className="container-fluid d-flex align-items-center">
                <div className="text-on-image">
                  <h2 className="page-title">Destinations</h2>
                  <span className="page-subtitle">
                  Enjoy the beauty and quiet of Africa
                  </span>
                </div>
              </div>
            </div>

            {/*---------------------------------------------------- Description--------------------------------------------------- */}


{/* <div className='destinationsBackground pt-3'
              style={{
                backgroundImage: `url(${destinationBackground})`,
                
              }}> */}

            <div className="container-fluid ">
              <div className="row pageDescriptionContainerCenter">
                <div className="col-xl-5 order-xl-1 mb-5 mb-xl-0">
                  <div className="cardDestinations">
                    <div className="  pb-0 pb-md-4">
                      <h1 className="destinations-titleD mt-4">DESTINATIONS</h1>
                      <p className="destinations-subtitleD">
                        Discover Story-worthy Places
                      </p>
                      <img className="separator mr-3" src={separator}></img>
                    </div>
                  </div>
                </div>

                {/*---------------------------------------------------- Carousel--------------------------------------------------- */}

                <div className="col-xl-7 order-xl-2">
                  <div className="row col-xl-12  p-0 destinationButons">
                    <div className="col-xl-2 col-md-4 col-sm-6 mt-4 text-center ">
                      <Link to="/Destinations">
                        <button className="btn btn-greenD ">
                          All
                        </button>
                      </Link>
                    </div>
                    <div className="col-xl-2 col-md-4 col-sm-6 mt-4 text-center">
                      <Link to="/Kenya">
                        <button className="btn btn-creamD ">
                          Kenya
                        </button>
                      </Link>
                    </div>
                    <div className="col-xl-2 col-md-4 mt-4 col-sm-6 text-center">
                      <Link to="/Ethiopia">
                        <button className="btn btn-creamD ">
                          Ethiopia
                        </button>
                      </Link>
                    </div>
                    <div className="col-xl-2 col-md-4 mt-4 col-sm-6 text-center">
                      <Link to="/Uganda">
                        <button className="btn btn-creamD  ">
                          Uganda
                        </button>
                      </Link>
                    </div>
                    <div className="col-xl-2 col-md-4 mt-4 col-sm-6 text-center">
                      <Link to="/Rwanda">
                        <button className="btn btn-creamD ">
                          Rwanda
                        </button>
                      </Link>
                    </div>
                    <div className="col-xl-2 col-md-4 mt-4 col-sm-6 text-center">
                      <Link to="/Tanzania">
                        <button className="btn btn-creamD ">
                          Tanzania
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* <div className="carousel">
                      <div className=" border-0   pb-0 ">
                        <div className="carousel carouselContainerRigth">
                          <div
                            id="carouselExampleFade"
                            className=" carousel slide carousel-fade"
                            data-bs-ride="carousel"
                          >
                            <div className=" carousel-inner">
                              <div className=" carouselContent2">
                                <div className="carousel-item active">
                                  <img
                                    src={carousel1}
                                    className="d-block w-100"
                                    alt="..."
                                  />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    src={carousel2}
                                    className="d-block w-100"
                                    alt="..."
                                  />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    src={carousel3}
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
                                <span className="visually-hidden">
                                  Previous
                                </span>
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
                    </div> */}
                </div>

                

              </div>
            </div>
          




          <div className="container-fluid mt-3">
                  <div className="row">
                    <div className="cardDestinations">
                      <div className="pageDescriptionContainerCenter  pt-md-4 pb-0 pb-md-4 p-md-3 p-3" >
                        <h2 className="description-titleD text-center">
                        TANZANIA
                        </h2>
                        <div className="description-content">
                          <p className="description-content">
                          Tanzania is home to some of Africa’s most alluring destinations. 
                The Serengeti’s wildebeest migration along an infinite savanna; 
                the incongruous snow of Mt Kilimanjaro – Africa’s tallest mountain at 5,895m (19,341ft); 
                the crater bottom of Ngorongoro National Park teaming with wildlife; 
                the Swahili coast and pristine beaches along the spice islands of Zanzibar where fishermen 
                still plough the turquoise waters in traditional wooden sailboats; 
                Selous – Africa’s largest protected area and larger than Switzerland; 
                Ruaha and Katavi – insider tips for serious safari-goers; Mahale and Gombe – 
                prime destinations for seeing chimpanzees in the wild.
                          </p>
                          
                          <p className="description-content">
                          Throughout, Tanzania offers travelers an array of options, 
                set against the backdrop of a cultural mosaic. Tanzania’s coastline was a favored stop on 
                ancient trading routes between the Indian sub-continent and the Middle-East. Spices, 
                jewels and slaves once passed through, bringing with them a melange of cultural riches 
                that remain today. The language of Swahili was born here, and old mosques, 
                coral palaces and pearly-white beaches still remain. While most visitors head straight for 
                the famed northern wildlife-watching circuit, followed by time relaxing on Zanzibar’s beaches, 
                Tanzania has much more to offer anyone with the time and inclination to head off the beaten path.
                          </p>
                        </div>
                        <div className="row justify-content-center mt-4 p-3">
                          <button
                            type="button"
                            className="btn btn-cream text-center"
                          >
                            BOOK WITH US
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>





          <div className="destinationsCards container-fluid">
            <div className="row g-3 mt-5">
              <div className="col-xl-3 col-md-6  mb-5 mb-xl-0">
                <div className="destinationsCardsIndividual ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Ethiopia" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        
                        <img
                          className="destimg card-img-top"
                          src={addis}
                          alt="Addis Ababa"
                        ></img>
                        
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">
                            Addis Ababa
                          </h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Ethiopia
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Kenya" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinationsborder-2">
                        <img
                          className="destimg card-img-top"
                          src={amboseli}
                          alt="Amboseli"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">
                            Amboseli National Park
                          </h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Kenya
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Ethiopia" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinationsborder-2">
                        <img
                          className="destimg card-img-top"
                          src={axum}
                          alt="Axum"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">Axum</h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Ethiopia
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Ethiopia" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2 ">
                        <img
                          className="destimg card-img-top"
                          src={bahir}
                          alt="Bahir Dar"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">Bahir Dar</h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Ethiopia
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Uganda" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        <img
                          className="destimg card-img-top"
                          src={batwa}
                          alt="Batwa "
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">
                            Batwa Trival Lands
                          </h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Uganda
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Ethiopia" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        <img
                          className="destimg card-img-top"
                          src={gondar}
                          alt="Gondar"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">Gondar</h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Ethiopia
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Uganda" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        <img
                          className="destimg card-img-top"
                          src={bwindi}
                          alt="Bwindi"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">
                            Gorilla Forest, Bwindi
                          </h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Uganda
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Ethiopia" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        <img
                          className="destimg card-img-top"
                          src={hawzen}
                          alt="Hawzen"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">Hawzen</h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Ethiopia
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Rwanda" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        <img
                          className="destimg card-img-top"
                          src={iby}
                          alt="Iby Iwaku"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">
                            Iby Iwacu Cultural Village
                          </h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Rwanda
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Rwanda" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        <img
                          className="destimg card-img-top"
                          src={kigali}
                          alt="Kigali"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">
                            Kigali City
                          </h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Rwanda
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Ethiopia" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        <img
                          className="destimg card-img-top"
                          src={lalibela}
                          alt="Lalibella"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">Lalibela</h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Ethiopia
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Kenya" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        <img
                          className="destimg card-img-top"
                          src={maasai}
                          alt="Maasai Mara"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">
                            Maasai Mara
                          </h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Kenya
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Kenya" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        <img
                          className="destimg card-img-top"
                          src={nairobi}
                          alt="Nairobi"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">
                            Nairobi City
                          </h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Kenya
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Kenya" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        <img
                          className="destimg card-img-top"
                          src={nakuru}
                          alt="Nakuru"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">
                            Nakuru National Park
                          </h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Kenya
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Tanzania" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        <img
                          className="destimg card-img-top"
                          src={ngorongoro}
                          alt="ngorongoro"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">
                            Ngorongoro Crater
                          </h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Tanzania
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Kenya" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        <img
                          className="destimg card-img-top"
                          src={samburu}
                          alt="Card image cap"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">
                            Samburu Game Reserve
                          </h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Kenya
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Tanzania" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        <img
                          className="destimg card-img-top"
                          src={serengeti}
                          alt="Card image cap"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">
                            Serengeti National Park
                          </h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Tanzania
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Tanzania" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        <img
                          className="destimg card-img-top"
                          src={tarangire}
                          alt="Card image cap"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">
                            Tarangire National Park
                          </h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Tanzania
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Rwanda" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        <img
                          className="destimg card-img-top"
                          src={rwanda}
                          alt="Card image cap"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">
                            Volcanoes National Park
                          </h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Rwanda
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 order-xl-2 mb-5 mb-xl-0">
                <div className="destinationsCards ">
                  <div className="destination__card transition hover-card">
                    <Link to="/Ethiopia" style={{ textDecoration: 'none' }}>
                      <div className="destinationthumb cardDestinations border-2">
                        <img
                          className="destimg card-img-top"
                          src={addis}
                          alt="Addis Ababa"
                        ></img>
                        <div className="destinations-card-body">
                          <h4 className="destinations-card-title">
                            Addis Ababa
                          </h4>
                          <h5 className="destinations-card-text">
                            <img
                              className="destinationicon"
                              src={locationicon}
                            ></img>
                            Ethiopia
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className="col-xl-3 col-md-6 order-xl-3 mb-5 mb-xl-0">
                <div className="experiencePagePicLinksIndividual ">
                  <h4 className="experiencePagePicLinksTextTitle text-center">
                    PHOTOGRAPHIC SAFARI
                  </h4>
                  <Link to="/PhotoSafari">
                    <img
                      className="col-12"
                      src="https://www.enkewa.com/wp-content/uploads/2021/11/safari-23424.jpg"
                      alt="example"
                    />
                  </Link>
                  <p className="experiencePagePicLinksTextSubtitle text-center">
                    Capture the moment
                  </p>
                </div>
              </div> */}

              {/* <div className="col-xl-3 col-md-6 order-xl-4 mb-5 mb-xl-0">
                <div className="experiencePagePicLinksIndividual ">
                  <h4 className="experiencePagePicLinksTextTitle text-center">
                    BALLOON
                  </h4>
                  <Link to="/BalloonSafari">
                    <img
                      className="col-12"
                      src="https://www.enkewa.com/wp-content/uploads/2022/01/DSC_6931-scaled.jpg"
                      alt="example"
                    />
                  </Link>
                  <p className="experiencePagePicLinksTextSubtitle text-center">
                    Get the best view
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          <footer className="footerDestinations">
            <div className="row align-items-center justify-content-xl-between">
              <div className="col-xl-6 m-auto text-center"></div>
            </div>
          </footer>
{/* </div> */}
</div>
        </div>
    
  );
};

export default AboutUs;
