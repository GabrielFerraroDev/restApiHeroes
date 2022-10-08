import express from 'express'
import * as hero from './services/heroes'
const router = express.Router()

router.get('/', hero.list)
router.get('/hero', hero.get)
router.post('/hero', hero.insert)
router.put('/hero/:id', hero.update)
router.delete('hero/:id', hero.del)

export default router
