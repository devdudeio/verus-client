import axios from "axios";
import { AxiosInstance, AxiosResponse } from 'axios'

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
    getBalance(account?: string, minconf?: number, includeWatchonly?: boolean): Promise<number>
    _axiosInstance: AxiosInstance
}

class VerusClient implements VerusClientInstance {
    _axiosInstance: AxiosInstance;
       
    constructor(rpcBaseUrl: string, rpcUsername: string, rpcPassword: string){
        this._axiosInstance = axios.create({
            baseURL: rpcBaseUrl,
            auth: {
                username: rpcUsername,
                password: rpcPassword,
            }
        })     
      }
    async getBalance(account?: string, minconf?: number, includeWatchonly?: boolean){
          try {
            return await this._axiosInstance.post('', {
                method: 'getbalance',
                params: [
                    //TODO: add optional params
                ],
            })
            .then(response => parseFloat(response.data.result))
            .catch(err => {throw new Error(err)})
        } catch (err) {
            return err;
        }
    }
}



export default VerusClient