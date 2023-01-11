import React, { useContext, useState } from "react";
import { FormGroup, Label, Input, FormText, Form, Button } from "reactstrap";
import { Context } from "../../store/appContext";
import Nav from "react-bootstrap/Nav";
import Swal from "sweetalert2";

const AddPackages = () => {
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [tour_duration, setTour_duration] = useState("");
  const [destinations, setDestinations] = useState("");
  const [activities, setActivities] = useState("");
  const [transport, setTransport] = useState("");
  const [lodging, setLodging] = useState("");
  const [overview_title, setOverview_title] = useState("");
  const [overview_acomodation, setOverview_acomodation] = useState("");
  const [overview_description, setOverview_description] = useState("");
  const [url, setUrl] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let onUploaded = await actions.createPackage(
      name,
      category,
      description,
      title,
      tour_duration,
      destinations,
      activities,
      transport,
      lodging,
      overview_title,
      overview_acomodation,
      overview_description,
      url
    );
    // console.log(onUploaded);

    setName("");
    setCategory("");
    setDescription("");
    setTitle("");
    setTour_duration("");
    setDestinations("");
    setActivities("");
    setTransport("");
    setLodging("");
    setOverview_title("");
    setOverview_acomodation("");
    setOverview_description("");
    setUrl("");
    
    Swal.fire({ text: "Package Created", confirmButtonColor: "#000000" });
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "wluy28lt");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqw7tpcul/image/upload",
      // url-cloudinary/cloudinaryname/file/action
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    // console.log(res);
    console.log(res);
    const url = file.secure_url
    console.log(url)
    setUrl(file.secure_url);
    // console.log(file.secure_url);
    setLoading(false);
  };

  return (
    <>
      {store.auth ? (
        <div
          className="container mt-5 card bg-ligth text-black my-5 mx-auto pt-3"
          style={{ maxWidth: "700px" }}
        >
          <h1 className="fw-bold text-uppercase" style={{ color: "#bdb284" }}>
            Upload your Package
          </h1>
          <div className="col-5 mx-auto my-5">
            <Form
              onSubmit={handleSubmit}
              style={{ fontFamily: "Rajdhani, sans-serif", fontSize: "1.2rem" }}
            >
              <FormGroup>
                <Label htmlFor="exampleName">Name</Label>
                <Input
                  id="exampleName"
                  name="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
                <Label htmlFor="exampleCategory">Category</Label>
                <Input
                  id="exampleCategory"
                  name="category"
                  type="text"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  required
                />

                <Label htmlFor="exampleDescription">Description</Label>
                <Input
                  id="exampleDescription"
                  name="description"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  required
                />

                <Label htmlFor="exampleTitle">Title</Label>
                <Input
                  id="exampleTitle"
                  name="title"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                />
                
                <Label htmlFor="exampleTour_duration">Tour Duration</Label>
                <Input
                  id="exampleTour_duration"
                  name="tour_duration"
                  type="text"
                  onChange={(e) => setTour_duration(e.target.value)}
                  value={tour_duration}
                  required
                />

                <Label htmlFor="exampleDestinations">Destinations</Label>
                <Input
                  id="exampleDestinations"
                  name="destinations"
                  type="text"
                  onChange={(e) => setDestinations(e.target.value)}
                  value={destinations}
                  required
                />
                
                <Label forhtmlFor="exampleAvtivities">Activities</Label>
                <Input
                  id="exampleActivities"
                  name="activities"
                  type="text"
                  onChange={(e) => setActivities(e.target.value)}
                  value={activities}
                  required
                />

                <Label htmlFor="exampleTransport">Transport</Label>
                <Input
                  id="exampleTransport"
                  name="transport"
                  type="text"
                  onChange={(e) => setTransport(e.target.value)}
                  value={transport}
                  required
                />

                <Label htmlFor="exampleLodging">Lodging</Label>
                <Input
                  id="exampleLodging"
                  name="lodging"
                  type="text"
                  onChange={(e) => setLodging(e.target.value)}
                  value={lodging}
                  required
                />

                <Label htmlFor="exampleOverview_title">Overview Title</Label>
                <Input
                  id="exampleOverview_title"
                  name="overview_title"
                  type="text"
                  onChange={(e) => setOverview_title(e.target.value)}
                  value={overview_title}
                  required
                />

                <Label htmlFor="exampleOverview_acomodation">Overview Acomodation</Label>
                <Input
                  id="exampleOverview_acomodation"
                  name="overview_acomodation"
                  type="text"
                  onChange={(e) => setOverview_acomodation(e.target.value)}
                  value={overview_acomodation}
                  required
                />

                <Label htmlFor="exampleOverview_description">Overview Description</Label>
                <Input
                  id="exampleOverview_description"
                  name="overview_description"
                  type="text"
                  onChange={(e) => setOverview_description(e.target.value)}
                  value={overview_description}
                  required
                />

                <Label htmlFor="exampleFile">File</Label>
                <Input
                  id="exampleFile"
                  name="file"
                  type="file"
                  onChange={(e) => {
                    uploadImage(e);
                    setUrl(e.target.value);
                  }}

                  // onChange={(e) => setUrl(e.target.value)}
                  // value={url}
                />
                <div d-flex justify-content-center></div>
                <Button
                  className="btn btn-outline-light btn-lg mx-2 px-5 mt-4"
                  type="submit"
                  style={{ color: "#bdb284" }}
                  color="white"
                >
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      ) : (
        <div className="d-flex vh-auto vh-100 text-center justify-content-center ">
          <div>
            <h1>Not logged in...</h1>
            <Nav.Link
              className="bg-dark"
              style={{ color: "#bdb284" }}
              href="/login"
            >
              Go to login
            </Nav.Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AddPackages;
