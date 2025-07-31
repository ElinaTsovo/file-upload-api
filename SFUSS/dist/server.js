"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dbConnection_1 = require("./configs/dbConnection");
const file_routes_1 = require("./routes/file.routes");
const app = (0, express_1.default)();
(0, dbConnection_1.conectBD)();
app.use(express_1.default.json());
app.use(`file`, express_1.default.static(path_1.default.join(__dirname, "upload")));
app.use('/api', file_routes_1.fileRouter);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
