const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		message: null,
		token: "",
		auth: false,
		packages: [],
		packagesDetails: null,
		favorites: [],
	  },
	  actions: {

//-----------------------------------------------------------------------------------------------------------------------------
//											 SIGNUP
//-----------------------------------------------------------------------------------------------------------------------------
  
		signup: async (signupData) => {
		  await fetch(
			"https://3001-logedi-safariadventure-1rcdg1yv4sk.ws-eu79.gitpod.io/signup",
			{
			  method: "POST",
			  body: JSON.stringify(signupData),
			  headers: { "Content-Type": "application/json" },
			}
		  ).then((resp) => {
			if (resp.ok) {
			  console.log("Signup OK");
			}
		  });
		},
  
//-----------------------------------------------------------------------------------------------------------------------------
//											LOGIN
//-----------------------------------------------------------------------------------------------------------------------------

		login: (loginInfo) => {
		  const response = fetch(
			"https://3001-logedi-safariadventure-1rcdg1yv4sk.ws-eu79.gitpod.io/token",
			{
			  //mode: 'no-cors',
			  method: "POST",
			  body: JSON.stringify(loginInfo),
			  headers: { "Content-Type": "application/json" },
			}
		  )
		  .then(function(response) {
			if (!response.ok) {
			throw Error(response.statusText);
			}
			else{
			  setStore({ auth: true });
			  const { auth } = getStore();				  			  
			}
			return response.json()			
		})
		.then(data =>{localStorage.setItem("token", data.token); })
		.catch();
		},
		
//-----------------------------------------------------------------------------------------------------------------------------
//											LOGOUT
//-----------------------------------------------------------------------------------------------------------------------------		
		
		logout: ()=>{
	  		const { auth } = getStore();
		  	localStorage.removeItem("token")
		  	setStore({auth: false})
		},
  
//-----------------------------------------------------------------------------------------------------------------------------
//											PRIVATE
//-----------------------------------------------------------------------------------------------------------------------------

		private: async () => {
		  let myToken = localStorage.getItem("token");
		  
		  //if (tok == getStore().token) {
			await fetch(
			  "https://3001-logedi-safariadventure-1rcdg1yv4sk.ws-eu79.gitpod.io/private",
			  {
				method: "GET",
				headers: {
				  "Content-Type": "application/json",
				  Authorization: "Bearer " + myToken,
				},
			  }
			).then((res) => {
			  if (res.status == 200) {
				console.log("OK");
				const { auth } = getStore();
				setStore({ auth: true });
			  } else {
				console.log("Error");
			  }
			});
		},
  
//-----------------------------------------------------------------------------------------------------------------------------
//											PACKAGES FUNCTION
//-----------------------------------------------------------------------------------------------------------------------------
		getPackages: async () => {
			try {
				const response = await fetch(
					process.env.BACKEND_URL + "/packages"
				);
				const data = await response.json();
				setStore({
					packages: data,
				});
			} catch (err) {
				console.log(err);
			}
		},

//-----------------------------------------------------------------------------------------------------------------------------
//											PACKAGES DETAILS FUNCTION
//-----------------------------------------------------------------------------------------------------------------------------

		getPackagesDetails: async (id) => {
			let store = getStore();
			try {
				const response = await fetch(
					process.env.BACKEND_URL + "/packages/" + id
				);
				const data = await response.json();
				setStore({
					packagesDetails: data,
					packagesId: data.id,
				});
				return store.packagesId;
			} catch (err) {
				console.log(err);
			}
		},








		// getPackagesDetails: id => {
		// 	try {
		// 		return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
		// 			method: "GET",
		// 			redirect: "follow"
		// 		})
		// 			.then(response => response.json())
		// 			.then(data => 
		// 				setStore({ packagesDetails: data.result}));
		// 	} catch (error) {
		// 		return [];
		// 	}
		// },

//-----------------------------------------------------------------------------------------------------------------------------
//											ADD FAVOURITE PACKAGE FUNCTION
//-----------------------------------------------------------------------------------------------------------------------------

		addFavorites: itemName => {
			const {favorites} = getStore();
			if (!favorites.find(i => i == itemName )){
				favorites.push(itemName)
			}
			console.log(favorites)
			setStore({favorites})
		}, 

//-----------------------------------------------------------------------------------------------------------------------------
//											ADD FAVOURITE PACKAGE FUNCTION
//-----------------------------------------------------------------------------------------------------------------------------

		deleteFavorites: itemIndex => {
			const {favorites} = getStore();
			const newFav = [...favorites]
			newFav.splice(itemIndex,1)
			setStore({favorites: newFav})
		},

//-----------------------------------------------------------------------------------------------------------------------------
//											EXAMPLE FUNCTION
//-----------------------------------------------------------------------------------------------------------------------------

		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
  
		getMessage: async () => {
		  try {
			// fetching data from the backend
			const resp = await fetch(process.env.BACKEND_URL + "/hello");
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
	  },
	};
  };
  
  export default getState;
  