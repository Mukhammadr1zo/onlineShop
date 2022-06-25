import model from '../middlewares/subCategory.js'
import { read, write } from '../utils/model.js'
import JWT from '../utils/jwt.js'

const subCategoryQuery = (req, res) => {
	try {
		res.status(200).json(model.subCategory(req,res,req.query))
	} catch (error) {
		console.log(error)
	}
}

const subCategoryParams = (req,res) => {
    try{
        res.status(200).json(model.subCateg(req,res,req.params))
    }catch(err){
        console.log(err);
    }
}


const subcategoryCreate = (req,res,next) => {
    try {
        let data = ''
        let {token} = req.headers
        if(!token) throw 'token required';
        let { userId } = JWT.verify(token)
        data = req.body
        if(userId){
            let subCategory = read('subCategories')
            let newSubCategories = {
                subCategoryId : subCategory.length ? subCategory[subCategory.length-1].subCategory_id +1 : 1,
                categoriesId: data.categories_id,
                subCategoriesName: data.subCategory_name
            }
        subCategory.push(newSubCategories)
        if(write('subCategories',subCategory)) res.status(201).json({ status: 201, message: 'sub_category created' })
        }
    }catch(err){
        res.status(401).json({ status: 401, message: err })	
    }
}

export {
    subcategoryCreate,
    subCategoryQuery,
    subCategoryParams
}