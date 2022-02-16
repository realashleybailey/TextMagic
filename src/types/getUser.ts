/*
 * Written by Ashley Bailey <admin@ashleybailey.me>
 * Description: Software Written By Ashley Bailey
 * License: Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created on Wed Feb 16 2022
 * Copyright (c) 2022 
 */

export interface getUserType {
    displayTimeFormat: string;
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    status: string;
    balance: number;
    phone: null;
    company: string;
    currency: Currency;
    country: Country;
    timezone: Timezone;
    subaccountType: string;
    emailAccepted: boolean;
    phoneAccepted: boolean;
    avatar: null;
}

export interface Country {
    id: string;
    name: string;
}

export interface Currency {
    unicodeSymbol: string;
    id: string;
    htmlSymbol: string;
}

export interface Timezone {
    id: number;
    area: string;
    dst: number;
    offset: number;
    timezone: string;
}
