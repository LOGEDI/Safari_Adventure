import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import Swal from "sweetalert2";

import destinationBackground from "../../../img/destinations_background.jpg";
const AdminUsers = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getUsers(params.id);
  }, []);

  const handleSweetAlert = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "The user has been deleted.",
          icon: "success",
          confirmButtonColor: "#000000",
        });
        const remove = actions.deleteAccount(id);
        console.log(remove);
      }
    });
  };

  return (
    <div>AdminUsers</div>
  )
};

export default AdminUsers;
