const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		//const products = getProducts();
		db.Product.findAll()
            .then(products => {
                res.render('./products/products', {products})
            })
	},
	// Detail - Detail from one product
	detail: (req, res) => {
		db.Product.findByPk(req.params.id)
		.then((product) => {
			res.render('./products/detail', { productFound: product });
		  });
	},
    productCart: (req, res) => {
        return res.render('productCart');
    },
    new: (req, res) => {
		db.CategoryProduct.findAll()
		.then( categorias => {
			return res.render('./products/new', { categorias });
		})
    },
	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	crud: (req, res) => {
		res.render('./products/crud.ejs')
	},
	store: (req, res) => {
		const form = req.body;
		const nameFile = req.file.filename;
		db.Product.create({
			nombre: form.name,
            price: form.price,
			discount: form.discount,
			category_producto_id: form.category_producto_id,
			description: form.description,
			image: nameFile,
			type_category: form.type_category,
			stock: form.stock,
			fecha_creacion: new Date().toLocaleDateString(),
			fecha_modificacion: new Date().toLocaleDateString()
		  }).then((newProduct) => {
			console.log(newProduct);
			res.redirect("/products/list");
		  });
	},
	edit: (req, res) => {
		let promesaCategoria = db.CategoryProduct.findAll()
		let promesaProductFound = db.Product.findByPk(req.params.id)

		Promise.all([promesaCategoria,promesaProductFound])
		.then(function ([categorias, product]) {
			res.render('./products/edit-product', { productFound: product, categorias });
		  });
	},
	// Update - Method to update
	update: (req, res) => {
		form = req.body;
		nameFile = req.file.filename;
		db.Product.update(
			{
				nombre: form.name,
				price: form.price,
				discount: form.discount,
				category_producto_id: form.category_producto_id,
				description: form.description,
				image: nameFile,
				type_category: form.type_category,
				stock: form.stock,
				fecha_modificacion: new Date().toLocaleDateString()
			},
			{
			  where: {
				id: req.params.id,
			  },
			}
		  ).then(() => {
			res.redirect('/products/list');
		  });
	},
	delete: function (req, res) {
		db.Product.findByPk(req.params.id).then((product) => {
		  res.render("./products/delete.ejs", { product });
		});
	  },
	// Delete - Delete one product from DB
	destroy : (req, res) => {
		db.Product.destroy({
			where: {
			  id: req.params.id,
			},
		  })
		  .then(() => {
			res.redirect('/products/list');
		  })
		  .catch( error => console.log(error));
	}
};

module.exports = controller;