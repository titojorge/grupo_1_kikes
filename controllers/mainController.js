const path = require('path');

const mainController = {
    home: (req, res) => {
        return res.render('home');
        //res.sendFile(path.join(__dirname, '../views/home.html'));
    },
    login: (req, res) => {
        return res.render('login');
        //res.sendFile(path.resolve(__dirname, '../views/login.html'));
    },
    productCart: (req, res) => {
        return res.render('productCart');
        //res.sendFile(path.resolve(__dirname, '../views/productCart.html'));
    },
    register: (req, res) => {
        return res.render('register');
        //res.sendFile(path.resolve(__dirname, '../views/register.html'));
    },
    new: (req, res) => {
        return res.render('new');
        //res.sendFile(path.join(__dirname, '../views/home.html'));
    }
}

module.exports = mainController;