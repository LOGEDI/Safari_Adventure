import React from 'react'
import { Link } from 'react-router-dom'

const Safari = () => {

  return (
     <div className="container">
     <div className="page-header">
        <div className="head-image">
          <img
            className="col-12 m-0"
            src="https://upload.wikimedia.org/wikipedia/commons/5/57/Maasai_Mara_National_Reserve_Kenya.jpg"
            alt="Sunset image"
          />
        </div>
        <div className="text-on-image">
          <h2 className="page-title">SAFARI</h2>
          <span className="page-subtitle">
          In the most private location away from the crowds inside the Masai Mara
          </span>
        </div>
      </div>

      <div className="row row-cols-2 g-3 mt-5">
        <div className="col-6">
          <div className="card m-3 border-light">
            <h2 className="description-title">FEEL OUR WILDLIFE</h2>
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
      </div>
   </div>
     

  )
}

export default Safari