function guestMiddleware(req, res, next) {
    if (req.session.id_usuario) {
        next()
    } else {
        res.render('./users/login', { errors : ''})
    }
}

module.exports = guestMiddleware;