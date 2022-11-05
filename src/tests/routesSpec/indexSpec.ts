import app from '../../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Test routes/index default endpints /', () => {
  it('Get / endpoint should return 404 Page is not Found', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(404);
    expect(response.text).toBe(`Page is not Found`);
  });
});
