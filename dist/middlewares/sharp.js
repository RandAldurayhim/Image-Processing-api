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
exports.resizeImageAndSave = void 0;
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const resizeImageAndSave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imagePath = path_1.default.join(__dirname, '../../../Image-Processing-api/assets/full', `${req.query.fileName}.jpg`);
    const processedImageFileName = `${req.query.fileName}-${req.query.hieght}-${req.query.width}.jpg`;
    const processedImagePath = path_1.default.join(__dirname, '../../../Image-Processing-api/assets/thumb', processedImageFileName);
    const hieght = parseInt(req.query.hieght);
    const width = parseInt(req.query.width);
    yield (0, sharp_1.default)(imagePath).resize(hieght, width).toFile(processedImagePath);
    return res
        .status(200)
        .send(`<img src= "/thumb/${processedImageFileName}" />`);
});
exports.resizeImageAndSave = resizeImageAndSave;
