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
exports.validateFileName = exports.validateWidth = exports.validateHieght = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const validateHieght = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const hieght = req.query.hieght;
    if (!hieght) {
        return res.status(400).send('Hieght is a required query parameter!');
    }
    else if (isNaN(hieght)) {
        return res.status(400).send('Hieght must be a valid number!');
    }
    else if (hieght <= 0) {
        return res.status(400).send('Hieght must be a number > 0 !');
    }
    else {
        return next();
    }
});
exports.validateHieght = validateHieght;
const validateWidth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const width = req.query.width;
    if (!width) {
        return res.status(400).send('width is a required query parameter!');
    }
    else if (isNaN(width)) {
        return res.status(400).send('width must be a valid number!');
    }
    else if (width <= 0) {
        return res.status(400).send('width must be a number > 0 !');
    }
    else {
        return next();
    }
});
exports.validateWidth = validateWidth;
const validateFileName = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const imagePath = path_1.default.join(__dirname, '../../../Image-Processing-api/assets/full', `${req.query.fileName}.jpg`);
    const processedImageFileName = `${req.query.fileName}-${req.query.hieght}-${req.query.width}.jpg`;
    const processedImagePath = path_1.default.join(__dirname, '../../../Image-Processing-api/assets/thumb', processedImageFileName);
    if (!req.query.fileName) {
        return res.status(400).send('fileName is a required query parameter!');
    }
    else if (!fs_1.default.existsSync(imagePath)) {
        //image do not exists
        return res.status(404).send('Image file was not found!');
    }
    else if (fs_1.default.existsSync(processedImagePath)) {
        //image already proccesed
        return res
            .status(200)
            .send(`<img src="/thumb/${processedImageFileName}" />`);
    }
    else {
        // send to process
        next();
    }
});
exports.validateFileName = validateFileName;
