import model from '../middlewares/category.js'
import { read, write } from '../utils/model.js'
import JWT from '../utils/jwt.js'


const categoryQuery = (req, res) => {
	try {
		res.status(200).json( model.category(req,res,req.query) )
	} catch (error) {
		console.log(error)
	}
}

const categoryParams = (req, res) => {
	try {
		res.status(200).json( model.subCategory(req,res,req.params) )
	} catch (error) {
		console.log(error)
	}
}


const categoryCreate = (req,res,next) => {
    try {
        let data = ''
        let {token} = req.headers

        if(!token) throw 'token required';
        let { userId } = JWT.verify(token)
        data = req.body
        
        if(userId){
            let category = read('categories')
            let newCategories = {
                categoriesId : category.length ? category[category.length-1].category_id +1 : 1,
                categoriesName: data.category_name
            }
        category.push(newCategories)
        if(write('categories',category)) res.status(201).json({ status: 201, message: 'category created' })
        }
    }catch(err){
        res.status(401).json({ status: 401, message: err })	
    }
}

export {
    categoryQuery,
    categoryCreate,
    categoryParams
}