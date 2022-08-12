import axios from "axios";
const url = "https://kalisainezagiovanni.herokuapp.com";
const instance = axios.create({
    baseURL: url,
})
export default instance;