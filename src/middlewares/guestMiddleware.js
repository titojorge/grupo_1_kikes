function guestMiddleware(req, res, next) {
    console.log(req.session);
    if (req.session.id_usuario) {
        console.log(req.session.id_usuario);
        next()
    } else {
        res.render('./users/login')
    }
}

module.exports = guestMiddleware;