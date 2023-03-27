import axios from "axios";

const accessToken = localStorage.getItem("accessToken");
export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    // headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "http://localhost:3000",
    //     "Access-Control-Allow-Credentials": true,
    // },
});
/*
// 인터셉트를 통해 토큰을 박음
instance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        // console.log(accessToken);

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
*/
