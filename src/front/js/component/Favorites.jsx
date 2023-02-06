import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.userId != null) {
      actions.getFavorites();
    }
  }, [store.userId]);

  return (
    <div>
      {store.auth ? (
        <div className="main-content">
          <div className="container-fluid">
            <div className="row">
              <div className="card bg-secondary shadow">
                <div className="card-body">
                  <h6 className="package-detail-subtitle mb-4">FAVORITES</h6>
                  {store.favoritesList?.length > 0 ? (
                    store.favoritesList?.map((item) => (
                      <div key={item.id}>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-lg-2">
                              <img
                                src={item.url}
                                className="img-fluid"
                                alt="..."
                                style={{
                                  maxHeight: "250px",
                                  maxWidth: "150px",
                                  borderColor: "#b2a97e",
                                }}
                              />
                            </div>
                            <div className="col-lg-9">
                              <div className="form-group focused">
                                <h3 className="package-detail-title mt-4">
                                  {item?.name}
                                </h3>
                              </div>
                            </div>
                            <div className="col-lg-1">
                              <div className="form-group focused">
                                <div className=" justify-content-end">
                                  <span
                                    className="btn btn-outline-light mt-3"
                                    onClick={() =>
                                      actions.deleteFavorites(item.id)
                                    }
                                    style={{ color: "#d2ae6d" }}
                                  >
                                    <b>X</b>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="my-4" />
                      </div>
                    ))
                  ) : (
                    <p>No favorite package</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex vh-auto vh-100 text-center justify-content-center ">
          <div>
            <h1
              className="package-detail-title mt-5"
              style={{ color: "black" }}
            >
              Not logged in...
            </h1>
            <Nav.Link
              className="package-detail-subtitle"
              style={{ color: "#d2ae6d" }}
              href="/login"
            >
              Go to login
            </Nav.Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
