import axios from "axios"

const instance = axios.create({
    baseURL: "https://aid-camp-server-a12.vercel.app/",
    withCredentials: true,
})


const useAxios = () => {
    return instance;
};

export default useAxios;