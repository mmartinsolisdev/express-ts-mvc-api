"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Mongoose DB connection
function connectMongoDB(DB_NAME, DB_USER, DB_PASS) {
    let MONGO_URI = 'mongodb+srv://' + DB_USER + ':' + DB_PASS + '@cluster0.ca0jy.mongodb.net/' + DB_NAME + '?retryWrites=true&w=majority';
    return new Promise((resolve, reject) => {
        mongoose_1.default.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
            resolve(console.log('Connection to DB ' + DB_NAME + ' succesfully '));
        }, err => {
            reject(console.log('Connection error: ' + err));
        });
    });
}
exports.default = {
    connectMongoDB
};
