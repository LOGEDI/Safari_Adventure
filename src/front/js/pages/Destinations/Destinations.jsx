import React from 'react'
import { Link } from 'react-router-dom';
import destinationsHero from  "../../../img/ngorongoro.jpg"
import addis from  "../../../img/addiscity_thumb.jpg"
import amboseli from "../../../img/amboseli_thumb.jpg"
import axum from "../../../img/axum_thumb.jpg"
import bahir from "../../../img/bahirdar_thumb.jpg"
import batwa from "../../../img/batwatribe_thumb.jpg"
import gondar from "../../../img/gondar_thumb.jpg"
import bwindi from "../../../img/uganda_thumb.jpg"
import hawzen from "../../../img/hawzen_thumb.jpg"
import iby from "../../../img/iby-iwacu_thumb.jpg"
import kigali from "../../../img/kigali_thumb.jpg"
import lalibela from "../../../img/Lalibela_thumb.jpg"
import maasai from "../../../img/maasaimara_thumb.jpg"
import nairobi from "../../../img/nairobi_thumb.jpg"
import nakuru from "../../../img/lakenakuru_thumb.jpg"
import ngorongoro from "../../../img/ngorongoro_thumb.jpg"
import samburu from "../../../img/samburu_thumb.jpg"
import serengeti from "../../../img/serengeti_thumb.jpg"
import tarangire from "../../../img/tarangire_thumb.jpg"
import rwanda from "../../../img/rwanda_thumb.jpg"
import destinationBackground from "../../../img/destinations_background.jpg"
import locationicon from "../../../img/location-icon.png"
import separator from "../../../img/heading-separator.png"

