import axios from "axios"

const instance = axios.create({
    baseURL: "https://aid-camp-server-a12.vercel.app",
    // withCredentials: true,
})


const useAxiosPublic = () => {
    return instance;
};

export default useAxiosPublic;