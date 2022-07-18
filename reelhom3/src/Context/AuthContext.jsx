import React from 'react'
import jwtdecode from 'jwt-decode'
import {  getCookie } from './RequireAuth';

let AuthContext = React.createContext();

const baseURL = 'https://reelhome.herokuapp.com'
// const baseURL = 'http://localhost:5050'

export const useAuth = () => {
    return React.useContext(AuthContext);
  }

export default function AuthProvider({ children }) {
  let [user, setUser] = React.useState(undefined);

  const decodeToken = async()=> {
    const token =  getCookie('token');
    if (token) {
      try{
        const userDetails = await jwtdecode(token);
        const userID = await getUserById(userDetails.userid);
        console.log(userID);
       return setUser(userID);
      }
      catch(err){
        console.log(err);
       return setUser(null);
      }
    }
    return setUser(null);
  }
  React.useEffect(() => {
    decodeToken();
  }, [])


  let value = { user };

  return (
    <>{user!==undefined&&(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
     )}</>
  );
}

export const getUserById = async (id) => {
  const res = await fetch(`${baseURL}/user/getUserByID/${id}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("token"),
    }
  });
  const data = await res.json();
  return data.user;
}
