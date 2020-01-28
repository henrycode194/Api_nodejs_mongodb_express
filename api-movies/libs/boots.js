//bootear o inicializar mi servidor
module.exports = app => {
    app.listen( app.get('port'), () => {
        //saber el puerto con interpolación 
        // se usa comillas simple con el acento invertido `
        console.log(`server on ${app.get('port')}`);
    
    });
};