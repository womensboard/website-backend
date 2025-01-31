import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import imagesRouter from './routes/images-routes';
import authRouter from './routes/auth-routes';
import newsRouter from './routes/news-routes';
import eventsRouter from './routes/events-routes';
import trusteeRouter from './routes/trustee-route';
import governingCouncilRouter from './routes/governing-council-route';
import projectRouter from './routes/project';
import aboutPageRouter from './routes/about-page';
import nigerianYouthVoiceRouter from './routes/nigerian-youth-voices';
import valueMetricsRouter from './routes/value-metrics';
import unCollaborationRouter from './routes/un-collaborations';
import heroSectionRouter from './routes/hero-section-routes';
import partnersRouter from './routes/partners-routes';
import managementRouter from './routes/management-route';
import aboutFeatureRouter from './routes/about-feature';
import contactRouter from './routes/contacts-route';
import collaborationSectionRouter from './routes/un-collaboration-section-route';
import ourTeamRouter from './routes/our-team-route';
import strategyRouter from './routes/strategy-route';
import galleryRouter from './routes/gallery-routes';
import activitiesRouter from './routes/activities-route';
import supportersRouter from './routes/supporters-routes';

const app = express();
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => res.send('Connected'));

app.use('/api/images', imagesRouter);
app.use('/api/auth', authRouter);
app.use('/api/news', newsRouter);
app.use('/api/events', eventsRouter);
app.use('/api/trustees', trusteeRouter);
app.use('/api/governing-council', governingCouncilRouter);
app.use('/api/projects', projectRouter);
app.use('/api/about-hero', aboutPageRouter);
app.use('/api/nigerian-youth-voices', nigerianYouthVoiceRouter);
app.use('/api/value-metrics', valueMetricsRouter);
app.use('/api/un-collaborations', unCollaborationRouter);
app.use('/api/hero-section', heroSectionRouter);
app.use('/api/partners', partnersRouter);
app.use('/api/management-team', managementRouter);
app.use('/api/about-feature', aboutFeatureRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/collaboration-section', collaborationSectionRouter);
app.use('/api/our-team', ourTeamRouter);
app.use('/api/strategy', strategyRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/supporters', supportersRouter);

export { app };
