import JWT from 'jsonwebtoken'
const secret = "secret"

export default {
	sign: (payload) => JWT.sign(payload, secret),
	verify: (token) => JWT.verify(token, secret),
}