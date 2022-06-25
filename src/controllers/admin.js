import JWT from '../utils/jwt.js'


const login = (req, res) => {
	
	res.status(200).json({
		status: 200,
		message: "you logged in!",
		token: JWT.sign({ userId: req.body.user_id })
	})
}

export default login