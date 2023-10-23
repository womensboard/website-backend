import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import imagesRouter from './routes/images-routes';
import authRouter from './routes/auth-routes';
import newsRouter from './routes/news-routes';
import eventsRouter from './routes/events-routes';
import trusteeRouter from './routes/trustee-route';
import boardMemberRouter from './routes/board-member-route';
import projectRouter from './routes/project';
import aboutPageRouter from './routes/about-page';
import nigerianYouthVoiceRouter from './routes/nigerian-youth-voices';
import valueMetricsRouter from './routes/value-metrics';
import unCollaborationRouter from './routes/un-collaborations';
import heroSectionRouter from './routes/hero-section-routes';
import partnersRouter from './routes/partners-routes';
import aboutFeatureRouter from './routes/about-feature';

import { PORT } from 'config';

const app = express();
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => res.send('Connected'));

app.use('/api/images', imagesRouter);
app.use('/api/auth', authRouter);
app.use('/api/news', newsRouter);
app.use('/api/events', eventsRouter);
app.use('/api/trustees', trusteeRouter);
app.use('/api/board-members', boardMemberRouter);
app.use('/api/projects', projectRouter);
app.use('/api/about-page', aboutPageRouter);
app.use('/api/nigerian-youth-voices', nigerianYouthVoiceRouter);
app.use('/api/value-metrics', valueMetricsRouter);
app.use('/api/un-collaborations', unCollaborationRouter);
app.use('/api/hero-section', heroSectionRouter);
app.use('/api/partners', partnersRouter);
app.use('/api/about-feature', aboutFeatureRouter);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
