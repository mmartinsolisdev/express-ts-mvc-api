"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const member_1 = require("../models/member");
const getMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { "_id": req.params.id };
    let member = yield member_1.Member.findOne(query).exec();
    if (member) {
        return res.status(200).json({ member: member });
    }
    return res.status(404).json({ message: 'User not found' });
});
const getMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let members = yield member_1.Member.find().exec();
    //console.log(members)
    if (members) {
        return res.status(200).json({ members: members });
    }
    return res.status(404).json({ message: 'User not found' });
});
const saveMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let member = new member_1.Member({
        name: req.body.name,
        lastname: req.body.lastname,
        birthdate: req.body.birthdate,
        sex: req.body.sex,
        comments: req.body.comments,
        email: req.body.email,
        cellphone: req.body.cellphone,
        homephone: req.body.homephone,
        address: req.body.address,
        status: req.body.status,
        picture: req.body.picture,
        emergencyContact: req.body.emergencyContact,
        relationship: req.body.relationship,
        contactEmail: req.body.contactEmail,
        contactCellPhone: req.body.contactCellPhone,
        contactHomePhone: req.body.contactHomePhone,
        medicalInformation: req.body.medicalInformation
    });
    let newMember = yield member.save();
    //console.log(newMember)
    if (newMember) {
        return res.status(200).json({ member: 'Member created', newMember });
    }
    return res.status(500).json({ message: 'Error to create Member' });
});
const updateMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { '_id': req.params.id };
    const update = req.body;
    try {
        let data = yield member_1.Member.findOneAndUpdate(query, update, { new: true });
        if (data !== null) {
            return res.status(200).json({ member: 'Member information updated', data });
        }
        return res.status(404).json({ message: 'Member not found' });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ Error: 'unexpected error' });
    }
});
exports.default = {
    getMember,
    getMembers,
    saveMember,
    updateMember
};
