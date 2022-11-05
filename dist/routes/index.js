"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validation_1 = require("../middlewares/validation");
const sharp_1 = require("../middlewares/sharp");
const routes = express_1.default.Router();
routes.get('/api/images', validation_1.validateHieght, validation_1.validateWidth, validation_1.validateFileName, sharp_1.resizeImageAndSave);
routes.get('*', (req, res) => {
    return res.status(404).send('Page is not Found');
});
exports.default = routes;