const Destinations = () => {

  return (
    <div>

        <div
            className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
            style={{
              minHeight: "500px",
              backgroundImage:
              `url(${destinationsHero})` ,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          ></div>

         <div className='destinationsBackground'
              style={{
                backgroundImage: `url(${destinationBackground})`,
                
              }}
         >

        <div className='container'>
            <div className='row row-cols-2 g-3' >
              <div className='col-3'>
                <h1 className='destinations-title mt-4' >DESTINATIONS</h1>
                <p className='destinations-subtitle'>Discover Story-worthy Places</p>
                <img className='separator mr-3' src={separator}></img>
              </div>              
              <div className='col-9'>               
                <div className='row row-cols-6 m-0 p-0'>
                  <div className='col-2 mt-4'>
                  <Link to="/Destinations">
                    <button href="#" className="destinationbtn-on">
                      All
                    </button>
                  </Link>
                  </div>
                  <div className='col-2 mt-4'>
                  <Link to="/Kenya">
                    <button href="#" className="destinationbtn">
                      Kenya
                    </button>
                  </Link>
                  </div>
                  <div className='col-2 mt-4'>
                  <Link to="/Ethiopia">
                    <button href="#" className="destinationbtn ">
                      Ethiopia
                    </button>
                  </Link>
                  </div>
                  <div className='col-2 mt-4'>
                  <Link to="/Uganda">
                    <button href="#" className="destinationbtn ">
                      Uganda
                    </button>
                  </Link>
                  </div>
                  <div className='col-2 mt-4'>
                  <Link to="/Rwanda">
                    <button href="#" className="destinationbtn ">
                      Rwanda
                    </button>
                  </Link>
                  </div>
                  <div className='col-2 mt-4'>
                  <Link to="/Tanzania">
                    <button href="#" className="destinationbtn ">
                      Tanzania
                    </button>
                  </Link>
                  </div>
                </div>             
              </div>
            </div>

            <div className='row row-cols-1 g-3 mt-2'>
              <div className='col-12'>
                <h3 className=' destinations-main-title text-center'>ALL LOCATIONS</h3>
                <p className='destinations-p mt-4'>Africa is immense and the diversity incredible. 
                  You can encounter savannahs rich with big game, timeless cultures unchanged by the modern world and timeless history,
                  equatorial forests and mighty snow-capped mountains, pristine beaches and coral reef, 
                  searing deserts and cool highland retreats and endless opportunities for adventure, discovery and relaxation.
                </p>
                <strong className='destinations-h4'>Why travel with us - We’ve been where you want to go!!</strong>
                <p className='destinations-p mt-4'>Our luxury safaris explore East Africa from Kenya’s snow-capped Mt Kenya down to pristine beaches,
                   Tanzania’s vast Serengeti to the magical Spice Island of Zanzibar, 
                   the lush tropical climate and fertile land of Uganda that is perfect habitat for the gorillas & chimps and the 
                   Mountain Gorilla and wide range of bird species in the forests of Rwanda and Amazing history of Ethiopia. 
                   We are constantly discovering new destinations that will take you away from the crowds 
                   and off the beaten track allowing you to enjoy beauty and quiet of Africa.
                </p>
              </div>
            </div>

            <div className='row row-cols-4 g-3 mt-4'>
            <div className='destination__card'>
            <Link to="/Ethiopia" >
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={addis} alt="Addis Ababa"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Addis Ababa</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Ethiopia</h5>                                                        
                </div>
              </div>
            </Link>
            </div>

            <Link to="/Kenya">
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={amboseli} alt="Amboseli"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Amboseli National Park</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Kenya</h5>                                                      
                </div>
              </div>
            </Link>

            <Link to="/Ethiopia">
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={axum} alt="Axum"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Axum</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Ethiopia</h5>                                   
                </div>
              </div>
            </Link>

            <Link to="/Ethiopia">
              <div  className="destinationthumb card border-2 " >
              <img className="destimg card-img-top" src={bahir} alt="Bahir Dar"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Bahir Dar</h4>
                  <h5 className="destinations-card-text" >
                    <img className='destinationicon' src={locationicon}></img>
                    Ethiopia</h5>                              
                </div>
              </div>
            </Link>

            <Link to="/Uganda">
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={batwa} alt="Batwa "></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Batwa Trival Lands</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Uganda</h5>                                  
                </div>
              </div>
            </Link>

            <Link to="/Ethiopia">
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={gondar} alt="Gondar"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Gondar</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Ethiopia</h5>                                                     
                </div>
              </div>
            </Link>

            <Link to="/Uganda">
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={bwindi} alt="Bwindi"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Gorilla Forest, Bwindi</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Uganda</h5>                 
                </div>
              </div>
            </Link>

            <Link to="/Ethiopia">
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={hawzen} alt="Hawzen"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Hawzen</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Ethiopia</h5>
                </div>
              </div>
            </Link>

            <Link to="/Rwanda">
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={iby} alt="Iby Iwaku"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Iby Iwacu Cultural Village</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Rwanda</h5>
                </div>
              </div>
            </Link>

            <Link to="/Rwanda">
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={kigali} alt="Kigali"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Kigali City</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Rwanda</h5>                                  
                </div>
              </div> 
            </Link>


            <Link to="/Ethiopia">
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={lalibela} alt="Lalibella"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Lalibela</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Ethiopia</h5>                                  
                </div>
              </div>
            </Link>

            <Link to="/Kenya">
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={maasai} alt="Maasai Mara"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Maasai Mara</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Kenya</h5>                  
                </div>
              </div>
            </Link>

            <Link to="/Kenya">
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={nairobi} alt="Nairobi"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Nairobi City</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Kenya</h5>                                                     
                </div>
              </div>
            </Link>

            <Link to="/Kenya">
              <div  className="destinationthumb card border-2" >
              <img className="destimg card-img-top" src={nakuru} alt="Nakuru"></img>
                <div className="destinations-card-body">
                  <h4 className="destinations-card-title">Nakuru National Park</h4>
                  <h5 className="destinations-card-text">
                  <img className='destinationicon' src={locationicon}></img>
                    Kenya</h5>                                    
                </div>
              </div>
            </Link>

              <Link to="/Tanzania">
                <div  className="destinationthumb card border-2" >
                  <img className="destimg card-img-top" src={ngorongoro} alt="ngorongoro"></img>
                  <div className="destinations-card-body">
                    <h4 className="destinations-card-title">Ngorongoro Crater</h4>
                    <h5 className="destinations-card-text">
                    <img className='destinationicon' src={locationicon}></img>
                      Tanzania</h5>
                  </div>
                </div>
              </Link>

              <Link to="/Kenya">
                <div  className="destinationthumb card border-2" >
                  <img className="destimg card-img-top" src={samburu} alt="Card image cap"></img>
                  <div className="destinations-card-body">
                    <h4 className="destinations-card-title">Samburu Game Reserve</h4>
                    <h5 className="destinations-card-text">
                    <img className='destinationicon' src={locationicon}></img>
                      Kenya</h5>
                  </div>
                </div>
              </Link>

              <Link to="/Tanzania">
                <div  className="destinationthumb card border-2" >
                  <img className="destimg card-img-top" src={serengeti} alt="Card image cap"></img>
                  <div className="destinations-card-body">
                    <h4 className="destinations-card-title">Serengeti National Park</h4>
                    <h5 className="destinations-card-text">
                    <img className='destinationicon' src={locationicon}></img>
                      Tanzania</h5>
                  </div>
                </div>
              </Link>

              <Link to="/Tanzania">
                <div  className="destinationthumb card border-2" >
                  <img className="destimg card-img-top" src={tarangire} alt="Card image cap"></img>
                  <div className="destinations-card-body">
                    <h4 className="destinations-card-title">Tarangire National Park</h4>
                    <h5 className="destinations-card-text">
                    <img className='destinationicon' src={locationicon}></img>
                      Tanzania</h5>                  
                  </div>
                </div>
              </Link>

              <Link to="/Rwanda">
                <div  className="destinationthumb card border-2" >
                  <img className="destimg card-img-top" src={rwanda} alt="Card image cap"></img>
                  <div className="destinations-card-body">
                    <h4 className="destinations-card-title">Volcanoes National Park</h4>
                    <h5 className="destinations-card-text">
                    <img className='destinationicon' src={locationicon}></img>
                      Rwanda</h5>
                  </div>
                </div>
              </Link>

            </div>
</div>
</div> 
              <br></br>
              <br></br>
    </div>
  )
}

export default Destinations;