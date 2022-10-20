import express from 'express';
import * as hero from './services/heroes';
const router = express.Router();

router
  .get('/', hero.list)
  .get('/hero/:id', hero.get)
  .post('/hero', hero.insert)
  .put('/hero/:id', hero.update)
  .delete('/hero/:id', hero.del);

export default router;
