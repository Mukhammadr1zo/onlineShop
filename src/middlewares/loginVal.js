import { read } from '../utils/model.js'
import sha256 from 'sha256';

export default function (req, res, next) {
	try {
		let users = read('users')
		let user = users.find( user => user.username == req.body.username && user.password == sha256(req.body.password) )
		if(user) throw 'Wrong username or password!'
		
		req.user = user
		next()
	} catch(error) {
		res.status(401).json({ status: 401, message: error })
	}
}