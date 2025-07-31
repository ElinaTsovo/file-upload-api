"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFile = void 0;
//import {File as MulterFile} from "multer"
const file_model_1 = require("../model/file.model");
class UploadFile {
    async createFileUpload(request, response) {
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
            const createFile = await file_model_1.File.create(fileData);
            return response.status(200).json({ data: createFile });
        }
        catch (error) {
            return response.status(500).json({ error: error });
        }
    }
    async getAllFiles(request, response) {
        try {
            const findFile = await file_model_1.File.find();
            return response.status(200).json({ Files: findFile });
        }
        catch (error) {
            return response.status(500).json({ error: error });
        }
    }
    async getFileByID(request, response) {
        const { _id } = request.params;
        try {
            if (!_id) {
                throw { status: 401, message: "No _ID provided", error: "No _ID provided" };
            }
            const findFile = await file_model_1.File.findOne({ _id });
            return response.status(200).json(findFile);
        }
        catch (error) {
            return response.status(500).json({ error: error });
        }
    }
}
exports.UploadFile = UploadFile;
