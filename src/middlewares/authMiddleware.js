function authMiddleware(req, res, next) {
	if (!req.session.userLogged) {
		return res.render('./users/login', { errors : ''});
	}
	next();
}

module.exports = authMiddleware;