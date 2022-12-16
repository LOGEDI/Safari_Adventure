import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
    <div className="container">

{/* ---------------------------------PAGE TITLE CAROUSEL-------------------------------------------------- */}

      <div className="page-header">
        <div className="head-image">

          <div className="carouselContainer col-12 home">
            <div
              id="carouselExampleFade"
              className=" carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
            <div className=" carousel-inner">
              <div className="container-fluid carouselContent">
                <div className="carousel-item active">
                  <img
                    src="https://media.istockphoto.com/id/636870490/photo/kilimanjaro-with-elephants.jpg?s=612x612&w=0&k=20&c=XLMQxWXqcBRmwx1GhsjUzF9Ex3IqWgUcyiYb2rzLdcw="
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/ab/39.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
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


{/* ------------------------------------------PAGE TITLE------------------------------------------------------- */}


            {/* <img
              className="col-12 m-0 black-rock"
              src="https://media.istockphoto.com/id/636870490/photo/kilimanjaro-with-elephants.jpg?s=612x612&w=0&k=20&c=XLMQxWXqcBRmwx1GhsjUzF9Ex3IqWgUcyiYb2rzLdcw="
              alt="Freedom Blog"
            /> */}
          </div>
          <div className="text-on-image">
            <h2 className="page-title">SAFARI</h2>
            <span className="page-subtitle">
            In the most private location away from the crowds inside the Masai Mara
            </span>
       </div>
     </div>

{/* -----------------------------------PICTURE LINKS ----------------------------------------------- */}

     <div className="row row-cols-3 g-3 m-5">
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

      </div>

     <div className="row row-cols-2 g-3 mt-5">{/* --this div wraps the 2 colums layout-- */}
       
{/* --------------------------------------------CAROUSEL----------------------------------------------- */}

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
                       src="https://media.istockphoto.com/id/1368956766/photo/elephants-and-kilimanjaro-in-amboseli-national-park.jpg?s=612x612&w=0&k=20&c=5NlG8Hpvkx4HT2vWw0_px6SPezO6Sn7z5J6cB-0GwPA="
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
                       src="https://files.worldwildlife.org/wwfcmsprod/images/White_Rhino/hero_small/3yuabfu3jq_white_rhino_42993643.jpg"
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
                   <div className="carousel-item">
                     <img
                       width="525px"
                       height="350px"
                       src="https://cdn01.allafrica.com/download/pic/main/main/csiid/00480392:6f6ae82f833c1b5a72c84111cbac0c21:arc614x376:w735:us1.jpg"
                       className="d-block w-100"
                       alt="..."
                     />
                   </div>
                   <div className="carousel-item">
                     <img
                       width="525px"
                       height="350px"
                       src="https://www.thesafaricollection.com/wp-content/uploads/2015/10/2014.11.29_Oloololo-males.jpg"
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

{/* ------------------------------------------DESCRIPTION------------------------------------------------------- */}

        <div className="col-6">
                <div className="card m-3 border-light">
                  <h2 className="description-title">OUR CAMP IN MASAAI MARA</h2>
                  <div className="description-content">
                    <p>
                    Our privileged location inside the National Reserve together with our philosophy of tracking and searching for our own wildlife sightings far from the transited areas, makes the Enkewa safari experience amongst the best in the Masai Mara.

                    We are located in superb big5 country with access to 4 different lion prides within minutes from camp as well as the best leopard territory inside the reserve. The Black rhino density in our area is the highest in the entire Maasai Mara-Serengeti Eco-System.

                    For centuries the Maasai tribe has learned to coexist with its surroundings and its wildlife and our experienced and skilled Maasai spotters –trackers- will read all signs in order to find the best opportunities to observe the wildlife of the African Savannah.

                    Our custom built 4×4 vehicles allow us to access the most remote places where we avoid the more crowded routes of the Mara as well as to enjoy privacy during our safaris.
                    </p>
                  </div>
                </div>
              </div>

    </div>{/* --Here ends the Wrapper for the 2 colums layout-- */}


    <div className="row row-cols-2 g-3 mt-5">{/* --this div wraps the SECOND 2 colums layout-- */}
       
{/* --------------------------------------------CAROUSEL----------------------------------------------- */}
       
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
                            <h1 className="text-center mt-5">Fantastic experience</h1>
                            <h3 className="text-center m-3">“We stayed 4 days at Safari Adventure and we had a really good time there. Nelson and his team do their best to achieve that and they perform outstanding. The guides are very expert and the landscape is amazing... ”</h3>
                            <p className="text-center">JOAO1956</p>

                            {/* <img
                              width="525px"
                              height="350px"
                              src="https://media.istockphoto.com/id/1368956766/photo/elephants-and-kilimanjaro-in-amboseli-national-park.jpg?s=612x612&w=0&k=20&c=5NlG8Hpvkx4HT2vWw0_px6SPezO6Sn7z5J6cB-0GwPA="
                              className="d-block w-100"
                              alt="..."
                            /> */}

                          </div>

                          <div className="carousel-item">
                            <h1 className="text-center mt-5">A privilege!!!</h1>
                            <h3 className="text-center m-3">"This has been my third time in Enkewa. I couldn't imagine to be surprise from the very first moment as if it was my first trip. That is the magic of Nelson and his Safary Adventure family!!! Always surprising, making an adventure of every minute...."</h3>
                            <p className="text-center">DIAZ-CASANOVA</p>

                            {/* <img
                              width="525px"
                              height="350px"
                              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/ab/39.jpg"
                              className="d-block w-100"
                              alt="..."
                            /> */}

                          </div>

                          <div className="carousel-item">
                            <h1 className="text-center mt-5">Photo Safari</h1>
                            <h3 className="text-center m-3">"We booked a tree night stay with Nelson and his team, with the main purpose of photography. Nelson arranged everything for us, regarding transport and hotels out of Masai Mara. His team are great, so friendly and helpful, they did a good job spotting the..."</h3>
                            <p className="text-center">SIV H</p>

                            {/* <img
                              width="525px"
                              height="350px"
                              src="https://files.worldwildlife.org/wwfcmsprod/images/White_Rhino/hero_small/3yuabfu3jq_white_rhino_42993643.jpg"
                              className="d-block w-100"
                              alt="..."
                            /> */}

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
       
       {/* --------------------------------------------CAROUSEL----------------------------------------------- */}
       
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
                              src="https://media.istockphoto.com/id/1368956766/photo/elephants-and-kilimanjaro-in-amboseli-national-park.jpg?s=612x612&w=0&k=20&c=5NlG8Hpvkx4HT2vWw0_px6SPezO6Sn7z5J6cB-0GwPA="
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
                              src="https://files.worldwildlife.org/wwfcmsprod/images/White_Rhino/hero_small/3yuabfu3jq_white_rhino_42993643.jpg"
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
                          <div className="carousel-item">
                            <img
                              width="525px"
                              height="350px"
                              src="https://cdn01.allafrica.com/download/pic/main/main/csiid/00480392:6f6ae82f833c1b5a72c84111cbac0c21:arc614x376:w735:us1.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              width="525px"
                              height="350px"
                              src="https://www.thesafaricollection.com/wp-content/uploads/2015/10/2014.11.29_Oloololo-males.jpg"
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
              
       </div>{/* --Here ends the Wrapper for the SECOND 2 colums layout-- */}
                      
          <img src={rigoImageUrl}></img>

  </div>





   
	);
};
