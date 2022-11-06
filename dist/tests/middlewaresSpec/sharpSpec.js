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
const index_1 = __importDefault(require("../../index"));
const supertest_1 = __importDefault(require("supertest"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const request = (0, supertest_1.default)(index_1.default);
describe('Test src/middlewares/sharp.ts endpints /api/images', () => {
    describe('fileName tests:', () => {
        const generatedImagePath = path_1.default.join(__dirname, '../../../assets/thumb', 'encenadaport-100-100.jpg');
        it('Get /api/images?hieght=100&width=100&fileName=encenadaport endpoint should return 200 new resized image', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/api/images?hieght=100&width=100&fileName=encenadaport');
            expect(response.status).toBe(200);
            expect(response.text).toBe(`<img src= "/thumb/encenadaport-100-100.jpg" />`);
        }));
        afterEach(() => {
            //remove the genrated photo to allow re-test
            fs_1.default.unlink(generatedImagePath, (err) => {
                if (err)
                    throw err;
                console.log(generatedImagePath, ' was deleted');
            });
        });
    });
});
