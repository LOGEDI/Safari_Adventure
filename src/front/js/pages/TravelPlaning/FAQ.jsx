import React, { useContext } from "react";
import FAQhero from "../../../img/FAQ-hero.jpg";

const FAQ = () => {
  return (
    <div className="pagesBackground">
      <div className="main-content">
      <div
          className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            backgroundImage: `url(${FAQhero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container-fluid d-flex align-items-center">
            <div className="text-on-image">
              <h2 className="page-title">USEFULL INFO</h2>
              <span className="page-subtitle">
                Get ready for the Adventure
              </span>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="">
              <div className="pageDescriptionContainerCenter  pt-md-4 pb-0 pb-md-4 p-md-3 p-3">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item transition hover-card">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <i class="FAQHeader fas fa-id-card-alt"></i>
                        VISA AND PASSPORT
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Apply for your online VISA before you travel. You can
                        apply for single entry and transit visas on the{" "}
                        <strong>evisas website</strong> . For more information
                        on different types of visas see the website of the{" "}
                        <strong>Kenya High Commission.</strong>
                        <p></p>
                        Your passport should be valid for a minimum period of 6
                        months from the date of entry into Kenya. Make sure you
                        have two blank pages in your passport on arrival.
                        <p></p>
                        The Kenyan authorities have confirmed they will accept
                        British passports extended by 12 months by British
                        Embassies and Consulates under additional measures put
                        in place in mid-2014.
                      </div>
                    </div>
                  </div>
                  <br />

                  <div class="accordion-item transition hover-card">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i class="FAQHeader fas fa-money-bill"></i>
                        PARK FEES
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Park fees ( 24h period ) are charged by the Maasai Mara
                        National Reserve:
                        <p></p>
                        70 USD per Adults
                        <p></p>
                        40 USD per children under 18
                        <p></p>
                        For residents of Burundi, Rwanda, Tanzania & Uganda,
                        Burundi, park fees are currently KSh 1,200 for adults
                        and KSh 300 for children
                        <p></p>
                        For Kenyan residents, park fees of KSh 1,000 and KSh 200
                        for children apply.
                      </div>
                    </div>
                  </div>
                  <br />

                  <div class="accordion-item transition hover-card">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i class="FAQHeader fas fa-route"></i>
                        GETTING HERE
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <strong className="FAQ">
                          BY PLANE<i class="FAQHeaderP fas fa-plane"></i>
                        </strong>
                        <p></p>
                        This is the smoothest option to get to our camp. We are
                        located 30min away from Keekorok airfield. Safarikink &
                        Airkenya fly daily from Nairobi to the Mara. For other
                        options, check with us and we will arrange the easiest
                        way to get you here.
                        <p></p>
                        <strong className="FAQ">
                          BY ROAD<i class=" FAQHeaderP fas fa-car"></i>
                        </strong>
                        <p></p>
                        We also can arrange a private vehicle from Nairobi or
                        any other location to our camp.
                      </div>
                    </div>
                  </div>
                  <br />

                  <div class="accordion-item transition hover-card">
                    <h2 class="accordion-header" id="headingFour">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <i class="FAQHeader fas fa-print"></i>
                        RATES
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Please check up the rates with us in order to adjust
                        individually your trip and budget based on the
                        experience you are looking for.
                        <p></p>
                        <strong className="FAQ">WHAT IS INCLUDED </strong>
                        <p></p>
                        <ul>
                          <li>
                            Guided safaris with the most experienced maasai
                            spotters
                          </li>
                          <li>
                            All meals and drinks (including safari snacks)
                          </li>
                          <li>Laundry</li>
                          <li>WIFI</li>
                          <li>Transfers to and from Keekorok Airfield</li>
                          <li>Community visits</li>
                          <li>Walking safaris to the waterfalls</li>
                        </ul>
                        <p></p>
                        <strong className="FAQ">NOT INCLUDED </strong>
                        <p></p>
                        <ul>
                          <li>
                            Park fees ( Adults 70 USD per day / Children 40 USD
                            per day)
                          </li>
                          <li>Transport by road to the Reserve’s Gate</li>
                          <li>Flights to Maasai Mara</li>
                          <li>Gratuities</li>
                          <li>Hot Balloon services</li>
                          <li>
                            Guarantee private safari services ( upon request)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <br />

                  <div class="accordion-item transition hover-card">
                    <h2 class="accordion-header" id="headingFive">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <i class="FAQHeader fas fa-hand-holding-usd"></i>
                        GRATUITIES
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Gratuities are not included. You are totally free to
                        give them directly to our staff according to the service
                        received.
                        <p></p>
                        If you are totally lost in what to leave, this may act
                        as a guideline:
                        <p></p>
                        10USD per person / Night
                      </div>
                    </div>
                  </div>
                  <br />

                  <div class="accordion-item transition hover-card">
                    <h2 class="accordion-header" id="headingSix">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        <i class="FAQHeader fas fa-sun"></i>
                        SEASON AND MIGRATION
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <strong className="FAQ">
                          HIGH SEASON : JUNE- OCTOBER
                        </strong>
                        <p></p>
                        Wildlife is easier to spot because the bush is less
                        dense and animals gather around waterholes and rivers.
                        <p></p>
                        It’s unlikely to rain, the days are sunny with clear
                        skies and there are less mosquitoes.
                        <p></p>
                        July to October are the best months to see the
                        wildebeest migration.
                        <p></p>
                        Migration occurs between Tanzania Serengeti’s Plain in
                        the south and Kenya Maasai Mara in the north. It is one
                        of the most fascinating spectacles and a must see in a
                        life time.
                        <p></p>
                        <strong className="FAQ">
                          MID & LOW SEASON : NOVEMBER- MAY
                        </strong>
                        <p></p>
                        Newborn animals can be seen and in general, you will
                        still see plenty of wildlife even though it is easier to
                        spot during the dry season.
                        <p></p>
                        Migratory birds are present from October to April.
                        <p></p>
                        Except for March, April and May, rains are short showers
                        in the afternoon or evening and will rarely compromise
                        your safari.
                      </div>
                    </div>
                  </div>
                  <br />

                  <div class="accordion-item transition hover-card">
                    <h2 class="accordion-header" id="headingSeven">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        <i class="FAQHeader fas fa-suitcase-rolling"></i>
                        WHAT TO PACK
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <ul>
                          <li>Closed shoes (light boots, trainers,etc)</li>
                          <li>Sunglasses</li>
                          <li>Binoculars</li>
                          <li>Solar protection (+50)</li>
                          <li>Hat</li>
                          <li>
                            Comfortable clothes & Jacket ( temperatures go from
                            14º in the sunrise -25º/30º during the day)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer"></footer>
    </div>
  );
};

export default FAQ;
