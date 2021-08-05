import Cookie from "js-cookie";
import Router from "next/router";

export const tokenHandler = async () => {
    const token = Cookie.get("token");

    if (token) {
      // authenticate the token on the server and place set user object
      return new Promise((resolve, reject) => {
        fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then(async (res) => {
              console.log("res: ", res)
            // if res comes back not valid, token is not valid
            // delete the token and log the user out on client
            if (!res.ok) {
              Cookie.remove("token");
              resolve(null);
            }
            const user = await res.json();
            resolve(user)
          });
      })
        
    } else {
        return null
    }
}

export const login = async (identifier, password) => {  
  //prevent function from being ran on the server
  if (typeof window === "undefined") {
    return;
  }

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      identifier, password 
    })
  };
  console.log("request: ", requestOptions)
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`, requestOptions)
  const json = await response.json();
  console.log("json user:", json.user)
  if (json.jwt) {
      Cookie.set("token", json.jwt);
      return json.user
  } else {
      return false
  }

};
  
export const logout = () => {
    //remove token and user cookie
    Cookie.remove("token");
    delete window.__user;
    // sync logout between multiple windows
    window.localStorage.setItem("logout", Date.now());
    //redirect to the home page
    Router.push("/");
  };
  