const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

function getProducts(){
	const productsFilePath = path.join(__dirname, '../data/products.json');
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products;
}
function addProduct(product){
    products.push(product);
    const productsString = JSON.stringify(products, null,4);
    fs.writeFileSync(path.join(__dirname, '../data/products.json'), productsString);
}
function  updateProducts(){
    const productsString = JSON.stringify(products, null,4)
    fs.writeFileSync(path.join(__dirname, '../data/products.json'), productsString);
}
function deleteProducts(productsNuevos){
	const productsString = JSON.stringify(productsNuevos, null,4)
    fs.writeFileSync(path.join(__dirname, '../data/products.json'), productsString);
}


const controller = {
	// Root - Show all products
	index: (req, res) => {
		const products = getProducts();
		res.render('./products/products', {products : products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const idProduct = req.params.id;
		const productFound = products.filter( elem => elem.id == idProduct)
        //return res.render('./products/detail')
		res.render('./products/detail', {productFound: productFound[0]})
	},

    productCart: (req, res) => {
        return res.render('productCart');
        //res.sendFile(path.resolve(__dirname, '../views/productCart.html'));
    },
    new: (req, res) => {
        return res.render('./products/new');
        //res.sendFile(path.join(__dirname, '../views/home.html'));
    },

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const form = req.body;
		const nameFile = req.file.filename;
		const pos = products.length-1;

        const newProduct = {
            id: products[pos].id + 1 ,
            name: form.name,
            discount: form.discount,
            price: form.price,
			category: form.category,
			description: form.description,
			image: nameFile,
			type_category: form.type_category
        }

        addProduct(newProduct);
        res.redirect('/products/list');
	},

	// Update - Form to edit
	edit: (req, res) => {
		const idProduct = req.params.id
        //busco el producto
        const productFound = products.find(function(elem){
            return elem.id == idProduct
        })
        res.render('./products/edit-product', { productFound: productFound });
	},
	// Update - Method to update
	update: (req, res) => {
		const id = req.params.id
        const form = req.body;
		const nameFile = req.file.filename;

        //busco el producto
        const productFound = products.find(function(elem){
            return elem.id == id
        })
        
        //modifico el producto en el listado correspondiente
        productFound.name = form.name;
        productFound.description = form.description;
        productFound.price = form.price;
		productFound.discount = form.discount;
		productFound.category = form.category;
		productFound.image = nameFile;
		productFound.type_category = form.type_category;

        //actualizar el json
        updateProducts()

        res.redirect('/products/list');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const idProduct = req.params.id;

		const productsNuevos = products.filter( elem => elem.id != idProduct );

		deleteProducts(productsNuevos);

		res.redirect('/products/list');
	}
};

module.exports = controller;