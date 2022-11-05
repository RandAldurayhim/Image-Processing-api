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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validation_1 = require("../middlewares/validation");
const sharp_1 = require("../middlewares/sharp");
const routes = express_1.default.Router();
routes.get('/api/images', validation_1.validateHieght, validation_1.validateWidth, validation_1.validateFileName, sharp_1.resizeImageAndSave);
routes.get('*', (res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(404).send(`Page is not Found`);
}));
exports.default = routes;
