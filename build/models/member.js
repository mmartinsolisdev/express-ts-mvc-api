"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const mongoose_1 = require("mongoose");
const MemberSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    birthdate: String,
    sex: String,
    comments: String,
    email: String,
    cellphone: Number,
    homephone: Number,
    address: String,
    status: Boolean,
    picture: String,
    emergencyContact: String,
    relationship: String,
    contactEmail: String,
    contactCellPhone: Number,
    contactHomePhone: Number,
    medicalInformation: String,
    age: Number
});
//export const Member: Model<IMember> = model('Members', MemberSchema)
exports.Member = mongoose_1.model('Members', MemberSchema);
