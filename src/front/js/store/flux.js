import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";

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
      packageId: null,
      packagesIds: [],
      packages: [],  
      user: [],
      userDetail: {}, 
      userId: null,   
      admin: false,
      premium: false,      
      userId: null,
      auth: false,
      registered: false,
      profile: {},
      favoriteItem: [], //have the id of the favorites packages
      favoritesList: [],
      favoriteHeart: false,
      comments: [],

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
      //											 GET PROFILE
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

      updateUser: async (name, lastname, country, password, user_url) => {
        // bring user data by id
        let store = getStore();
        let user_id = store.userId;
        try {
          const response = await axios.put(
            process.env.BACKEND_URL + "/api/user/" + user_id,
            {
              //   email: email,
              //   username: username,
              
              name: name,
              lastname: lastname,
              country: country,
              password: password,
              user_url: user_url,
            }
          );
          // Sweet alert
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your profile has been updated",
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
      //											 GET USERS ADMIN
      //-----------------------------------------------------------------------------------------------------------------------------

      getUsers: async () => {
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/user"
          ); // search
          const data = await response.json();
          // set store with the bringed data
          setStore({
            user: data,
          }); //promise
        } catch (err) {
          // standar error log
          console.log(err);
        }
        // details fetch
      },

//-----------------------------------------------------------------------------------------------------------------------------
//											PUT EDIT USERS ADMIN
//-----------------------------------------------------------------------------------------------------------------------------

      adminUser: async (
        name, lastname, country, password, user_url, admin, premium, userId) => {
             
        try {
          const response = await axios.put(
            process.env.BACKEND_URL + "/api/user/" + userId,
            {
              name: name,
              lastname: lastname,
              country: country,
              password: password,
              user_url: user_url,
              admin: admin,
              premium: premium,
            }
          );
          // sweetalert
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your profile has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(response);
          
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

       //-----------------------------------------------------------------------------------------------------------------------------
      //											 GET USERS DETAILS
      //-----------------------------------------------------------------------------------------------------------------------------

      getUserDetail: async (id) => {
        let store = getStore();
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/user/" + id
          );
          const data = await response.json();
          // console.log(data);
          setStore({
            userDetail: data,
            userId: data.id,
          });
          // console.log(store.userDetail);
          // console.log(store.userId);
          return store.userId;
        } catch (err) {
          console.log(err);
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
      //									ADMIN	USER DELETE
      //-----------------------------------------------------------------------------------------------------------------------------

      deleteUser: async (user_id) => {
        let store = getStore();
        try {
          const response = await axios.delete(
            process.env.BACKEND_URL + "/api/user/" + user_id,
            {
              data: {
                id_user: user_id,
              },
            }
          );
          getActions().getUsers();
          return;
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

          // window.localStorage.setItem("isLoggedIn", true); //-------permanent loged-------------------

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

        // window.localStorage.removeItem("isLoggedIn");//-----------------------

        setStore({
          auth: false,
        });
        return false;
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
      //											 GET PACKAGES
      //-----------------------------------------------------------------------------------------------------------------------------

      getPackage: async () => {
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/package"
          ); // search
          const data = await response.json();
          // set store with the bringed data
          setStore({
            package: data,
          }); //promise
        } catch (err) {
           // standar error log
          console.log(err);
        }
        // details fetch
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
        overview_title1,
        overview_acomodation1,
        overview_description1,
        overview_title2,
        overview_acomodation2,
        overview_description2,
        overview_title3,
        overview_acomodation3,
        overview_description3,
        overview_title4,
        overview_acomodation4,
        overview_description4,
        overview_title5,
        overview_acomodation5,
        overview_description5,
        overview_title6,
        overview_acomodation6,
        overview_description6,
        overview_title7,
        overview_acomodation7,
        overview_description7,
        overview_title8,
        overview_acomodation8,
        overview_description8,
        overview_title9,
        overview_acomodation9,
        overview_description9,
        overview_title10,
        overview_acomodation10,
        overview_description10,
        overview_title11,
        overview_acomodation11,
        overview_description11,
        overview_title12,
        overview_acomodation12,
        overview_description12,
        overview_title13,
        overview_acomodation13,
        overview_description13,
        overview_title14,
        overview_acomodation14,
        overview_description14,
        overview_title15,
        overview_acomodation15,
        overview_description15,
        url,
        url1,
        url2,
        url3,
        url4,
        url5,
        url6,
        url7,
        url8,
        url9,
        url10,
        url11,
        url12,
        url13,
        url14,
        url15,
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
              overview_title1: overview_title1,
              overview_acomodation1: overview_acomodation1,
              overview_description1: overview_description1,
              overview_title2: overview_title2,
              overview_acomodation2: overview_acomodation2,
              overview_description2: overview_description2,
              overview_title3: overview_title3,
              overview_acomodation3: overview_acomodation3,
              overview_description3: overview_description3,
              overview_title4: overview_title4,
              overview_acomodation4: overview_acomodation4,
              overview_description4: overview_description4,
              overview_title5: overview_title5,
              overview_acomodation5: overview_acomodation5,
              overview_description5: overview_description5,
              overview_title6: overview_title6,
              overview_acomodation6: overview_acomodation6,
              overview_description6: overview_description6,
              overview_title7: overview_title7,
              overview_acomodation7: overview_acomodation7,
              overview_description7: overview_description7,
              overview_title8: overview_title8,
              overview_acomodation8: overview_acomodation8,
              overview_description8: overview_description8,
              overview_title9: overview_title9,
              overview_acomodation9: overview_acomodation9,
              overview_description9: overview_description9,
              overview_title10: overview_title10,
              overview_acomodation10: overview_acomodation10,
              overview_description10: overview_description10,
              overview_title11: overview_title11,
              overview_acomodation11: overview_acomodation11,
              overview_description11: overview_description11,
              overview_title12: overview_title12,
              overview_acomodation12: overview_acomodation12,
              overview_description12: overview_description12,
              overview_title13: overview_title13,
              overview_acomodation13: overview_acomodation13,
              overview_description13: overview_description13,
              overview_title14: overview_title14,
              overview_acomodation14: overview_acomodation14,
              overview_description14: overview_description14,
              overview_title15: overview_title15,
              overview_acomodation15: overview_acomodation15,
              overview_description15: overview_description15,
              url: url,
              url1: url1,
              url2: url2,
              url3: url3,
              url4: url4,
              url5: url5,
              url6: url6,
              url7: url7,
              url8: url8,
              url9: url9,
              url10: url10,
              url11: url11,
              url12: url12,
              url13: url13,
              url14: url14,
              url15: url15,
            }
          );
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
        overview_title1,
        overview_acomodation1,
        overview_description1,
        overview_title2,
        overview_acomodation2,
        overview_description2,
        overview_title3,
        overview_acomodation3,
        overview_description3,
        overview_title4,
        overview_acomodation4,
        overview_description4,
        overview_title5,
        overview_acomodation5,
        overview_description5,
        overview_title6,
        overview_acomodation6,
        overview_description6,
        overview_title7,
        overview_acomodation7,
        overview_description7,
        overview_title8,
        overview_acomodation8,
        overview_description8,
        overview_title9,
        overview_acomodation9,
        overview_description9,
        overview_title10,
        overview_acomodation10,
        overview_description10,
        overview_title11,
        overview_acomodation11,
        overview_description11,
        overview_title12,
        overview_acomodation12,
        overview_description12,
        overview_title13,
        overview_acomodation13,
        overview_description13,
        overview_title14,
        overview_acomodation14,
        overview_description14,
        overview_title15,
        overview_acomodation15,
        overview_description15,
        url,
        url1,
        url2,
        url3,
        url4,
        url5,
        url6,
        url7,
        url8,
        url9,
        url10,
        url11,
        url12,
        url13,
        url14,
        url15,
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
              overview_title1: overview_title1,
              overview_acomodation1: overview_acomodation1,
              overview_description1: overview_description1,
              overview_title2: overview_title2,
              overview_acomodation2: overview_acomodation2,
              overview_description2: overview_description2,
              overview_title3: overview_title3,
              overview_acomodation3: overview_acomodation3,
              overview_description3: overview_description3,
              overview_title4: overview_title4,
              overview_acomodation4: overview_acomodation4,
              overview_description4: overview_description4,
              overview_title5: overview_title5,
              overview_acomodation5: overview_acomodation5,
              overview_description5: overview_description5,
              overview_title6: overview_title6,
              overview_acomodation6: overview_acomodation6,
              overview_description6: overview_description6,
              overview_title7: overview_title7,
              overview_acomodation7: overview_acomodation7,
              overview_description7: overview_description7,
              overview_title8: overview_title8,
              overview_acomodation8: overview_acomodation8,
              overview_description8: overview_description8,
              overview_title9: overview_title9,
              overview_acomodation9: overview_acomodation9,
              overview_description9: overview_description9,
              overview_title10: overview_title10,
              overview_acomodation10: overview_acomodation10,
              overview_description10: overview_description10,
              overview_title11: overview_title11,
              overview_acomodation11: overview_acomodation11,
              overview_description11: overview_description11,
              overview_title12: overview_title12,
              overview_acomodation12: overview_acomodation12,
              overview_description12: overview_description12,
              overview_title13: overview_title13,
              overview_acomodation13: overview_acomodation13,
              overview_description13: overview_description13,
              overview_title14: overview_title14,
              overview_acomodation14: overview_acomodation14,
              overview_description14: overview_description14,
              overview_title15: overview_title15,
              overview_acomodation15: overview_acomodation15,
              overview_description15: overview_description15,
              url: url,
              url1: url1,
              url2: url2,
              url3: url3,
              url4: url4,
              url5: url5,
              url6: url6,
              url7: url7,
              url8: url8,
              url9: url9,
              url10: url10,
              url11: url11,
              url12: url12,
              url13: url13,
              url14: url14,
              url15: url15,
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
            getActions().deleteFavorites(package_id);
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
      //								GET FAVORITES BY USER
      //-----------------------------------------------------------------------------------------------------------------------------

      mapfavorites: async () => {
        let store = getStore();
        await getActions().getFavorites();
        setStore({
          favoriteItem: store.favoritesList?.map((item) => item.id),
        });
        // console.log(store.favoriteItem);
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

      deleteFavorites: async (package_id) => {
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
            favoritesList: response.data.results,
          });
        } catch (error) {
          if (error.response.status === 404) {
            setStore({
              favoritesList: [],
            });
          }
        }
      }, 

    //  -----------------------------------------------------------------------------------------------------------------------------
      //											 COMMENT POST
      //-----------------------------------------------------------------------------------------------------------------------------

      createComment: async (comment, package_id) => {
       
        let store = getStore();
        let user_id = store.userId;
        // this change into integer the package id.
        package_id = parseInt(package_id);
        try {
          const response = await axios.post(
            process.env.BACKEND_URL + "/api/comment",
            {
              id_packages: package_id,
              id_user: user_id,
              comment: comment,
          
            }
          );

          return response;
        } catch (error) {
        
          console.log(error);
        }
      },

