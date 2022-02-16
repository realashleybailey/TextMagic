import axios, { AxiosRequestConfig } from "axios";
import ApiClient from "src/controllers/ApiClient";
import { putUserType } from "src/types";

export async function putUser(ApiClient: ApiClient, data: putUserType) {
    const config: AxiosRequestConfig = {
        method: "put",
        url: `${ApiClient.baseUrl}/user`,
        data,
        auth: {
            username: ApiClient.username,
            password: ApiClient.password
        }
    };

    const request = await axios.request(config);

    if (request.status === 201) {
        return request.data as putUserType;
    }

    throw new Error(request.statusText);
}