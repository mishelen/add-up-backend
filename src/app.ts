import express, { Application } from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const createApp = async (): Promise<Application> => {
  const app = express();
  app.use(bodyParser.json());
  app.use(await routes());
  return app;
};

export default createApp;
