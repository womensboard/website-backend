import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import imagesRouter from './routes/images-routes';
import authRouter from './routes/auth-routes';
import newsRouter from './routes/news-routes';
import eventsRouter from './routes/events-routes';

import { PORT } from 'config';

const app = express();
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => res.send('Connected'));

app.use('/api/images', imagesRouter);
app.use('/api/auth', authRouter);
app.use('/api/news', newsRouter);
app.use('/api/events', eventsRouter);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
