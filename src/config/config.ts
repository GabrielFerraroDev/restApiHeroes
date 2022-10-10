import database from '../database';
import * as dotenv from 'dotenv';

database.init;
dotenv.config();

export const config = {
  env: (process.env.NODE_ENV as String) || 'development',
  dbFilename: process.env.DB_FILENAME || '',
  dbTestFilename: process.env.DB_TEST_FILENAME || '',
  port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 5000,
};
