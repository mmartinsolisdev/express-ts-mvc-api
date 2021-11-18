"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = __importDefault(require("express"));
const member_1 = __importDefault(require("../controllers/member"));
const router = express_1.default.Router();
exports.Routes = router;
// Rutas Members
router.get('/getMembers', member_1.default.getMembers);
router.get('/getMember/:id', member_1.default.getMember);
router.post('/saveMember', member_1.default.saveMember);
router.put('/updateMember/:id', member_1.default.updateMember);
