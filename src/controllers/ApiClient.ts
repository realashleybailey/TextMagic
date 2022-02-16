/*
 * Written by Ashley Bailey <admin@ashleybailey.me>
 * Description: Software Written By Ashley Bailey
 * License: Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created on Wed Feb 16 2022
 * Copyright (c) 2022 
 */

import { getUserType, postUserAvatarType, putUserType } from "src/types";
import { getUser, putUser, postUserAvatar } from "../functions";

class ApiClient {
    username: string;
    password: string;
    baseUrl: string;
    constructor(username: string, password: string, baseUrl: string = 'https://rest.textmagic.com/api', version: string = 'v2') {

        // Put username and password to this class
        this.username = username;
        this.password = password;

        // Create base url
        this.baseUrl = `${baseUrl}/${version}`;

        // Check if username and password are empty
        if (this.username === "" || this.password === "") {
            throw new Error("Username or Password is empty");
        }

        return this;
    }

    // Get user
    getUser(): Promise<getUserType> {
        return getUser(this);
    }

    // Put user
    putUser(data: putUserType): Promise<putUserType> {
        return putUser(this, data);
    }

    // Post user avatar
    postUserAvatar(data: postUserAvatarType): Promise<postUserAvatarType> {
        return postUserAvatar(this, data);
    }
}
export default ApiClient;