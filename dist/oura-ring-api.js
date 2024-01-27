"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OuraRingApiClass = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const headers = {
    Authorization: `Bearer ${process.env.OURA_RING_ACCESS_TOKEN}`,
};
class OuraRingApiClass {
    constructor() {
        this.baseUrl = "https://api.ouraring.com/v2/usercollection/";
    }
    getSleepSummary() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${this.baseUrl}daily_sleep?start_date=2024-01-01&end_date=2024-01-02`, { headers: headers });
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.OuraRingApiClass = OuraRingApiClass;
