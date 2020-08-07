import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-database-8704b.firebaseio.com/",
});

export default instance;
