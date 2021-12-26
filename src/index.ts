import axios from "axios";
import { AxiosInstance } from 'axios'

interface VerusClientInstance {
    client: AxiosInstance
}

class VerusClient implements VerusClientInstance {
    client: AxiosInstance;
    constructor(rpcBaseUrl: string, rpcUsername: string, rpcPassword) {
        this.client = axios.create({
            baseURL: rpcBaseUrl,
            auth: {
                username: rpcUsername,
                password: rpcPassword,
            }
        })
    }
}

export default VerusClient