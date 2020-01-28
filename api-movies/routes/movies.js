import mongojs, { ObjectID } from 'mongojs';
import { response } from 'express';
const db = mongojs('DataBaseMovies',['movies']);
module.exports = app => {

    app.get('/movies', (req, res) => {
        // no es sql y no hace falta estructurar los datos
        db.movies.find((err,movies) =>{
            res.json({movies});
        });
    });

    app.post('/movies', (req,res)=>{
        console.log(JSON.stringify(req.body));
        let newMovie = req.body;
        //agregar a mongo db 
        db.movies.insert(newMovie, (err, movies) => {
            //res.json({response}); // es lo mismo {response:response}
            res.json({movies});
        });
    }); 
    
    app.put('/movies/:id', (req, res) => {
        let updatedMovie = req.body;
        console.log(updatedMovie)
        db.movies.update({
          _id: mongojs.ObjectId(req.params.id)}, {$set:updatedMovie}, (err, response) => {
          res.json({response});
        })
    });

    app.delete('/movies/:id', (req, res) => {
        db.movies.remove({
          _id: mongojs.ObjectId(req.params.id)}, (err, response) => {
          res.json({response});
        })
    });

   // app.delete('/movies/:id', (req,res) => {
    //    db.movies.remove({_id:mongojs.ObjectId(req.param.id)})});
    
};