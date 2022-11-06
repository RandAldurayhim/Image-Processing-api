import path from 'path';
import fs from 'fs';
import { resizeImage } from '../utilities';
describe('Test utilities ', () => {
  const processedImagePath = path.join(
    __dirname,
    '../../assets/thumb',
    'encenadaport-400-400.jpg'
  );
  it('resizeImage funtion test should make a 400x400 size photo in thumb', async () => {
    const imagePath = path.join(
      __dirname,
      '../../assets/full',
      'encenadaport.jpg'
    );
    const hieght = 400;
    const width = 400;

    await resizeImage(imagePath, processedImagePath, hieght, width);
    const fileExists = fs.existsSync(processedImagePath);
    expect(fileExists).toBeTruthy();
  });
  afterEach(() => {
    //remove the created image for future re-tests
    fs.unlink(processedImagePath, (err) => {
      if (err) throw err;
      console.log(processedImagePath, ' was deleted');
    });
  });
});
