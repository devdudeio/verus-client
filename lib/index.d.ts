import { AxiosInstance } from 'axios';
interface VerusClientInstance {
    client: AxiosInstance;
}
declare class VerusClient implements VerusClientInstance {
    client: AxiosInstance;
    constructor(rpcBaseUrl: string, rpcUsername: string, rpcPassword: any);
}
export default VerusClient;
