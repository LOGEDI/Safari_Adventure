import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],

      package: [],
      packageDetail: {},
      packages: [],
      listaFavoritos: [],
      admin: false,
      premium: false,
      packageId: null,
      userId: null,
      auth: false,
      registered: false,
      profile: {},
      favoriteItem: [], //have the id of the favorites packages
      packagesIds: [],
      faved: false,
      favoriteHeart: false,
    },
    actions: {
      //-----------------------------------------------------------------------------------------------------------------------------
      //											 EXAMPLE FUNCTION
      //-----------------------------------------------------------------------------------------------------------------------------

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //											 GET USERS
      //-----------------------------------------------------------------------------------------------------------------------------

      userProfile: async () => {
        // looks for a token
        const userToken = localStorage.getItem("token");
        try {
          const response = await axios.get(
            process.env.BACKEND_URL + "/api/profile",
            {
              headers: {
                Authorization: "Bearer " + userToken,
              },
            }
          );
          // console.log(data)
          setStore({
            profile: response.data.user,
          });
          // console.log(response.data);
          return true;
        } catch (error) {
          // console.log(error);
          if (error.code === "ERR_BAD_REQUEST") {
            // console.log(error.response.data.msg);
            return;
          }
        }
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //											PUT UPDATE USERS
      //-----------------------------------------------------------------------------------------------------------------------------

      updateUser: async (password, name, lastname, country) => {
        // bring user data by id
        let store = getStore();
        let user_id = store.userId;
        try {
          const response = await axios.put(
            process.env.BACKEND_URL + "/api/user/" + user_id,
            {
              //   email: email,
              //   username: username,
              password: password,
              name: name,
              lastname: lastname,
              country: country,
            }
          );
          // Sweet alert
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(response);
        } catch (error) {
          // Error codes
          // console.log(error);
          if (error.response.status === 401) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.msg,
            });
            return error.response.data.msg;
          }
          if (error.response.status === 409) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.msg,
            });
            return error.response.data.msg;
          }
          if (error.response.status === 404) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.msg,
            });
            return error.response.data.msg;
          }
        }
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //											 GET PACKAGES
      //-----------------------------------------------------------------------------------------------------------------------------

      getPackage: async () => {
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/package"
          ); //ir a buscar
          const data = await response.json();
          // Setea store con los datos que trae
          setStore({
            package: data,
          }); //promesa 2
        } catch (err) {
          // Log de error standard
          console.log(err);
        }
        // fetch de los detalles
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //											 GET PACKAGES DETAILS
      //-----------------------------------------------------------------------------------------------------------------------------

      getPackageDetail: async (id) => {
        let store = getStore();
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/package/" + id
          );
          const data = await response.json();
          // console.log(data);
          setStore({
            packageDetail: data,
            packageId: data.id,
          });
          // console.log(store.packageDetail);
          // console.log(store.packageId);
          return store.packageId;
        } catch (err) {
          console.log(err);
        }
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //											 LOGIN POST
      //-----------------------------------------------------------------------------------------------------------------------------

      login: async (email, password) => {
        try {
          const response = await axios.post(
            process.env.BACKEND_URL + "/api/login",
            {
              email: email,
              password: password,
            }
          );
          // Sets store with the user id and auth become true to give access
          // conditions to determine the user access level
          // if admin
          if (response.data.user.admin) {
            setStore({
              admin: true,
              auth: true,
              userId: response.data.user.id,
            });
            // if premium user
          } else if (response.data.user.premium) {
            setStore({
              premium: true,
              auth: true,
              userId: response.data.user.id,
            });
            // if standar user
          } else {
            setStore({
              auth: true,
              userId: response.data.user.id,
            });
          }
          // save token in local storage
          localStorage.setItem("token", response.data.msg);

          window.localStorage.setItem("isLoggedIn", true) //-------------------------------------

          return response.data.msg;
        } catch (error) {
          // error codes
          if (error.response.status === 404) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              confirmButtonColor: "#000000",
              text: error.response.data.msg + "... redirecting to signup...",
            });
            return error.response.data.msg;
          } else if (error.response.data.msg === "Bad email or password") {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.msg,
            });
            return error.response.data;
          }
        }
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //											 LOGOUT
      //-----------------------------------------------------------------------------------------------------------------------------

      logout: () => {
        localStorage.removeItem("token");

        window.localStorage.removeItem("isLoggedIn");//-----------------------

        setStore({
          auth: false,
        });
        return false;
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //											 FAVORITES POST
      //-----------------------------------------------------------------------------------------------------------------------------

      createFavorite: async (package_id) => {
        let store = getStore();
        getActions().mapfavorites();
        let user_id = store.userId;
        // console.log(user_id);
        try {
          const response = await axios.post(
            process.env.BACKEND_URL + "/api/favorites",
            {
              id_packages: package_id,
              id_user: user_id,
            }
          );
          //   console.log(response);
          getActions().getPackage();
          getActions().mapfavorites();
          getActions().comparingFavorites();
          return response;
        } catch (error) {
          // console.log(error);
          // console.log(error.response.status);
          // console.log(package_id);
          if (error.response.status === 404) {
            getActions().eliminarFavoritos(package_id);
          } else if (error.response.data.msg === "User is not logged in") {
            // alert(error.response.data);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text:
                error.response.data.msg +
                ". You'll be rediredted to the login page",
              confirmButtonColor: "#000000",
            });
            return error.response.data.msg;
          }
        }
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //											 COMMENT POST
      //-----------------------------------------------------------------------------------------------------------------------------

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/comment");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      //-----------------------------------------------------------------------------------------------------------------------------
      //								GET FAVORITES BY USER
      //-----------------------------------------------------------------------------------------------------------------------------

      mapfavorites: async () => {
        let store = getStore();
        await getActions().getFavorites();
        setStore({
          favoriteItem: store.listaFavoritos?.map((item) => item.id),
        });
        // console.log(store.favoriteItem);
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //						              	 PACKAGES BY ID
      //-----------------------------------------------------------------------------------------------------------------------------

      // packages map by id
      mapPackageId: async () => {
        let store = getStore();
        await getActions().getPackage();
        // console.log(store.package);
        setStore({
          packagesIds: store.package.map((item) => item.id),
        });
        // console.log(store.packagesIds);
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //									 FAVORITES COMPARE
      //-----------------------------------------------------------------------------------------------------------------------------

      // this mark the heart icon when selected
      comparingFavorites: async (packageId) => {
        let store = getStore();
        await getActions().mapfavorites(); // store.favoriteItem
        await getActions().mapPackageId(); // store.packagesIds
        // Array comparation
        for (let i = 0; i < store.packagesIds.length; i++) {
          let element = store.packagesIds[i];
          if (store.favoriteItem?.includes(element)) {
            // console.log(element);
            for (element in store.favoriteItem) {
              setStore({
                favoriteHeart: true,
              });
            }
          } else {
            // console.log(element);
            setStore({
              favoriteHeart: false,
            });
          }
        }
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //											 FAVORITES DELETE
      //-----------------------------------------------------------------------------------------------------------------------------

      eliminarFavoritos: async (package_id) => {
        // Se llama store
        let store = getStore();
        let user_id = store.userId;
        try {
          const response = await axios.delete(
            process.env.BACKEND_URL + "/api/favorites",
            {
              data: {
                id_packages: package_id,
                id_user: user_id,
              },
            }
          );
          // Sweet alert
          Swal.fire({ text: response.data.msg, confirmButtonColor: "#000000" });
          getActions().getFavorites();
          getActions().comparingFavorites();
          return response;
        } catch (error) {
          console.log(error);
        }
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //										GET USER FAVORITES
      //-----------------------------------------------------------------------------------------------------------------------------

      getFavorites: async () => {
        let store = getStore();
        let user_id = store.userId;

        try {
          const response = await axios.get(
            process.env.BACKEND_URL + "/api/user/" + user_id + "/favorites"
          );
          setStore({
            listaFavoritos: response.data.results,
          });
        } catch (error) {
          if (error.response.status === 404) {
            setStore({
              listaFavoritos: [],
            });
          }
        }
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //										PACKAGES POST
      //-----------------------------------------------------------------------------------------------------------------------------

      createPackage: async (
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
      ) => {
        try {
          const response = await axios.post(
            process.env.BACKEND_URL + "/api/package",
            {
              name: name,
              category: category,
              description: description,
              title: title,
              tour_duration: tour_duration,
              destinations: destinations,
              activities: activities,
              transport: transport,
              lodging: lodging,
              overview_title: overview_title,
              overview_acomodation: overview_acomodation,
              overview_description: overview_description,
              url: url,
            }
          );
        } catch (error) {
          console.log(error);
        }
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //											SIGNUP POST
      //-----------------------------------------------------------------------------------------------------------------------------

      signup: async (username, email, password) => {
        try {
          const response = await axios.post(
            process.env.BACKEND_URL + "/api/user",
            {
              username: username,
              email: email,
              password: password,
            }
          );
          if (response.data.msg === "New user created") {
            getActions().login(email, password);

            setStore({
              registered: true,
            });
          }
          return response.data.msg;
        } catch (error) {
          if (error.response.data.msg === "User exists") {
            return error.response.data.msg;
          }
        }
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //											 TOKEN GET
      //-----------------------------------------------------------------------------------------------------------------------------

      validToken: async () => {
        let accessToken = localStorage.getItem("token");
        try {
          const response = await axios.get(
            process.env.BACKEND_URL + "/api/valid-token",
            {
              headers: {
                Authorization: "Bearer " + accessToken,
              },
            }
          );
          if (response.data.user.admin) {
            setStore({
              admin: true,
              auth: true,
              userId: response.data.user.id,
            });
          } else if (response.data.user.premium) {
            setStore({
              premium: true,
              auth: true,
              userId: response.data.user.id,
            });
          } else {
            setStore({
              auth: true,
              userId: response.data.user.id,
            });
          }
          return;
        } catch (error) {
          if (error.code === "ERR_BAD_REQUEST") {
            setStore({
              auth: false,
            });
          }
          return false;
        }
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //											 PASSWORD CHANGE POST
      //-----------------------------------------------------------------------------------------------------------------------------

      changePassword: async (email) => {
        try {
          const response = await axios.post(
            process.env.BACKEND_URL + "/api/user/password",
            {
              email: email,
            }
          );
          if (response.status === 200) {
            swal("Your password has been sent to your email");
          }
        } catch (error) {
          if (error.response.data.msg === "User email doesn't exist") {
            swal("Your email does not exist");
          }
        }
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //											USER DELETE
      //-----------------------------------------------------------------------------------------------------------------------------

      deleteAccount: async () => {
        let store = getStore();
        let user_id = store.userId;
        try {
          const response = await axios.delete(
            process.env.BACKEND_URL + "/api/user/" + user_id,
            {}
          );
          console.log(response.data.msg);

          if (response.status === 200) {
            setStore({
              auth: false,
            });
            return response;
          }
        } catch (error) {
          console.log(error);
          if (error.response.status === 404) {
            Swal.fire(error.response.msg);
          }
        }
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //											 PACKAGE DELETE
      //-----------------------------------------------------------------------------------------------------------------------------

      deletePackage: async (package_id) => {
        let store = getStore();
        try {
          const response = await axios.delete(
            process.env.BACKEND_URL + "/api/package/" + package_id,
            {
              data: {
                id_packages: package_id,
              },
            }
          );
          getActions().getPackage();
          return;
        } catch (error) {
          console.log(error);
        }
      },

      //-----------------------------------------------------------------------------------------------------------------------------
      //											PUT EDIT PACKAGES
      //-----------------------------------------------------------------------------------------------------------------------------

      updatePackage: async (
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

        url,
        packageId
      ) => {
        let store = getStore();
        try {
          const response = await axios.put(
            process.env.BACKEND_URL + "/api/package/" + packageId,
            {
              name: name,
              category: category,
              description: description,
              title: title,
              tour_duration: tour_duration,
              destinations: destinations,
              activities: activities,
              transport: transport,
              lodging: lodging,
              overview_title: overview_title,
              overview_acomodation: overview_acomodation,
              overview_description: overview_description,

              url: url,
            }
          );
          if (response.status === 200) {
            Swal.fire(response.data.msg);
            getActions().getPackageDetail();
            return response;
          }
          getActions().getPackageDetail();
        } catch (error) {
          // Log de error
          console.log(error);
          if (error.response.status === 404) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.msg,
            });
            return error.response.data.msg;
          }
        }
      },
    },
  };
};

export default getState;
