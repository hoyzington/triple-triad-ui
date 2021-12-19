import { Principal } from "../models/Principal";
import { appClient } from "./app-client"

export const authenticate = async (credentials: { username: string, password: string }) => {

    let resp = await appClient.post('/auth', credentials);

    if (resp.status == 401) {
        throw resp.data;
    }

    // TODO: refactor backend to return a Principal object rather than no content

    if (resp.status == 204) {
        console.log('Authentication success!');
    }

    // return resp.data;
    return new Principal('123456789', 'wsingleton', 'ADMIN');
    // return new Principal(resp., 'wsingleton', 'ADMIN');

}