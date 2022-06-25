import express from 'express'

const router = express.Router()
import { categoryCreate, categoryParams } from '../controllers/category.js'
import { categoryQuery } from '../controllers/category.js'



router.route('/categories/:catId')
    .get( categoryParams )    

router.route('/categories')
    .post(categoryCreate)
        
router.route('/categories')
    .get( categoryQuery )


export default router    