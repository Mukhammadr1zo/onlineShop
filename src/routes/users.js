import express from 'express'
import login from '../controllers/admin.js'
import loginVal from '../middlewares/loginVal.js' 

const router = express.Router()

router
.route('/login')
    .post(loginVal, login)    

export default router