import express from 'express'
import { getTest, postTest } from './cats.service'

const router = express.Router()

router.get("/cats", getTest)

router.post('/cats',postTest)



export default router;