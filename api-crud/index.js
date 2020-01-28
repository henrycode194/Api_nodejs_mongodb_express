const morgan = require('morgan');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const productsRoutes = require('./routes/products')
//configuración para que se veo mejor lo q se presenta 
//setting

app.set('json spaces', 4);

//midelware 

//morgan muestra mensajes x terminal 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//routes 
//se utiliza '/products'  para usar localhost:3000/products, si no se haria desde la raz
app.use('/products',productsRoutes);
//static files 

//start server
app.listen(3000,() =>{
    console.log('server on port', 3000);
});