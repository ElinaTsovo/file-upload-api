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
exports.UploadFile = void 0;
//import {File as MulterFile} from "multer"
const file_model_1 = require("../model/file.model");
class UploadFile {
    createFileUpload(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!request.file) {
                    return response.status(400).json({ message: "Nenhum ficheiro enviado." });
                }
                const fileData = ({
                    _id: request.file.filename.split('.')[0],
                    filename: request.file.filename,
                    originalname: request.file.originalname,
                    mimetype: request.file.mimetype,
                    size: request.file.size,
                });
                const createFile = yield file_model_1.File.create(fileData);
                return response.status(200).json({ data: createFile });
            }
            catch (error) {
                return response.status(500).json({ error: error });
            }
        });
    }
    getAllFiles(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findFile = yield file_model_1.File.find();
                return response.status(200).json({ Files: findFile });
            }
            catch (error) {
                return response.status(500).json({ error: error });
            }
        });
    }
    getFileByID(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = request.params;
            try {
                if (!_id) {
                    throw { status: 401, message: "No _ID provided", error: "No _ID provided" };
                }
                const findFile = yield file_model_1.File.findOne({ _id });
                return response.status(200).json(findFile);
            }
            catch (error) {
                return response.status(500).json({ error: error });
            }
        });
    }
}
exports.UploadFile = UploadFile;
