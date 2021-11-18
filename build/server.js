"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes/routes");
function startServer(PORT) {
    const app = express_1.default();
    app.use(cors_1.default());
    app.use(express_1.default.json());
    const server = app.listen(PORT, () => {
        console.log("⚡️[server]: Server is running at http://localhost:" + PORT);
    });
    // Send message for default URL
    app.use('/api', routes_1.Routes);
}
exports.default = {
    startServer
};
