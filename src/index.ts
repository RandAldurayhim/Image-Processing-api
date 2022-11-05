import express from 'express';
import routes from './routes';

const app = express();
const port = 3000;
app.use(express.static('assets'));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is listening on localhost:${port} !`);
});
export default app;
