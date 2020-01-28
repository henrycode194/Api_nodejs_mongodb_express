// incluye los puertos que utiliza, y todas las configuraciones


//utilizamos body-parser para entender que lo recibe es un json
import bodyParser from 'body-parser';
module.exports = app => {
    //fijamos en el puerto que me da el propio servidor o el puerto 3000
    app.set('port', process.env.PORT || 3000);
    //darle formato al json 
    app.set('json spaces',4);
    app.use(bodyParser.json());
    //interpretar lo q el navegador envía
    //extended aspecto
    app.use(bodyParser.urlencoded({extended:false}));
};