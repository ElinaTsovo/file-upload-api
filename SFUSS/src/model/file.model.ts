import { Schema, model } from "mongoose";
import { IUpload } from "../utils/interface";
import { v4 as uuidv4 } from "uuid";

const UploadSchema = new Schema<IUpload>(
    {
        _id:{
            type:String,
            default:uuidv4
        },
        filename:{
            type:String,
            required:true
        },
        originalname:{
            type:String,
            required:true
        },
        mimetype: {
            type:String,
        },
        size:{
           type: Number
        } ,
        uploadDate:{
            type:Date,
            default:Date.now()
        }
    },
    {timestamps:true}
)

export const File = model<IUpload>('file', UploadSchema);