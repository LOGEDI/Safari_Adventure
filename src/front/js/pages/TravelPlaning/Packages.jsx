import React, { useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from "../../store/appContext";

const Packages = () => {
  const {store, actions} = useContext(Context);

    return (



      <div className="container">
          <h1 className="text-dark">Packages</h1>
          <div className="row row-cols-1 g-3 justify-content-center">

          {store.packages.map((value, i) => (
            <div key={i} className="col">
              <div className="card m-3  border-dark">
                <img src={"https://starwars-visualguide.com/assets/img/characters/"+ value.uid +".jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{value.name}</h5>
                  <div className="d-flex justify-content-between">

                    <Link  to={`/PackagesDetails/${value.uid}` } >
                      <button href="#" className="btn btn-outline-dark">
                        Learn More
                      </button>
                    </Link>

                    <button type="button" className="btn btn-outline-warning" onClick={() => actions.addFavorites(value.name)}>
                      {store.favorites.includes(value.name) ? <i key={i} className="fa-solid fa fa-heart"></i> : <i key={i} className="far fa-heart"></i>}
                    </button>
                  </div>
                </div>
              </div>
            </div> 
          ))}
          </div>
        </div>


    )
}

export default Packages