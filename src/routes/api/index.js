import express from 'express'
import blog from './blog'

const router = express.Router()

router.use('/blog', blog)

export default router