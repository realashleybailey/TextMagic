import axios, { AxiosRequestConfig } from "axios";
import { getUserType } from "src/types";
import ApiClient from "../controllers/ApiClient";

export async function getUser(ApiClient: ApiClient): Promise<getUserType> {
    const config: AxiosRequestConfig = {
        method: "get",
        url: `${ApiClient.baseUrl}/user`,
        auth: {
            username: ApiClient.username,
            password: ApiClient.password
        }
    };

    const request = await axios.request(config);

    if (request.status === 200) {
        return request.data as getUserType;
    }

    throw new Error(request.statusText);
}