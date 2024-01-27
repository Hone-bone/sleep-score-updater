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
Object.defineProperty(exports, "__esModule", { value: true });
const oura_ring_api_1 = require("./oura-ring-api");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const ouraApi = new oura_ring_api_1.OuraRingApiClass();
        ouraApi
            .getSleepSummary()
            .then((response) => {
            console.log(response.data);
        })
            .catch((error) => {
            console.error(error);
        });
    });
}
main().catch((error) => console.error(error));