//-----------------------------------------------------------------------------------------------------------------------------
      //											 GET COMMENTS  
      //-----------------------------------------------------------------------------------------------------------------------------


      getProductComments: async (id) => {
        let store = getStore();
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/package/" + id + "/comments"
          );
          const data = await response.json();
       
          setStore({
            comments: data.map((item) => item),
          });
          return store.comments;
        } catch (error) {
          
          console.log(error);
        }
      },

//-----------------------------------------------------------------------------------------------------------------------------
      //											 GET COMMENTS  
      //-----------------------------------------------------------------------------------------------------------------------------


      getComments: async (id) => {
        let store = getStore();
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/comments"
          );
          const data = await response.json();
       
          setStore({
            comments: data.map((item) => item),
          });
          return store.comments;
        } catch (error) {
          
          console.log(error);
        }
      },

 //-----------------------------------------------------------------------------------------------------------------------------
      //											 COMMENT DELETE
      //-----------------------------------------------------------------------------------------------------------------------------

      deleteComments: async (comment_id) => {


        let store = getStore();
        let user_id = store.userId;
        try {
          const response = await axios.delete(
            process.env.BACKEND_URL + "/api/comments/" + user_id + "/" + comment_id,
          
          );
          // Sweet alert
          Swal.fire({ text: response.data.msg, confirmButtonColor: "#000000" });
          getActions().getComments();
          getActions().comparingFavorites();
          return response;
        } catch (error) {
          console.log(error);
        }
      },


    },
  };
};

export default getState;
