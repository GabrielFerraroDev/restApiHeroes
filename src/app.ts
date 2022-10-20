import express from 'express';
import router from './router';
import { appLogger, errorLogger } from './logger';
import cors from 'cors';

const app = express();

app.disable('etag');
app.use(cors());
app.use(appLogger);
app.use(errorLogger);
app.use(express.json());

app.use(router);

export default app;
