import { Router } from "express";
import { UploadFile } from "../controllers/file.controller";
import { uploding } from "../middleware/upload";

export const fileRouter = Router();
const uploadfile = new UploadFile();

fileRouter.post('/post', uploding.single('file'), uploadfile.createFileUpload.bind(uploadfile));
fileRouter.get('/get',uploding.single('file'), uploadfile.getAllFiles.bind(uploadfile));
fileRouter.get('/get-by-id/:_id', uploding.single('file'), uploadfile.getFileByID.bind(uploadfile))



