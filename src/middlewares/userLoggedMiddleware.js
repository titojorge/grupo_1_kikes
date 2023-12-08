const db = require("../database/models");

function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  let emailInCookie = req.cookies.userEmail;

  if(emailInCookie != undefined && !req.session.userLogged) {
    db.Usuario.findAll({
      where: {
        email: emailInCookie,
      },
    }).then((userFromCookie) => {
      if (userFromCookie) {
        req.session.userLogged = userFromCookie;
      }
    });
  }
  console.log('Hola');
  console.log(req.session.userLogged);
  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
    console.log(res.locals.userLogged);
  }

  next();
}

module.exports = userLoggedMiddleware;
