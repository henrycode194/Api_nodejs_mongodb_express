const {productos} = require('../db.json');
console.log(productos)
module.exports = {
    getProducts : (req,res) =>{
        res.json({products:productos})
    },
    postProducts : (req,res) => {
        const {name} = req.body;
    //name se puede pone name:name, pero para evitar repetir
        productos.push({
            name,
            id:productos.length
        }); 
        res.json({
            'success':true,
            'msg':'successfully added'
        });
    },

    updateProduct:(req,res) => {
        const {id} = req.params;
        const{name} = req.body;
        productos.forEach((producto,i) => {
            if (producto .id == Number(id)){
                producto.name = name;
                res.json({
                    'success':true,
                    'msg':'updated'
                });
            }
        });
    },

    deleteProduct:(req,res) =>{
        const {id} = req.params;
        productos.forEach((producto,i) => {
            if (producto.id == Number(id)){
                productos.splice(i,1);
                res.json({
                    'success':true,
                    'msg':'delete'
                });
            }
        });

    }
};