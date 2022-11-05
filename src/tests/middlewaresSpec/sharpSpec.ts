import app from '../../index';
import supertest from 'supertest';
import fs from 'fs';
import path from 'path';

const request = supertest(app);

describe('Test src/middlewares/sharp.ts endpints /api/images', () => {
  describe('fileName tests:', () => {
    it('Get /api/images?hieght=100&width=100&fileName=encenadaport endpoint should return 200 new resized image', async () => {
      const generatedImagePath = path.join(
        __dirname,
        '../../../assets/thumb',
        'encenadaport-100-100.jpg'
      );
      console.log(generatedImagePath);
      const response = await request.get(
        '/api/images?hieght=100&width=100&fileName=encenadaport'
      );
      expect(response.status).toBe(200);
      expect(response.text).toBe(
        `<img src= "/thumb/encenadaport-100-100.jpg" />`
      );
      //remove the genrated photo to allow re-test

      fs.unlink(generatedImagePath, (err) => {
        if (err) throw err;
        console.log(generatedImagePath, ' was deleted');
      });
    });
  });
});
