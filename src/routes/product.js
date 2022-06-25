import express from 'express'

const router = express.Router()

import { productCreate } from '../controllers/product.js'
import { productQuery } from '../controllers/product.js'


router.route('/products')
    .post(productCreate)
    .get(productQuery)

export default router    