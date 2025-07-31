import { Request, Response } from "express";
//import {File as MulterFile} from "multer"
import { File } from "../model/file.model";





export class UploadFile{
    async createFileUpload(request:Request, response:Response): Promise<any>{
             
        try {
            
            if(!request.file){
                return response.status(400).json({ message: "Nenhum ficheiro enviado." });
            }
            
            const fileData = (
                {
                    _id: request.file.filename.split('.')[0], 
                    filename: request.file.filename,
                    originalname: request.file.originalname,
                    mimetype: request.file.mimetype,
                    size: request.file.size,
                    
                }
            )

            const createFile = await File.create(fileData);
            return response.status(200).json({data:createFile})
        } catch (error) {
            return response.status(500).json({error:error})
        }
    }

    async getAllFiles(request:Request, response:Response){
        try {
            const findFile = await File.find()
            return response.status(200).json({Files:findFile})
        } catch (error) {
            return response.status(500).json({error:error})
        }
    }

    async getFileByID(request:Request, response:Response){
        const{_id} = request.params
            try {
                if(!_id){
                    throw{status:401, message:"No _ID provided", error: "No _ID provided"}
                }

                const findFile = await File.findOne({_id})
                return response.status(200).json(findFile)
            } catch (error) {
                return response.status(500).json({error:error})
                
            }

    }
}