import { AxiosInstance } from 'axios';
interface VerusClientInstance {
    /**
     * @description the total amount in the wallet
     * @example
     * // the total amount in the wallet
     * .getBalance();
     * @example
     * // the total amount in the wallet at least 5 blocks confirmed
     * .getBalance('*', 5);
     * @returns {Promise<number>} total number of coins available in the wallet
     */
    getBalance(account?: string, minconf?: number, includeWatchonly?: boolean): Promise<number>;
    _axiosInstance: AxiosInstance;
}
declare class VerusClient implements VerusClientInstance {
    _axiosInstance: AxiosInstance;
    constructor(rpcBaseUrl: string, rpcUsername: string, rpcPassword: string);
    getBalance(account?: string, minconf?: number, includeWatchonly?: boolean): Promise<any>;
}
export default VerusClient;
