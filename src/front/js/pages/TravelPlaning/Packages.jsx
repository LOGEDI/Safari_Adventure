import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

const Packages = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getPackage(params.id);
  }, []);

  return (
    <div>


    <div className="container">
      <h1 className="text-dark">Packages</h1>
      <div className="row row-cols-1 g-3 justify-content-center">
        {store.package.map((item) => (
          <div key={item.id} className="col">
            <div className="card m-3  border-dark">
            <img
              src={item.url}
              className="img-fluid rounded p-1 "
              alt="..."
              style={{
                maxHeight: "24rem",
                borderColor: "#b2a97e",
                maxWidth: "24rem",
              }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="d-flex justify-content-between">
                  <Link to={"/PackagesDetails/" + item.id}>
                    <button href="#" className="btn btn-outline-dark">
                      Learn More
                    </button>
                  </Link>

                  {/* <button type="button" className="btn btn-outline-warning" onClick={() => actions.addFavorites(item.name)}>
                      {store.favorites.includes(item.name) ? <i key={item} className="fa-solid fa fa-heart"></i> : <i key={item} className="far fa-heart"></i>}
                    </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
   

    <div className='row row-cols-2 g-3 mt-5' >
              <div className='col-3'>
                <h3>Destinations</h3>
                <p>Discover Story-worthy places</p>
              </div>              
              <div className='col-9'>               
                <div className='row row-cols-6'>
                  <div className='col-2'>
                    <button className='btn-alert btn-l'> all</button>
                  </div>
                  <div className='col-2'>
                    <button className='btn-alert btn-l'>all</button>
                  </div>
                  <div className='col-2'>
                    <button className='btn-alert btn-l'>all</button>
                  </div>
                  <div className='col-2'>
                    <button className='btn-alert btn-l'>all</button>
                  </div>
                  <div className='col-2'>
                    <button className='btn-alert btn-l'>all</button>
                  </div>
                  <div className='col-2'>
                    <button className='btn-alert btn-l'>all</button>
                  </div>
                </div>             
              </div>
            </div>

            <div className='row row-cols-1 g-3 mt-4'>
              <div className='col-12'>
                <h3 className='text-center'>All Locations</h3>
                <p className='mt-4'>Africa is immense and the diversity incredible. 
                  You can encounter savannahs rich with big game, timeless cultures unchanged by the modern world and timeless history,
                  equatorial forests and mighty snow-capped mountains, pristine beaches and coral reef, 
                  searing deserts and cool highland retreats and endless opportunities for adventure, discovery and relaxation.
                </p>
                <h4>Why travel with us - We’ve been where you want to go!!</h4>
                <p className='mt-4'>Our luxury safaris explore East Africa from Kenya’s snow-capped Mt Kenya down to pristine beaches,
                   Tanzania’s vast Serengeti to the magical Spice Island of Zanzibar, 
                   the lush tropical climate and fertile land of Uganda that is perfect habitat for the gorillas & chimps and the 
                   Mountain Gorilla and wide range of bird species in the forests of Rwanda and Amazing history of Ethiopia. 
                   We are constantly discovering new destinations that will take you away from the crowds 
                   and off the beaten track allowing you to enjoy beauty and quiet of Africa.
                </p>
              </div>
            </div>

            <div className='row row-cols-4 g-3 mt-4'>
            {store.package.map((item) => (
              <div key={item.id} className="card" >
              <img className="card-img-top" src={item.url} alt="Card image cap"></img>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Some quick</p>
                  <Link to={"/PackagesDetails/" + item.id}>
                    <button href="#" className="btn btn-outline-dark">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
               ))}
            </div>
           

          

 </div>
    
    
    </div>
  );
};

export default Packages;
