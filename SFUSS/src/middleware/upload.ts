import multer from "multer";
import {v4 as uuidv4} from "uuid";
import path from "path";



const storage = multer.diskStorage(
    {
        destination: 'uplads/',
        filename: (request, file, cb) =>{
            const ext = path.extname(file.originalname);
            cb(null, uuidv4() + ext)
        }
    }
);


export const uploding = multer(
    {
        storage,
        limits:{
            fileSize:5 * 1024 * 1014
        }
    }
);