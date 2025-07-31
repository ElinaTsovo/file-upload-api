"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const UploadSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        default: uuid_1.v4
    },
    filename: {
        type: String,
        required: true
    },
    originalname: {
        type: String,
        required: true
    },
    mimetype: {
        type: String,
    },
    size: {
        type: Number
    },
    uploadDate: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true });
exports.File = (0, mongoose_1.model)('file', UploadSchema);
