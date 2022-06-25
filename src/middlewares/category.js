import { read, write } from '../utils/model.js'

const category = (req,res,{ userId }) => {
	try{
	if(!req.headers.token) throw 'token required'
	let categories = read('categories')
	let subcategories = read('subCategories')
	let product = read('products')
	if(userId) {
		let catData = category.filter( category => category.categoriesId == userId ) 
		return catData
	} else {
		for(let category of categories){
			let subcategory = subcategories.filter(res => res.categoriesId == category.categoriesId)
			subcategory = subcategory.filter(res => delete( res.categoriesId ))
			category.subCategories = subcategory
		}
		return category
	}
	}catch(err){
		res.status(401).json({ status: 401, message: err })
	}
}

const subCategory = (req,res, {catId}) => {
	try{
	if(!req.headers.token) throw 'not token'
	let subcategories = read('subCategories')
	let categories = read('categories')
	categories = categories.find(result => result.categoriesId == catId)
	let subcategory = subcategories.filter(result => result.categoriesId == categories.categoriesId)
	subcategories = subcategories.filter(result => delete( result.categoriesId ))
	categories.subCategories = subcategory
	return categories
	}catch(err){
		res.status(401).json({ status: 401, message: err })
	} 
}

export default {
    category,
	subCategory
}