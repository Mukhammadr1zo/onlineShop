import express from 'express'

const router = express.Router()
import { subcategoryCreate } from '../controllers/subCategory.js'
import { subCategoryQuery } from '../controllers/subCategory.js'
import { subCategoryParams } from '../controllers/subCategory.js'

router.route('/subcategories/:subCat')  
    .get( subCategoryParams )

router.route('/subcategories')
    .post(subcategoryCreate)
    .get(subCategoryQuery)

export default router       