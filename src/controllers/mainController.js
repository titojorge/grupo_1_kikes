const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    home: (req, res) => {
        return res.render('home', { products : products});
        //res.sendFile(path.join(__dirname, '../views/home.html'));
    },
    login: (req, res) => {
        return res.render('./users/login');
        //res.sendFile(path.resolve(__dirname, '../views/login.html'));
    },
    register: (req, res) => {
        return res.render('./users/register');
        //res.sendFile(path.resolve(__dirname, '../views/register.html'));
    },
}

module.exports = mainController;