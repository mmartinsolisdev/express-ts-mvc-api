"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const mongoose_1 = __importDefault(require("./db/mongoose"));
const server_1 = __importDefault(require("./server"));
dotenv.config();
if (!process.env.PORT) {
    console.log(`Error to get ports`);
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);
//Load app only if db is alive
mongoose_1.default.connectMongoDB(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS).
    then(() => {
    //Start Express Server
    server_1.default.startServer(PORT);
}).catch((error) => {
    console.log("Cannot connect to database");
});
