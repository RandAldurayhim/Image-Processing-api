import app from '../../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Test src/middlewares/sharp.ts endpints /api/images', () => {
  describe('fileName tests:', () => {
    it('Get /api/images?hieght=100&width=100&fileName=encenadaport endpoint should return 200 new resized image', async () => {
      const response = await request.get(
        '/api/images?hieght=100&width=100&fileName=encenadaport'
      );
      expect(response.status).toBe(200);
      expect(response.text).toBe(
        `<img src= "/thumb/encenadaport-100-100.jpg" />`
      );
    });
  });
});
