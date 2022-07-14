import React, { useContext, useEffect, useState } from "react";
import { getCookie } from "./RequireAuth";

const UserContext = React.createContext();

export const useUsers = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const baseURL = 'localhost:5000'

  const newUser = (formData) => { }
  const loginUser = (formData) => { }
  const getUserByID = (userID) => { }
  const getSuggestions = () => { }
  const followUser = (userID) => { }
  const unFollowUser = (userID) => { }
  const updateCoverPicture = (imageStr) => { }
  const updateProfilePicture = (imageStr) => { }
  const updateBiography = (biography) => { }
  const updateUser = (formData) => { }
  const getFollowingData = () => { }
  const getFollowerData = () => { }
  const getFollowingDataById = (userID) => { }
  const getFollowerDataById = (userID) => { }
  const updatePassword = (formData) => { }
  const deleteUser = (formData) => { }
  const getAllUsers = () => { }
  const searchUser = (searchQuery) => { }
  const getUserByName = (searchQuery) => { }

  return (
    <UserContext.Provider value={{ newUser, loginUser, getUserByID, getSuggestions, followUser, unFollowUser, updateCoverPicture, updateProfilePicture, updateBiography, updateBiography, updateUser, getFollowingData, getFollowerData, updatePassword, deleteUser, getAllUsers, searchUser, getUserByName, getFollowingDataById, getFollowerDataById }}>
      {children}
    </UserContext.Provider>
  );
};
