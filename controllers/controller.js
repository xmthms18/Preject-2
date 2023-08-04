let Exercisedb = require('../models/model');

// create and save new exercise
exports.createExercise = (req, res) => {
    console.log("req.body.name", req.body.name)
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }
    Exercisedb.create(req.body)
        .then(exercise => {
            res.redirect("/");
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });
}
// retrieve and return all exercises / retrive and return a single exercise

exports.find = (req, res) => {
    Exercisedb.find()
        .then(exercise => {
            res.send(exercise)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving exercises."
            })
        })
    }
// Update a exercise identified by the id in the request

exports.update = (req, res) => {
    console.log("req.body.name", req.body.name)
    // Check if req.body is an empty object
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({ message: "Content cannot be empty!" });
    }

    const id = req.params.id;
    Exercisedb.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
     .then(exercise => {
        if(!data){
            res.status(404).send({ message: `No exercise with that ${id}. has been found.`});
        }else{
            res.send(data);
        }
       })
       .catch(err => {
        res.status(500).send({
                    message: err.message || "Some error occurred while updating exercise."});
       });            
    }
// Delete a exercise with the specified id in the request

exports.delete = (req, res) => {
    const id = req.params.id;

    Exercisedb.findByIdAndDelete(id)
    .then(exercise => {
        if(!data){
            res.status(404).send({ message: `No exercise with that ${id}. has been found.`});
        }else{
            res.send({ " message": "Exercise has been deleted successfully."});
        }
       })
      .catch(err => {
        res.status(500).send({ "Could not delete Exercise with id=" : id});
       });            
    }

            