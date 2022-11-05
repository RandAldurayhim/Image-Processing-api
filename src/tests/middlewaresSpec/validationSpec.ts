import app from '../../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Test src/middlewares/validation.ts endpints /api/images', () => {
  describe('Hieght tests:', () => {
    it('Get /api/images endpoint should return 400 Hieght is a required', async () => {
      const response = await request.get('/api/images');
      expect(response.status).toBe(400);
      expect(response.text).toBe(`Hieght is a required query parameter!`);
    });
    it('Get /api/images?hieght=x endpoint should return 400 Hieght must be a valid number!', async () => {
      const response = await request.get('/api/images?hieght=x');
      expect(response.status).toBe(400);
      expect(response.text).toBe(`Hieght must be a valid number!`);
    });
    it('Get /api/images?hieght=-3 endpoint should return 400 Hieght must be a number > 0 !', async () => {
      const response = await request.get('/api/images?hieght=-3');
      expect(response.status).toBe(400);
      expect(response.text).toBe(`Hieght must be a number > 0 !`);
    });
  });
  describe('width tests:', () => {
    it('Get /api/images?hieght=3  endpoint should return 400 width is a required', async () => {
      const response = await request.get('/api/images?hieght=3');
      expect(response.status).toBe(400);
      expect(response.text).toBe(`width is a required query parameter!`);
    });
    it('Get /api/images?hieght=3&width=x endpoint should return 400 width must be a valid number!', async () => {
      const response = await request.get('/api/images?hieght=3&width=x');
      expect(response.status).toBe(400);
      expect(response.text).toBe(`width must be a valid number!`);
    });
    it('Get /api/images?hieght=3&width=-3 endpoint should return 400 width must be a number > 0 !', async () => {
      const response = await request.get('/api/images?hieght=3&width=-3');
      expect(response.status).toBe(400);
      expect(response.text).toBe(`width must be a number > 0 !`);
    });

    describe('fileName tests:', () => {
      it('Get /api/images?hieght=3&width=3 endpoint should return 400 fileName is a required query parameter!', async () => {
        const response = await request.get('/api/images?hieght=3&width=3');
        expect(response.status).toBe(400);
        expect(response.text).toBe(`fileName is a required query parameter!`);
      });
      it('Get /api/images?hieght=3&width=3&fileName=x endpoint should return 404 Image file was not found!', async () => {
        const response = await request.get(
          '/api/images?hieght=3&width=3&fileName=x'
        );
        expect(response.status).toBe(404);
        expect(response.text).toBe(`Image file was not found!`);
      });
      it('Get /api/images?hieght=123&width=123&fileName=encenadaport endpoint should return 200 proccessed image', async () => {
        const response = await request.get(
          '/api/images?hieght=123&width=123&fileName=encenadaport'
        );
        expect(response.status).toBe(200);
        expect(response.text).toBe(
          `<img src="/thumb/encenadaport-123-123.jpg" />`
        );
      });
    });
  });
});
