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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const utilities_1 = require("../utilities");
describe('Test utilities ', () => {
    const processedImagePath = path_1.default.join(__dirname, '../../assets/thumb', 'encenadaport-400-400.jpg');
    it('resizeImage funtion test should make a 400x400 size photo in thumb', () => __awaiter(void 0, void 0, void 0, function* () {
        const imagePath = path_1.default.join(__dirname, '../../assets/full', 'encenadaport.jpg');
        const hieght = 400;
        const width = 400;
        yield (0, utilities_1.resizeImage)(imagePath, processedImagePath, hieght, width);
        const fileExists = fs_1.default.existsSync(processedImagePath);
        expect(fileExists).toBeTruthy();
    }));
    afterEach(() => {
        //remove the created image for future re-tests
        fs_1.default.unlink(processedImagePath, (err) => {
            if (err)
                throw err;
            console.log(processedImagePath, ' was deleted');
        });
    });
});
