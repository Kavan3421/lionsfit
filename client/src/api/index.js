import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-ada8.onrender.com/api/",
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, queryString) =>
  await API.get(`/user/workout${queryString}`, {
    headers: { Authorization: `Bearer ${token}` },
  });   

export const addWorkout = async (token, data) =>
  await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const contact = async (token, data) =>
  await API.post('/user/contact', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
