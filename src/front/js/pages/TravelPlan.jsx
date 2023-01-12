import React, { useContext, useState } from "react";
import { FormGroup, Label, Input, FormText, Form, Button } from "reactstrap";
//import { Context } from "../../store/appContext";
import { Context } from "../store/appContext";
import Nav from "react-bootstrap/Nav";
import Swal from "sweetalert2";

const TravelPlan = () => {
  const { comment, setComment } = useContext(Context);
  const [user, setUser] = useState("");
 // const [package, setPackage] = useState("");



  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let onUploaded = await actions.createPackage(
      user,
      comment,
      
   l
    );
    // console.log(onUploaded);

    setComment("");
    setUser("");
    
    Swal.fire({ text: "Package Created", confirmButtonColor: "#000000" });
  };

  // const uploadImage = async (e) => {
  //   const files = e.target.files;
  //   const data = new FormData();
  //   data.append("file", files[0]);
  //   data.append("upload_preset", "wluy28lt");
  //   setLoading(true);
  //   const res = await fetch(
  //     // url-cloudinary/cloudinaryname/file/action
  //     {
  //       method: "POST",
  //       body: data,
  //     }
  //   );
  //   const file = await res.json();
  //   // console.log(res);
  //   setImage(file.secure_url);
  //   setUrl(file.secure_url);
  //   // console.log(file.secure_url);
  //   setLoading(false);
  // };

  return (
    <>
    (
        <div
          className="container mt-5 card bg-ligth text-black my-5 mx-auto pt-3"
          style={{ maxWidth: "700px" }}
        >
          <h1 className="fw-bold text-uppercase" style={{ color: "#bdb284" }}>
            Make a comment
          </h1>
          <div className="col-5 mx-auto my-5">
            <Form
              onSubmit={handleSubmit}
              style={{ fontFamily: "Rajdhani, sans-serif", fontSize: "1.2rem" }}
            >
              <FormGroup>

                <Label for="exampleName">Comment</Label>
                <Input
                  id="exampleName"
                  name="name"
                  type="text"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  required
                />
<p class="text-center"><button>Leave A Review!</button></p>

              </FormGroup>
            </Form>
          </div>
        </div>
     
        <div className="d-flex vh-auto vh-100 text-center justify-content-center ">
          <div>
       
          </div>
        </div>
      )
    </>
  );
};

export default TravelPlan;
