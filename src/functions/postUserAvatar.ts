import axios, { AxiosRequestConfig } from "axios";
import ApiClient from "src/controllers/ApiClient";
import { postUserAvatarType } from "src/types";

export async function postUserAvatar(ApiClient: ApiClient, data: postUserAvatarType) {
    const config: AxiosRequestConfig = {
        method: "post",
        url: `${ApiClient.baseUrl}/user/avatar`,
        data: {
            image: data.image
        },
        auth: {
            username: ApiClient.username,
            password: ApiClient.password
        }
    };

    const request = await axios.request(config);

    if (request.status === 201) {
        return request.data as postUserAvatarType;
    }

    throw new Error(request.statusText);
}