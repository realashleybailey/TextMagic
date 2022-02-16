import axios, { AxiosRequestConfig } from "axios";

async function CheckAuth(username: string, password: string, baseUrl: string) {
    // Check if username and password are empty
    if (username === "" || password === "") {
        throw new Error("Username or Password is empty");
    }

    // Check if username and password are valid
    const config: AxiosRequestConfig = {
        method: "get",
        url: `${baseUrl}/user`,
        auth: {
            username,
            password
        }
    };

    const request = await axios.request(config);

    if (request.status === 200) {
        return request.data;
    }
}

export default CheckAuth;