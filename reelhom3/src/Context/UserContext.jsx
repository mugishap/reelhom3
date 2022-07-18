import React, { useContext } from "react";
import { getCookie } from "./RequireAuth";

const UserContext = React.createContext();

export const useUsers = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {

  const [users, setUsers] = React.useState([]);

  const baseURL = 'https://reelhome.herokuapp.com'
  // const baseURL = 'http://localhost:5050'
  const newUser = async ({ fullname, username, email, password }) => {
    const res = await fetch(`${baseURL}/user/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        fullname,
        username,
        email,
        password,
      })
    })
    const data = await res.json();
    setUsers(data.users)
    return data;
  }
  const loginUser = async ({ email, password }) => {
    const res = await fetch(`${baseURL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        email,
        password,
      })
    })
    const data = await res.json();
    return data;
  }
  const getUserByID = async (userID) => {
    const res = await fetch(`${baseURL}/user/${userID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${getCookie("token")}`
      },
    })
    const data = await res.json();
    return data;
  }
  const getSuggestions = async () => {
    const res = await fetch(`${baseURL}/user/suggestedUsers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${getCookie("token")}`
      },
    })
    const data = await res.json();
    return data;
  }
  const followUser = async (userID,status) => {
    const res = await fetch(`${baseURL}/user/follow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${getCookie("token")}`
      },
      body: JSON.stringify({
        user: userID,
        status
      })
    })
    const data = await res.json();
    return data;
  }

  const updateCoverPicture = async (imageStr) => {
    const res = await fetch(`${baseURL}/user/updateCoverPicture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${getCookie("token")}`
      },
      body: JSON.stringify({
        imageStr,
      })
    })
    const data = await res.json();
    return data;

  }
  const updateProfilePicture = async (imageStr) => {
    const res = await fetch(`${baseURL}/user/updateProfilePicture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${getCookie("token")}`
      },
      body: JSON.stringify({
        imageStr,
      })
    })
    const data = await res.json();
    return data;

  }
  const updateBiography = async (biography) => {
    const res = await fetch(`${baseURL}/user/updateBiography`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${getCookie("token")}`
      },
      body: JSON.stringify({
        biography,
      })
    })
    const data = await res.json();
    return data;

  }
  const updateUser = async ({ fullname, username, email }) => {
    const res = await fetch(`${baseURL}/user/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${getCookie("token")}`
      },
      body: JSON.stringify({
        fullname,
        username,
        email,
      })
    })
    const data = await res.json();
    return data;
  }

  const updateAllAspects = async ({ fullname, username, email, cover, profile }) => {
    const res = await fetch(`${baseURL}/user/updateAllAspects`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${getCookie("token")}`
      },
      body: JSON.stringify({
        fullname,
        username,
        email,
        cover,
        profile
      })
    })
    const data = await res.json();
    console.log(data)
    return data;
  }

  const getFollowDataByID = async (userID) => {
    const res = await fetch(`${baseURL}/user/followdata/${userID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${getCookie("token")}`
      },
    })
    const data = await res.json();
    return data;
  }

  const updatePassword = async ({ password, newPassword }) => {
    const res = await fetch(`${baseURL}/user/updatePassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${getCookie("token")}`
      },
      body: JSON.stringify({
        password,
        newPassword,
      })
    })
    const data = await res.json();
    return data;
  }
  const deleteUser = async (formData) => {
    const res = await fetch(`${baseURL}/user/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${getCookie("token")}`
      },
      body: JSON.stringify(formData)
    })
    const data = await res.json();
    return data;

  }
  const getAllUsers = async () => {
    const res = await fetch(`${baseURL}/user/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${getCookie("token")}`
      },
    })
    const data = await res.json();
    setUsers(data.users)
    return users;
  }
  const searchUser = async (searchQuery) => {
    const res = await fetch(`${baseURL}/user/search/${searchQuery}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${getCookie("token")}`
      }
    })
    const data = await res.json();
    return data;
  }
  const getUserByName = async (searchQuery) => {
    const res = await fetch(`${baseURL}/user/search/${searchQuery}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${getCookie("token")}`
      },
    })
    const data = await res.json();
    return data;
  }

  return (
    <UserContext.Provider value={{ newUser,updateAllAspects, loginUser, getUserByID, getSuggestions, followUser, updateCoverPicture, updateProfilePicture, updateBiography, updateUser, getFollowDataByID, updatePassword, deleteUser, getAllUsers, searchUser, getUserByName }}>
      {children}
    </UserContext.Provider>
  );
}

