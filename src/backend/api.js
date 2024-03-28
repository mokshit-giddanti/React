import axios from "axios";
// import { useHistory } from "react-router-dom";
const URL = "https://mern-test-moip.onrender.com";

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("error in axios", error);
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("error in axios api", error);
    throw error;
  }
};

export const editUser1 = async (user, id) => {
  try {
    return await axios.post(`${URL}/${id}`, user);
  } catch (error) {
    console.log("error in axios api", error);
    throw error;
  }
};

export const deleteUser = async (id) => {
    try {
      return await axios.delete(`${URL}/${id}`);
    } catch (error) {
      console.log("error in axios api", error);
      throw error;
    }
  };
  export const addProject = async (projectData, history) => {
    try {
      const res = await axios.post(`${URL}/add`, projectData);
      alert(res.data.message);
      history.push("/all");
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Error adding project. Please try again.");
    }
  };



  export const registerUser = async (userData) => {
    try {
      const response = await axios.post(`${URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw new Error("Error registering user: " + error.message);
    }
  };



// export const deleteUser = async (id) => {
//   try {
//     return await axios.delete(`http://localhost:8000/${id}`);
//   } catch (error) {
//     console.log("error in axios api", error);
//     throw error;
//   }
// };


  
  
