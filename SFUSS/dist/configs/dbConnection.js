"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectBD = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbURI = process.env.DB_URL;
const conectBD = async () => {
    try {
        await mongoose_1.default.connect(dbURI);
        console.log("DB Connected");
    }
    catch (error) {
        console.log("DB not connected");
    }
};
exports.conectBD = conectBD;
