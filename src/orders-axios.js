import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
});

export default instance;
