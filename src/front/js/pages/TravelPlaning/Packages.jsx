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
    </div>
  );
};

export default Packages;
