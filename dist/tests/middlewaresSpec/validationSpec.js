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
const request = (0, supertest_1.default)(index_1.default);
describe('Test src/middlewares/validation.ts endpints /api/images', () => {
    describe('Hieght tests:', () => {
        it('Get /api/images endpoint should return 400 Hieght is a required', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/api/images');
            expect(response.status).toBe(400);
            expect(response.text).toBe(`Hieght is a required query parameter!`);
        }));
        it('Get /api/images?hieght=x endpoint should return 400 Hieght must be a valid number!', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/api/images?hieght=x');
            expect(response.status).toBe(400);
            expect(response.text).toBe(`Hieght must be a valid number!`);
        }));
        it('Get /api/images?hieght=-3 endpoint should return 400 Hieght must be a number > 0 !', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/api/images?hieght=-3');
            expect(response.status).toBe(400);
            expect(response.text).toBe(`Hieght must be a number > 0 !`);
        }));
    });
    describe('width tests:', () => {
        it('Get /api/images?hieght=3  endpoint should return 400 width is a required', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/api/images?hieght=3');
            expect(response.status).toBe(400);
            expect(response.text).toBe(`width is a required query parameter!`);
        }));
        it('Get /api/images?hieght=3&width=x endpoint should return 400 width must be a valid number!', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/api/images?hieght=3&width=x');
            expect(response.status).toBe(400);
            expect(response.text).toBe(`width must be a valid number!`);
        }));
        it('Get /api/images?hieght=3&width=-3 endpoint should return 400 width must be a number > 0 !', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/api/images?hieght=3&width=-3');
            expect(response.status).toBe(400);
            expect(response.text).toBe(`width must be a number > 0 !`);
        }));
        describe('fileName tests:', () => {
            it('Get /api/images?hieght=3&width=3 endpoint should return 400 fileName is a required query parameter!', () => __awaiter(void 0, void 0, void 0, function* () {
                const response = yield request.get('/api/images?hieght=3&width=3');
                expect(response.status).toBe(400);
                expect(response.text).toBe(`fileName is a required query parameter!`);
            }));
            it('Get /api/images?hieght=3&width=3&fileName=x endpoint should return 404 Image file was not found!', () => __awaiter(void 0, void 0, void 0, function* () {
                const response = yield request.get('/api/images?hieght=3&width=3&fileName=x');
                expect(response.status).toBe(404);
                expect(response.text).toBe(`Image file was not found!`);
            }));
            it('Get /api/images?hieght=123&width=123&fileName=encenadaport endpoint should return 200 proccessed image', () => __awaiter(void 0, void 0, void 0, function* () {
                const response = yield request.get('/api/images?hieght=123&width=123&fileName=encenadaport');
                expect(response.status).toBe(200);
                expect(response.text).toBe(`<img src="/thumb/encenadaport-123-123.jpg" />`);
            }));
        });
    });
});
