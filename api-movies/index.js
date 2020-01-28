//para utilizar las ultimas versiones, se usa import
//para utilizar import se debe modificar, json del package

import express from 'express';
//Gracias a consig
import consig from 'consign'; 

const app = express();

consig()
    .include('libs/middlewares.js')
    .then('routes')
    .include('libs/boots.js')
    .into(app);



