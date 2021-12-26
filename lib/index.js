"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var VerusClient = /** @class */ (function () {
    function VerusClient(rpcBaseUrl, rpcUsername, rpcPassword) {
        this.client = axios_1.default.create({
            baseURL: rpcBaseUrl,
            auth: {
                username: rpcUsername,
                password: rpcPassword,
            }
        });
    }
    return VerusClient;
}());
exports.default = VerusClient;
