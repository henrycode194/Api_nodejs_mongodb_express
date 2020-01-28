const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('recivido');
});



app.post('/',(req,res)=>{
    res.send('guardando....');
});

app.delete('/',(req,res)=>{
    res.send('borrando....');
});

app.put('/',(req,res)=>{
    res.send('actualizando....');
});

app.get('/random/:numeroInicial/:numeroFinal',(req,res) => {
    console.log("numero inicial:",req.params.numeroInicial);
    console.log("numero final:",req.params.numeroFinal);

    const minima = parseInt(req.params.numeroInicial);
    const maxima = parseInt(req.params.numeroFinal);
    if (isNaN(minima)||isNaN(maxima)){
        res.status(404);
        res.json({"error":"Bad request"});
        return;
    }
    const resultado = Math.floor( Math.random() * (maxima-minima) + minima)
    //res.json(resultado);
    //res.send("El resulltado entre", minima,"y ", maxima)
    res.json({"resultado ":resultado});
    console.log(resultado);  
    //res.send('recivido random');
})

app.listen(3000, () => {
    console.log('server on port 300');
})
