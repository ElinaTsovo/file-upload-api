import dotenv from "dotenv";
dotenv.config()
import express from "express";
import path from "path";
import { conectBD } from "./configs/dbConnection";
import { fileRouter } from "./routes/file.routes";


const app = express()

conectBD();
app.use(express.json())
app.use(`file`,express.static(path.join(__dirname, "upload")))
app.use('/api',fileRouter)

const port = process.env.PORT!

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})