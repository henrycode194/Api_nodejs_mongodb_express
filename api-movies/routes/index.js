module.exports = app => {
    //configurar la ruta inicial
    app.get('/', (req, res) =>{
        res.json({
            respose:"Api works"
        });
    });
};