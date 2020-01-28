const express =require('express');
const router = express.Router();
//import el archivo de db 
//const products = require('../db.json')
//console.log(products.productos)
// solo quiero productos
//otra forma de hacerlo es 


const {getProducts,postProducts,updateProduct,deleteProduct} = require('../controllers/products')

//router.get('/', (req, res) => {});

router.route('/')
    .get(getProducts)
    .post(postProducts)

router.route('/:id')
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router;