const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		message: null,
		token: "",
		auth: false,
	  },
	  actions: {

//-----------------------------------------------------------------------------------------------------------------------------
//											 SIGNUP
//-----------------------------------------------------------------------------------------------------------------------------
  
		signup: async (signupData) => {
		  await fetch(
			"https://3001-kamiwey-42finalprojects-oh2ac6jqm74.ws-eu78.gitpod.io/signup",
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
			"https://3001-kamiwey-42finalprojects-oh2ac6jqm74.ws-eu78.gitpod.io/token",
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
			  "https://3001-kamiwey-42finalprojects-oh2ac6jqm74.ws-eu78.gitpod.io/private",
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
  